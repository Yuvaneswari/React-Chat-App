import { useEffect, useRef, useState } from "react";
import { askGemini } from "../services/api";
import ReactMarkdown from "react-markdown";

export default function ChatBox({ chat, addMessage }) {
  const bottomRef = useRef(null);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  
  const [useMarkdown, setUseMarkdown] = useState(true);

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

  if (!chat) return <div className="p-4"></div>;

  return (
    <div className="flex flex-col h-full bg-gray-50">

      {/* HEADER TOGGLE */}
      <div className="p-2 border-b flex justify-between items-center bg-white">
        <h2 className="font-semibold text-black">AI Chat</h2>

       <button
  onClick={() => setUseMarkdown(!useMarkdown)}
  className={`text-xs px-3 py-1 border rounded transition
    ${
      useMarkdown
        ? "bg-blue-600 text-white hover:bg-black-700"
        : "bg-blue-600 text-white hover:bg-gray-700"
    }`}
>
  {useMarkdown ? "Disable Formatting" : "Enable Formatting"}
</button>
</div>

      {/* MESSAGES */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">

        {chat.messages.length === 0 ? (
          <div className="text-center text-gray-400 mt-20">
            <h1 className="text-xl font-bold">
              Start your conversation by asking a question!
            </h1>
          </div>
        ) : (
          <>
            {chat.messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-3 max-w-[75%] text-sm rounded-2xl shadow-md break-words leading-relaxed ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-white text-black border rounded-bl-none"
                  }`}
                >
                  {/* ✅ DYNAMIC MARKDOWN CONTROL */}
                  {msg.role === "ai" ? (
                    useMarkdown ? (
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    ) : (
                      <pre className="whitespace-pre-wrap font-sans">
                        {msg.text}
                      </pre>
                    )
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}

            {/* LOADING */}
            {loading && (
              <div className="flex justify-start">
                <div className="px-4 py-2 bg-gray-200 text-black rounded-2xl">
                  loading
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </>
        )}
      </div>

      {/* INPUT */}
      <div className="p-3 border-t flex gap-2 bg-white">

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask anything..."
          className="flex-1 p-3 rounded-xl border text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-5 rounded-xl hover:bg-blue-700"
        >
          Send
        </button>

      </div>

    </div>
  );
}