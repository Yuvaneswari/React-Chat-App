import { useState } from "react";

export default function Sidebar({
  chats,
  activeChat,
  setActiveChat,
  createNewChat,
  setActiveTab,
  darkMode,
  sidebarOpen,
  setSidebarOpen,
  deleteChat,
}) {
  const [search, setSearch] = useState("");

  const filteredChats = chats.filter((chat) =>
    chat.title.toLowerCase().includes(search.toLowerCase())
  );
  console.log("FORCE TEST CHANGE");

  return (
    <>
      {/* Overlay (mobile) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed md:static z-50 h-full w-64 flex flex-col
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}
          border-r border-gray-700/20
        `}
      >
        {/* Close button (mobile) */}
        <div className="md:hidden flex justify-end p-2">
          <button onClick={() => setSidebarOpen(false)}>✕</button>
        </div>

        {/* Header */}
        <div className="p-4 font-bold text-lg border-b border-gray-700/20">
          Help Desk
        </div>

        {/* NEW CHAT */}
        <div className="p-2">
          <button
            onClick={createNewChat}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-lg"
          >
            + New Chat
          </button>
        </div>

        {/* SEARCH */}
        <div className="px-2 pb-2">
          <input
            type="text"
            placeholder="Search chats..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 rounded-lg border text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* TABS */}
        <div className="p-2 space-y-2">
          {["chat", "dsa", "placement", "youtube", "exam"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="w-full text-left p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* RECENTS */}
        <div className="flex-1 p-2 mt-2 overflow-y-auto space-y-1">
          <h2 className="text-xs opacity-60 mb-2">RECENT CHATS</h2>

          {filteredChats.length === 0 ? (
            <p className="text-sm opacity-50 p-2">No chats found</p>
          ) : (
            filteredChats.map((chat) => (
              <div
                key={chat.id}
                className={`group flex items-center justify-between p-2 rounded-lg cursor-pointer transition
                  ${
                    activeChat === chat.id
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
              >
                {/* OPEN CHAT */}
                <span
                  className="truncate flex-1"
                  onClick={() => {
                    setActiveChat(chat.id);
                    setSidebarOpen(false);
                  }}
                >
                  {chat.title}
                </span>

                {/* DELETE CHAT (optional) */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteChat(chat.id);
                  }}
                  className="opacity-0 group-hover:opacity-100 text-gray-400 text-xs ml-2"
                >
                  delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}