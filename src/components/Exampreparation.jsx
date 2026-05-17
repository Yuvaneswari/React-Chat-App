import { useState, useEffect } from "react";
import { askGemini } from "../services/api";

export default function ExamPreparation() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [subject, setSubject] = useState("OS");

  const subjects = {
    OS: "Operating Systems",
    DBMS: "Database Management Systems",
    CN: "Computer Networks",
    SE: "Software Engineering",
    BigData: "Big Data",
    FLAT: "Formal Languages & Automata Theory",
    OOPS: "Object Oriented Programming",
  };

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
    OOPS: {
      youtube: "https://youtu.be/BSVKUk58K6U?si=421fiBXdoPMiDTSy",
      website: "https://www.geeksforgeeks.org/java/object-oriented-programming-oops-concept-in-java/",
    },
  };

  const buildPrompt = (subject) => `
You are an expert exam tutor for college students.

Current Subject: ${subjects[subject]}

Rules:
- Give exam-ready answers
- Use structure:
  1. Definition
  2. Explanation
  3. Key Points
  4. Example
  5. Exam Tips
- Keep answers simple and scoring-oriented
- Focus only on ${subjects[subject]} syllabus concepts
`;

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    const updatedMessages = [...messages, userMsg];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    const response = await askGemini(
      `${buildPrompt(subject)}

User Question: ${input}`
    );

    const aiMsg = { role: "ai", text: response };

    setMessages((prev) => [...prev, aiMsg]);
    setLoading(false);
  };

  useEffect(() => {
    const chatBox = document.getElementById("chat-box");
    if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
  }, [messages]);

  return (
    <div className="flex flex-col h-full p-4">

      <h2 className="text-xl font-semibold">
         Exam Preparation
      </h2>

      {/* SUBJECT DROPDOWN */}
      <div className="mt-3">
        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="border p-2 rounded w-full text-black bg-white"
        >
          {Object.keys(subjects).map((key) => (
            <option key={key} value={key}>
              {subjects[key]}
            </option>
          ))}
        </select>
      </div>

      {/* CHAT */}
      <div
        id="chat-box"
        className="flex-1 overflow-y-auto mt-4 space-y-2 border p-3 rounded bg-gray-50"
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded max-w-[80%] ${
              msg.role === "user"
                ? "ml-auto bg-blue-500 text-white"
                : "bg-white text-black"
            }`}
          >
            {msg.text}
          </div>
        ))}

        {loading && (
          <div className="text-gray-600 font-medium">
        loading
          </div>
        )}
      </div>

      {/* INPUT */}
      <div className="flex gap-2 mt-3">
        <input
          className="border p-2 flex-1 rounded text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Ask ${subjects[subject]} question`}
        />

        <button
          onClick={sendMessage}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Ask
        </button>
      </div>

      {/* RESOURCES */}
      <div className="mt-4 p-3 border rounded bg-white">
        <h3 className="font-semibold text-black">
           Study Resources
        </h3>

        <div className="flex flex-col gap-2 mt-2 text-black">
          <a href={resources[subject].youtube} target="_blank">
             YouTube Lectures ({subjects[subject]})
          </a>

          <a href={resources[subject].website} target="_blank">
             Notes ({subjects[subject]})
          </a>
        </div>
      </div>

    </div>
  );
}