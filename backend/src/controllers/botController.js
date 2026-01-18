// const fs = require("fs");
// const History = require("../models/History");

// // Node.js 18+ has fetch globally, no import needed

// module.exports.askBot = async (req, res) => {
//   try {
//     const prompt = req.body.prompt;
//     const lang = req.body.lang || (req.user?.language || "hi");

//     let imagePart = "";
//     if (req.file) {
//       const img = fs.readFileSync(req.file.path, { encoding: "base64" });
//       imagePart = `
// You are "Mitra AI" — a helpful assistant for:
// ✔ Farmers  
// ✔ Drivers  
// ✔ Labor workers  

// Your goals:
// - Give practical, simple advice.
// - Speak in the user's language: ${lang}
// - If an image is provided, explain what you see.
// - Never use complicated technical terms unless needed.
// - ALWAYS reply in clear bullet points.
// - Use "•" or "1. 2. 3." format.
// - Put each point on a new line.
// - Do NOT write long paragraphs.
// - Break everything into small easy-to-read points.

// User Question:
// ${prompt}

// ${imagePart}
// `;

//     const response = await fetch(
//       `https://generativelanguage.googleapis.com/v1beta/models/${process.env.GEMINI_MODEL}:generateContent?key=${process.env.GEMINI_API_KEY}`,
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           contents: [{ parts: [{ text: systemPrompt }] }],
//         }),
//       }
//     );

//     const result = await response.json();

//     const answer =
//       result?.candidates?.[0]?.content?.parts?.[0]?.text ||
//       "I could not understand your question. Please try again.";

//     // Save history for logged in users
//     if (req.user) {
//       await History.create({
//         userId: req.user._id,
//         question: prompt,
//         answer,
//         language: lang,
//       });
//     }

//     // Remove uploaded temp file
//     if (req.file) fs.unlinkSync(req.file.path);

//     return res.json({ answer, language: lang });

//   } catch (error) {
//     console.error("Bot error:", error);

//     if (req.file) fs.unlinkSync(req.file.path);

//     return res.status(500).json({
//       success: false,
//       answer: "Server error. Please try again later.",
//     });
//   }
// };

const fs = require("fs");
const History = require("../models/History");

// Node 18+ has fetch globally

module.exports.askBot = async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const lang = req.body.lang || (req.user?.language || "hi");

    // ----------------------
    // IMAGE HANDLING
    // ----------------------
    let imagePart = "";
    if (req.file) {
      const img = fs.readFileSync(req.file.path, { encoding: "base64" });
      imagePart = `
Image (base64): ${img}
Mime-Type: ${req.file.mimetype}
      `;
    }

    // ----------------------
    // SYSTEM PROMPT
    // ----------------------
    const systemPrompt = `
You are "Mitra AI" — a helpful assistant for:
✔ Farmers
✔ Drivers
✔ Labor workers  

Your goals:
- Give practical, simple advice.
- Always speak in user's language: ${lang}
- If an image is provided, explain what you see.
- ALWAYS reply in clear bullet points.
- Use "•" or "1. 2. 3." format.
- Each point must be on a new line.
- Never write long paragraphs.
- Keep answers short and easy to understand.

User Question:
${prompt}

${imagePart}
    `;

    // ----------------------
    // GEMINI API CALL
    // ----------------------
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${process.env.GEMINI_MODEL}:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: systemPrompt }] }],
        }),
      }
    );

    const result = await response.json();

    const answer =
      result?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I could not understand your question. Please try again.";

    // ----------------------
    // SAVE HISTORY
    // ----------------------
    if (req.user) {
      await History.create({
        userId: req.user._id,
        question: prompt,
        answer,
        language: lang,
      });
    }

    // Delete uploaded temp file
    if (req.file) fs.unlinkSync(req.file.path);

    return res.json({ answer, language: lang });

  } catch (error) {
    console.log("Bot error:", error);

    if (req.file) fs.unlinkSync(req.file.path);

    return res.status(500).json({
      success: false,
      answer: "Server error. Please try again later.",
    });
  }
};
