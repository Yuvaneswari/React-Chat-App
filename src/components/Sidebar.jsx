import { useState } from "react";

export default function Sidebar({
  chats,
  activeChat,
  setActiveChat,
  createNewChat,
  setActiveTab,
  darkMode,
  deleteChat,
  sidebarOpen,
  setSidebarOpen,
}) {
  return (
    <>
      {/* 🔲 Overlay (mobile only) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* 📌 Sidebar */}
      <div
        className={`
          fixed md:static z-50 h-full w-64
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          ${darkMode ? "bg-gray-800" : "bg-white"}
        `}
      >

        {/* Close button (mobile only) */}
        <div className="md:hidden flex justify-end p-2">
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-xl"
          >
            ✕
          </button>
        </div>

        {/* Sidebar Header */}
        <div className="p-4 font-bold text-lg">
          Help Desk
        </div>

        {/* Tabs */}
        <div className="p-2 space-y-2">
          <button
            onClick={createNewChat}
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            + New Chat
          </button>

          <button
            onClick={() => setActiveTab("chat")}
            className="w-full text-left p-2 hover:bg-gray-700 rounded"
          >
            Chat
          </button>

          <button
            onClick={() => setActiveTab("dsa")}
            className="w-full text-left p-2 hover:bg-gray-700 rounded"
          >
            DSA Help
          </button>

          <button
            onClick={() => setActiveTab("placement")}
            className="w-full text-left p-2 hover:bg-gray-700 rounded"
          >
            Placement Plan
          </button>

          <button
            onClick={() => setActiveTab("youtube")}
            className="w-full text-left p-2 hover:bg-gray-700 rounded"
          >
            YouTube Resources
          </button>
            <button
            onClick={() => setActiveTab("exam")}
            className="w-full text-left p-2 hover:bg-gray-700 rounded"
          >
            Exam Preparation
          </button>
        </div>

        {/* Chat List */}
        <div className="p-2 mt-4">
          <h2 className="text-sm mb-2 opacity-70">Recents</h2>

          {chats.map((chat) => (
            <div
              key={chat.id}
              className={`p-2 rounded cursor-pointer flex justify-between items-center ${
                activeChat === chat.id ? "bg-blue-600 text-white" : ""
              }`}
              onClick={() => {
                setActiveChat(chat.id);
                setSidebarOpen(false);
              }}
            >
              <span className="truncate">{chat.title}</span>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteChat(chat.id);
                }}
                className="text-red-400 ml-2"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}