import { useState } from "react";

export default function InputBox({ onSend }) {
  const [text, setText] = useState("");

  return (
    <div className="p-3 flex gap-2">
      <input
        className="flex-1 p-2 rounded bg-black border border-gray-600"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type message..."
      />

      <button
        className="bg-green-500 px-4 rounded"
        onClick={() => {
          onSend(text);
          setText("");
        }}
      >
        Ask
      </button>
    </div>
  );
}