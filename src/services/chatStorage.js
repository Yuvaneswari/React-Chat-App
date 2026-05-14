const STORAGE_KEY = "chat_history";

// Get all chats
export const getChats = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

// Save chats
export const saveChats = (chats) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(chats));
};

// Add new chat
export const addChat = (chat) => {
  const chats = getChats();
  const updated = [chat, ...chats];
  saveChats(updated);
  return updated;
};

// Delete chat
export const deleteChatById = (id) => {
  const chats = getChats();
  const updated = chats.filter((c) => c.id !== id);
  saveChats(updated);
  return updated;
};