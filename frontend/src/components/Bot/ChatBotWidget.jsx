
// import React, { useState } from "react";
// import ChatBot from "../../pages/ChatBot.jsx";

// export default function ChatBotWidget() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* Floating Bot Button */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-xl transition"
//         style={{ zIndex: 9999 }}
//       >
//         🤖
//       </button>

//       {/* Popup Chat Window */}
//       {open && (
//         <div
//           className="fixed bottom-20 right-6 w-[420px] h-[600px] bg-white shadow-2xl rounded-xl border border-gray-300 flex flex-col"
//           style={{ zIndex: 9999 }}
//         >
//           {/* Header */}
//           <div className="bg-green-600 text-white p-3 flex justify-between items-center">
//             <span className="font-bold">Krishi Mitra AI</span>
//             <button
//               onClick={() => setOpen(false)}
//               className="text-xl font-bold"
//             >
//               ×
//             </button>
//           </div>

//           {/* Chat Body – REMOVE fixed height, let ChatBot handle scrolling */}
//           <div className="flex-1">
//             <ChatBot embedded={true} />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

import React, { useState } from "react";
import ChatBot from "../../pages/ChatBot.jsx";

export default function ChatBotWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Bot Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-xl transition"
        style={{ zIndex: 9999 }}
      >
        🤖
      </button>

      {/* Popup Chat Window */}
      {open && (
        <div
          className="fixed bottom-20 right-6 w-[430px] h-[550px] bg-white shadow-2xl rounded-xl border border-gray-300 flex flex-col"
          style={{ zIndex: 9999 }}
        >
          {/* Header */}
          <div className="bg-green-600 text-white p-3 flex justify-between items-center">
            <span className="font-bold">Krishi Mitra AI</span>
            <button
              onClick={() => setOpen(false)}
              className="text-xl font-bold"
            >
              ×
            </button>
          </div>

          {/* Chat Area — FIXED */}
          <div className="flex-1 overflow-hidden">
            <ChatBot embedded={true} />
          </div>
        </div>
      )}
    </>
  );
}
