

// import React, { useEffect, useRef, useState } from "react";
// import axios from "axios";

// export default function ChatBot({ embedded }) {
//   const API = "http://localhost:5000/api";
//   const token = localStorage.getItem("token");

//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const [listening, setListening] = useState(false);
//   const recognitionRef = useRef(null);

//   // Voice recognition setup
//   useEffect(() => {
//     const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (!SR) return;

//     const rec = new SR();
//     rec.lang = "hi-IN";
//     rec.interimResults = false;

//     rec.onresult = (e) => {
//       setInput(e.results[0][0].transcript);
//       setListening(false);
//     };

//     recognitionRef.current = rec;
//   }, []);

//   const toggleMic = () => {
//     if (!recognitionRef.current) return alert("Voice not supported");
//     if (!listening) recognitionRef.current.start();
//     else recognitionRef.current.stop();
//     setListening(!listening);
//   };

//   const speak = (text) => {
//     const u = new SpeechSynthesisUtterance(text);
//     u.lang = "hi-IN";
//     window.speechSynthesis.speak(u);
//   };

//   const sendMessage = async () => {
//     if (!input && !file) return;

//     setMessages((prev) => [...prev, { role: "user", text: input }]);
//     setLoading(true);

//     const form = new FormData();
//     form.append("prompt", input);
//     form.append("lang", "hi");
//     if (file) form.append("file", file);

//     const res = await axios.post(`${API}/bot/ask`, form, {
//       headers: token ? { Authorization: `Bearer ${token}` } : {},
//     });

//     const ans = res.data.answer;

//     speak(ans);

//     setMessages((prev) => [...prev, { role: "bot", text: ans }]);
//     setInput("");
//     setFile(null);
//     setLoading(false);
//   };

//   return (
//     <div className={embedded ? "" : "max-w-2xl mx-auto p-5"}>
//       {!embedded && (
//         <h1 className="text-2xl font-bold text-green-700 mb-4">
//           🌾 AI Krishi Bot
//         </h1>
//       )}

//       {/* Chat container */}
//       <div
//   className={`border p-3 rounded bg-gray-50 ${
//     embedded ? "h-[480px]" : "h-[600px]"
//   } overflow-y-scroll no-scrollbar`}
// >

//         {messages.map((m, i) => (
//           <div
//             key={i}
//             className={`my-2 flex ${
//               m.role === "user" ? "justify-end" : "justify-start"
//             }`}
//           >
//             <span
//               className={`px-3 py-2 rounded-xl text-white ${
//                 m.role === "user" ? "bg-green-600" : "bg-yellow-700"
//               }`}
//             >
//               {m.text}
//             </span>
//           </div>
//         ))}

//         {loading && (
//           <div className="text-gray-500 animate-pulse">Bot is typing...</div>
//         )}
//       </div>

//       {/* File upload */}
//       <input
//         type="file"
//         className="mt-3"
//         onChange={(e) => setFile(e.target.files[0])}
//       />

//       {/* Input area */}
//       <div className="flex gap-2 mt-3">
//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           className="flex-1 border p-2 rounded"
//           placeholder="Ask something..."
//         />

//         {/* Mic button */}
//         <button
//           onClick={toggleMic}
//           className="px-3 bg-yellow-600 text-white rounded"
//         >
//           {listening ? "🎙️..." : "🎙️"}
//         </button>

//         {/* Send button */}
//         <button
//           onClick={sendMessage}
//           className="px-3 bg-green-700 text-white rounded"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function ChatBot({ embedded }) {
  const API = "http://localhost:5000/api";
  const token = localStorage.getItem("token");

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  // Voice recognition setup
  useEffect(() => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return;

    const rec = new SR();
    rec.lang = "hi-IN";
    rec.interimResults = false;

    rec.onresult = (e) => {
      setInput(e.results[0][0].transcript);
      setListening(false);
    };

    recognitionRef.current = rec;
  }, []);

  const toggleMic = () => {
    if (!recognitionRef.current) return alert("Voice not supported");
    if (!listening) recognitionRef.current.start();
    else recognitionRef.current.stop();
    setListening(!listening);
  };

  const speak = (text) => {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "hi-IN";
    window.speechSynthesis.speak(u);
  };

  const sendMessage = async () => {
    if (!input && !file) return;

    // Add user message
    setMessages((prev) => [...prev, { role: "user", text: input }]);
    setLoading(true);

    const form = new FormData();
    form.append("prompt", input);
    form.append("lang", "hi");
    if (file) form.append("file", file);

    const res = await axios.post(`${API}/bot/ask`, form, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });

    const ans = res.data.answer;

    speak(ans);

    // Add bot reply
    setMessages((prev) => [...prev, { role: "bot", text: ans }]);
    setInput("");
    setFile(null);
    setLoading(false);
  };

  return (
    <div
      className={
        embedded
          ? "h-full flex flex-col"
          : "max-w-2xl mx-auto p-5 flex flex-col"
      }
    >
      {/* Chat container */}
      <div className="flex-1 border rounded bg-gray-50 flex flex-col overflow-hidden">

        {/* Messages Area */}
        <div className="flex-1 overflow-y-scroll overflow-x-hidden no-scrollbar p-3">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`my-2 flex ${
                m.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <span
                className={`px-3 py-2 rounded-xl text-white bot-message ${
                  m.role === "user" ? "bg-green-600" : "bg-yellow-700"
                }`}
              >
                {m.text}
              </span>
            </div>
          ))}

          {loading && (
            <div className="text-gray-500 animate-pulse">Bot is typing...</div>
          )}
        </div>

        {/* File upload */}
        <div className="p-2 border-t bg-white">
          <input
            type="file"
            className="w-full text-sm"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        {/* Input area */}
        <div className="flex gap-2 p-2 border-t bg-white">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border p-2 rounded"
            placeholder="Ask something..."
          />

          {/* Mic button */}
          <button
            onClick={toggleMic}
            className="px-3 bg-yellow-600 text-white rounded"
          >
            {listening ? "🎙️..." : "🎙️"}
          </button>

          {/* Send button */}
          <button
            onClick={sendMessage}
            className="px-3 bg-green-700 text-white rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
