// ivr.routes.js (replace existing mapping/extraction)
const express = require("express");
const router = express.Router();
const IVR = require("../controllers/ivr.controller");

// Normalize text: lowercase, remove punctuation, normalize unicode spaces
function normalizeText(s = "") {
  return s
    .normalize("NFKD")              // unicode normalization
    .replace(/[^\p{L}\p{N}\s]/gu, "") // remove punctuation (keeps letters/numbers/space)
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

// map spoken text -> single digit
function mapSpeechToDigit(text = "") {
  const t = normalizeText(text);

  // Direct numeric words (english + hindi + hinglish)
  const mapping = [
    { rx: /\b(?:0|zero|shunya|शून्य)\b/, d: "0" },
    { rx: /\b(?:1|one|ek|ek|एक|haan|हाँ|हाँजी|हाँह|yes|yess)\b/, d: "1" }, // include yes/haan as confirm
    { rx: /\b(?:2|two|do|दो)\b/, d: "2" },
    { rx: /\b(?:3|three|teen|तीन)\b/, d: "3" },
    { rx: /\b(?:4|four|char|चार)\b/, d: "4" },
    { rx: /\b(?:5|five|paanch|पांच)\b/, d: "5" },
    { rx: /\b(?:6|six|chhe|छह)\b/, d: "6" },
    { rx: /\b(?:7|seven|saat|सात)\b/, d: "7" },
    { rx: /\b(?:8|eight|aath|आठ)\b/, d: "8" },
    { rx: /\b(?:9|nine|nau|नौ)\b/, d: "9" },

    // affirmative / negative explicit mappings (useful if user says "yes"/"no" instead of digits)
    { rx: /\b(?:yes|ya|yeah|yup|haan|हाँ|ठीक|theek|bilkul)\b/, d: "1" },
    { rx: /\b(?:no|nah|nahi|नहीं|nahiin|na)\b/, d: "2" }
  ];

  for (const m of mapping) {
    if (m.rx.test(t)) return m.d;
  }

  // fallback: if the text contains any digit character, pick first digit
  const found = t.match(/\d/);
  if (found) return found[0];

  return null;
}

// extract digits from a vapi body (support function_tool, dtmf_tool, plain fields and transcripts)
function extractDigits(body = {}) {
  // 1) tool call (function_tool or dtmf_tool)
  if (body.tool && typeof body.tool === "object") {
    const name = body.tool.name;
    const args = body.tool.arguments || {};
    if (args.digits) return String(args.digits).trim();
    if (args.dtmf) return String(args.dtmf).trim();
    if (args.dtmfValue) return String(args.dtmfValue).trim();
    if (args.digit) return String(args.digit).trim();
  }

  // 2) provider-level dtmf/digits fields
  if (typeof body.dtmf === "string" && body.dtmf.trim()) return body.dtmf.trim();
  if (typeof body.digits === "string" && body.digits.trim()) return body.digits.trim();

  // 3) search likely transcript locations and log where we found something
  const transcriptCandidates = [
    body.transcript,
    body.text,
    body.message && body.message.transcript,
    body.message && body.message.text,
    body.artifact && body.artifact.transcript,
    body.artifact && body.artifact.text,
    // sometimes vapi nests messages: artifact.messages[0].transcript
    (body.artifact && Array.isArray(body.artifact.messages) && body.artifact.messages[0] && (body.artifact.messages[0].transcript || body.artifact.messages[0].text)),
    (body.message && Array.isArray(body.message?.messages) && body.message.messages[0] && (body.message.messages[0].transcript || body.message.messages[0].text))
  ];

  for (const idx in transcriptCandidates) {
    const t = transcriptCandidates[idx];
    if (typeof t === "string" && t.trim()) {
      console.log(`🔎 transcriptCandidate[${idx}] =`, t.slice(0, 300));
      const digit = mapSpeechToDigit(t);
      if (digit) {
        console.log("✅ mapped transcript -> digit:", digit);
        return digit;
      }
    }
  }

  // 4) no digit found
  return null;
}

router.post("/handler", async (req, res) => {
  console.log("🔥 WEBHOOK RECEIVED (summary):", {
    event: req.body.event || req.body.message?.type,
    tool: req.body.tool?.name,
    from: req.body.customer?.number || req.body.from
  });

  // attempt to extract a digit
  const digit = extractDigits(req.body);

  if (digit) {
    console.log("🔥 DTMF DIGITS EXTRACTED:", digit);
    req.dtmf = digit;
    return IVR.handleDTMF(req, res);
  }

  // handle incoming call / assistant started
  if (req.body.event === "incoming_call" || req.body.message?.type === "assistant.started") {
    return IVR.handleIncomingCall(req, res);
  }

  // nothing actionable yet
  return res.json({ status: "ok", reason: "no-digits-yet" });
});

module.exports = router;


// Legacy routes
// router.post("/incoming", IVR.handleIncomingCall);
// router.post("/pin", IVR.handlePINInput);
// router.post("/dtmf", IVR.handleDTMF);

