import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <div className="flex gap-2 p-3 bg-blue-900 sticky bottom-0">

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type message..."
        className="flex-1 px-4 py-3 rounded-full bg-blue-800 text-white outline-none"
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />

      <button
        onClick={handleSend}
        className="bg-blue-600 text-white px-5 rounded-full"
      >
        Send
      </button>
    </div>
  );
}