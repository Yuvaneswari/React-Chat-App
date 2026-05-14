import { useEffect, useRef, useState } from "react";
import { askGemini } from "../services/api";

export default function ChatBox({ chat, addMessage }) {
  const bottomRef = useRef(null);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat?.messages]);

  // Send message (input)
  const sendMessage = async () => {
    if (!input.trim()) return;

    const text = input;
    setInput("");

    addMessage(text, "user");
    setLoading(true);

    try {
      const reply = await askGemini(text);
      addMessage(reply, "ai");
    } catch (err) {
      addMessage("Error getting response", "ai");
    }

    setLoading(false);
  };

  // Send message (buttons)
  const sendMessageWithText = async (text) => {
    if (!text.trim()) return;

    addMessage(text, "user");
    setLoading(true);

    try {
      const reply = await askGemini(text);
      addMessage(reply, "ai");
    } catch (err) {
      addMessage("Error getting response", "ai");
    }

    setLoading(false);
  };

  // No chat selected
  if (!chat) return <div className="p-4"></div>;

 return (
  <div className="flex flex-col h-full">

    {/* MESSAGES AREA */}
    <div className="flex-1 overflow-y-auto p-4">

      {chat.messages.length === 0 ? (
        /* ✅ WELCOME SCREEN */
        <div className="flex flex-col items-center justify-center h-full text-center text-gray-400">
          
          <h1 className="text-3xl font-bold mb-2">
            What do you want to prepare today?
          </h1>
          </div>
      ) : (
        /* ✅ CHAT UI */
        <div className="space-y-3">
          {chat.messages.map((msg, i) => (
            <div
              key={i}
              className={`p-3 rounded-lg max-w-md ${
                msg.role === "user"
                  ? "ml-auto bg-blue-600 text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              {msg.text}
            </div>
          ))}

          {loading && (
            <div className="bg-gray-300 text-black p-3 rounded-lg w-fit">
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      )}

    </div>

    {/* INPUT ALWAYS VISIBLE */}
    <div className="p-3 flex gap-2 border-gray-700">

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        placeholder="Ask anything"
        className="flex-1 p-2 rounded bg-gray-800 text-white outline-none"
      />

      <button
        onClick={sendMessage}
        className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
      >
        Send
      </button>

    </div>

  </div>
 );
}
