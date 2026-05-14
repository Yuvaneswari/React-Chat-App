import { useState } from "react";
import { askGemini } from "../services/api";

export default function ExamPreparation() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [subject, setSubject] = useState("OS");

  // AI Tutor Prompt
  const examPrompt = `
You are an expert exam tutor for college students.

Subjects:
- Operating Systems (OS)
- DBMS
- Computer Networks (CN)
- Software Engineering (SE)

Rules:
- Give exam-ready answers
- Use structure:
  1. Definition
  2. Explanation
  3. Key Points
  4. Example
  5. Exam Tips
- Keep answers simple and scoring-oriented
`;

  // Subject-wise resources
  const resources = {
    OS: {
      youtube: "https://youtu.be/vBURTt97EkA?si=Z1JF0kAmz4EkvB61",
      website: "https://www.geeksforgeeks.org/operating-systems/",
    },
    DBMS: {
      youtube: "https://youtu.be/kBdlM6hNDAE?si=bQwm0WrfEIgYZqT6",
      website: "https://www.geeksforgeeks.org/dbms/",
    },
    CN: {
      youtube: "https://youtu.be/IPvYjXCsTg8?si=rA4U0jlYCdbWJQ6T",
      website: "https://www.geeksforgeeks.org/computer-network-tutorials/",
    },
    SE: {
      youtube: "https://youtu.be/8jH07r6135o?si=_2Eavf99P7jTQQlC",
      website: "https://www.geeksforgeeks.org/software-engineering/",
    },
    BigData: {
      youtube: "https://youtu.be/Tyg1FVNq40g?si=yl_0YZ6ZUWni_j9n",
      website: "https://www.geeksforgeeks.org/big-data/big-data-analytics-tutorial/",
    },
    FLAT: {
      youtube: "https://youtu.be/O3NU5dLDU2Q?si=2ztTtB8gQzbBwehs",
      website: "https://www.geeksforgeeks.org/theory-of-computation/introduction-of-theory-of-computation/",
    },
    OOPS:{
      youtube: "https://youtu.be/BSVKUk58K6U?si=421fiBXdoPMiDTSy",
      website: "https://www.geeksforgeeks.org/java/object-oriented-programming-oops-concept-in-java/",
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    const response = await askGemini(
      `${examPrompt}
Subject: ${subject}

User Question: ${input}`
    );

    const aiMsg = { role: "ai", text: response };

    setMessages([...updatedMessages, aiMsg]);
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-full p-4">

      {/* HEADER */}
      <h2 className="text-xl font-semibold"> Exam Preparation</h2>

      {/* SUBJECT SELECTOR */}
      <div className="flex gap-2 mt-3 flex-wrap">
        {["OS", "DBMS", "CN", "SE", "BigData", "FLAT", "OOPS"].map((sub) => (
          <button
            key={sub}
            onClick={() => setSubject(sub)}
            className={`px-3 py-1 border rounded ${
              subject === sub ? "bg-blue-500 text-black" : ""
            }`}
          >
            {sub}
          </button>
        ))}
      </div>

      {/* CHAT BOX */}
      <div className="flex-1 overflow-y-auto mt-4 space-y-1 border p-3 rounded bg-gray-50">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded max-w-[80%] ${
              msg.role === "user"
                ? "ml-auto bg-blue-500 text-white"
                : "bg-white text-black "
            }`}
          >
            {msg.text}
          </div>
        ))}

        {loading && (
          <div className="text-gray-500">Loading</div>
        )}
      </div>

      {/* INPUT */}
      <div className="flex gap-2 mt-3">
        <input
          className="border p-2 flex-1 rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Ask ${subject} question`}
        />

        <button
          onClick={sendMessage}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Ask
        </button>
      </div>

      {/* RESOURCES SECTION */}
      <div className="mt-4 p-3 border rounded bg-white">
        <h3 className="font-semibold"> Study Resources</h3>

        <div className="flex flex-col gap-2 mt-2 text-black">
          <a href={resources[subject].youtube} target="_blank" rel="noreferrer">
             Watch YouTube Lectures ({subject})
          </a>

          <a href={resources[subject].website} target="_blank" rel="noreferrer">
            Read Notes ({subject})
          </a>
        </div>
      </div>

    </div>
  );
}