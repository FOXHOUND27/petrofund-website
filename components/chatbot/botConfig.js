import { createChatBotMessage } from "react-chatbot-kit";

import FaqSelector from "./FaqSelector";

const config = {
  botName: "PetroBot",
  initialMessages: [
    createChatBotMessage(
      "Hello! Type HELP to see a list of frequently asked questions about the scholarship process.",
      {
        className: "chatbot-message",
      }
    ),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#4F3996",
    },
    chatButton: {
      backgroundColor: "#F47C20",
    },
  },
  widgets: [
    {
      widgetName: "faqSelector",
      widgetFunc: (props) => <FaqSelector {...props} />,
      props: {},
      mapStateToProps: [],
    },
  ],
};

export default config;
