import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatBox from "./components/ChatBox";
import DSAHelp from "./components/DSAHelp";
import PlacementPlan from "./components/PlacementPlan";
import YouTubeResources from "./components/YouTubeResources";
import Exampreparation from "./components/Exampreparation";

const STORAGE_KEY = "chat_history";

/* ---------------- STORAGE ---------------- */
const loadChats = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

const saveChats = (chats) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(chats));
};

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [activeTab, setActiveTab] = useState("chat");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const generateTitle = (text) => {
    const words = text.split(" ");
    return words.length <= 4 ? text : words.slice(0, 4).join(" ");
  };

  useEffect(() => {
    const storedChats = loadChats();

    if (storedChats.length > 0) {
      setChats(storedChats);
      setActiveChat(storedChats[0].id);
    } else {
      const defaultChat = {
        id: "1",
        title: "New Chat",
        messages: [],
        createdAt: new Date().toISOString(),
      };

      setChats([defaultChat]);
      setActiveChat("1");
    }
  }, []);

  useEffect(() => {
    if (chats.length > 0) saveChats(chats);
  }, [chats]);

  function addMessage(text, role = "user") {
    if (!activeChat) return;

    setChats((prev) =>
      prev.map((chat) => {
        if (chat.id !== activeChat) return chat;

        const isFirst = chat.messages.length === 0;

        return {
          ...chat,
          title: isFirst ? generateTitle(text) : chat.title,
          messages: [...chat.messages, { role, text }],
        };
      })
    );
  }

  const createNewChat = () => {
    const id = Date.now().toString();

    const newChat = {
      id,
      title: "New Chat",
      messages: [],
      createdAt: new Date().toISOString(),
    };

    setChats((prev) => [newChat, ...prev]);
    setActiveChat(id);
    setSidebarOpen(false);
  };

  const deleteChat = (id) => {
    setChats((prev) => {
      const updated = prev.filter((c) => c.id !== id);
      if (activeChat === id) setActiveChat(updated[0]?.id || null);
      return updated;
    });
  };

  const currentChat = chats.find((c) => c.id === activeChat);

  /* ---------------- RENDER ---------------- */
  const renderContent = () => {
    switch (activeTab) {
      case "chat":
        return <ChatBox chat={currentChat} addMessage={addMessage} />;
      case "dsa":
        return <DSAHelp />;
      case "placement":
        return <PlacementPlan />;
      case "youtube":
        return <YouTubeResources />;
      case "exam":
        return <Exampreparation />;
      default:
        return <ChatBox chat={currentChat} addMessage={addMessage} />;
    }
  };

  return (
    <div
      className={
        darkMode
          ? "flex h-screen bg-gray-900 text-white"
          : "flex h-screen bg-gray-100 text-black"
      }
    >
      {/* SIDEBAR */}
      <Sidebar
        chats={chats}
        activeChat={activeChat}
        setActiveChat={(id) => {
          setActiveChat(id);
          setSidebarOpen(false);
        }}
        createNewChat={createNewChat}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        deleteChat={deleteChat}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* MAIN */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* TOP BAR */}
        <div className="flex items-center justify-between p-4">

          <button
            className="md:hidden text-2xl"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-blue-500 rounded"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>

        </div>

        {/* CONTENT */}
        <div className="flex-1 overflow-y-auto p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}