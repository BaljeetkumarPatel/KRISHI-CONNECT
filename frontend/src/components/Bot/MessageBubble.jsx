export default function MessageBubble({ text, sender }) {
  const isUser = sender === "user";

  return (
    <div className={`my-2 flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`px-4 py-2 rounded-xl max-w-[70%] text-white ${
          isUser ? "bg-green-600" : "bg-yellow-700"
        }`}
      >
        {text}
      </div>
    </div>
  );
}
