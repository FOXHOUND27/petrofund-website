import { createChatBotMessage } from "react-chatbot-kit";

import FaqSelector from "./FaqSelector";

const config = {
  botName: "HelperBot",
  initialMessages: [
    createChatBotMessage(
      "Hello! Type ? to see a list of frequently asked questions."
    ),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#4F3996",
    },
    chatButton: {
      backgroundColor: "#4F3996",
    },
  },
  widgets: [
    {
      widgetName: "faqSelector",
      widgetFunc: (props) => <FaqSelector {...props} />,
    },
  ],
};

export default config;
