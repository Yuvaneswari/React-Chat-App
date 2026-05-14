import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <div className="flex items-center gap-2 p-3 bg-blue-900">

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type message"
        className="flex-1 px-4 py-3 rounded-full bg-blue-800 text-white placeholder-blue-200 outline-none border border-blue-600"
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />

      <button
        onClick={handleSend}
        className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-500"
      >
        Send
      </button>

    </div>
  );
}