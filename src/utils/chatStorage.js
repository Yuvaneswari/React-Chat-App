export const getChats = () => {
  return JSON.parse(localStorage.getItem("chats")) || {};
};

export const createChat = (id) => {
  const chats = getChats();

  chats[id] = {
    title: "New Chat",
    messages: []
  };

  localStorage.setItem("chats", JSON.stringify(chats));
};

export const addMessage = (chatId, message) => {
  const chats = getChats();

  if (!chats[chatId]) {
    chats[chatId] = {
      title: message.slice(0, 20),
      messages: []
    };
  }

  chats[chatId].messages.push(message);

  if (chats[chatId].title === "New Chat") {
    chats[chatId].title = message.slice(0, 20);
  }

  localStorage.setItem("chats", JSON.stringify(chats));
};