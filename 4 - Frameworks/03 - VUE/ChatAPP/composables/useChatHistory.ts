import { get } from "ollama/src/utils.js";
import { defineStore } from "pinia";
import type { ChatRecord, ChatUsers } from "~/types";

export const useChatHistory = defineStore("chatHistory", () => {
  const conversations = ref<Record<string, ChatRecord[]>>({});
  const messageFactory = (
    message: string,
    sender: "user" | "ai",
    timestamp?: number
  ): ChatRecord => ({
    message,
    timestamp: timestamp || Date.now(),
    sender,
  });

  const addMessage = (chatRecord: ChatRecord, chatId: string) => {
    conversations.value[chatId].push(chatRecord);
  };

  const generateChatId = () => {
    return Math.random().toString(36).substring(2, 15);
  };

  const registerNewChat = (chatId: string) => {
    conversations.value[chatId] = [];
  };

  const getConversation = (chatId: string) => {
    return conversations.value[chatId];
  };

  const updateAssistance = (chatRecord: ChatRecord, chatId: string) => {
    const chat = getConversation(chatId);
    const lastMessage = chat.at(-1);

    if (lastMessage?.timestamp === chatRecord.timestamp) {
      lastMessage.message = lastMessage.message + chatRecord.message;
    } else {
      addMessage(chatRecord, chatId);
    }
  };

  const getChatList = () => {
    return Object.keys(conversations.value);
  };

  return {
    generateChatId,
    messageFactory,
    addMessage,
    getConversation,
    registerNewChat,
    updateAssistance,
    getChatList,
  };
});
