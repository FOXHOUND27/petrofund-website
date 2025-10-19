import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "HelperBot",
  initialMessages: [
    createChatBotMessage("Hi there! 👋 How can I help you today?"),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#4F3996",
    },
    chatButton: {
      backgroundColor: "#4F3996",
    },
  },
};

export default config;
