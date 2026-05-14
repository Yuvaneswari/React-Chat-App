import { useState, useEffect } from "react";

export default function useChats() {
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState(null);

  // LOAD
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("chats"));
    if (saved) setChats(saved);
  }, []);

  // SAVE
  useEffect(() => {
    localStorage.setItem("chats", JSON.stringify(chats));
  }, [chats]);

  // CREATE CHAT
  const createNewChat = () => {
    const id = Date.now().toString();

    const newChat = {
      id,
      title: "New Chat",
      messages: []
    };

    setChats(prev => [newChat, ...prev]);
    setActiveChat(id);
  };

  // ADD MESSAGE
  const addMessage = (chatId, message, role = "user") => {
    setChats(prev =>
      prev.map(chat => {
        if (chat.id === chatId) {
          const isFirst = chat.messages.length === 0;

          return {
            ...chat,
            title: isFirst ? message.slice(0, 25) : chat.title,
            messages: [
              ...chat.messages,
              { role, text: message }
            ]
          };
        }
        return chat;
      })
    );
  };

  return {
    chats,
    activeChat,
    setActiveChat,
    createNewChat,
    addMessage
  };
}