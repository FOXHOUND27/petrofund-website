import { createChatBotMessage } from "react-chatbot-kit";
import faqs from "../data/faq.json";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  // Add message helper
  addMessageToState = (message) => {
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  // Greet
  greet() {
    const msg = this.createChatBotMessage("Hello! 👋 How can I assist you?");
    this.addMessageToState(msg);
  }

  // Help
  help() {
    const msg = this.createChatBotMessage(
      "I can answer questions about PETROFUND scholarships. Try asking about eligibility, deadlines, coverage, or application process."
    );
    this.addMessageToState(msg);
  }

  // Unknown fallback
  unknown() {
    const msg = this.createChatBotMessage(
      "Sorry, I didn’t understand that. Please rephrase or check https://www.petrofund.org for more info."
    );
    this.addMessageToState(msg);
  }

  // Handle FAQ
  handleFAQ() {
    const message = this.createChatBotMessage(
      "Sure, here are some frequently asked questions:",
      {
        widget: "faqSelector",
      }
    );
    this.addMessageToState(message);
  }

  // Handle Answer
  handleAnswer(answer) {
    const message = this.createChatBotMessage(answer);
    this.addMessageToState(message);
  }
}

export default ActionProvider;
