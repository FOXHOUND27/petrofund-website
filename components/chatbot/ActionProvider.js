import { createChatBotMessage } from "react-chatbot-kit";
import faqs from "../data/faq.json";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const msg = this.createChatBotMessage("Hello! 👋 How can I assist you?");
    this.update(msg);
  }

  help() {
    const msg = this.createChatBotMessage(
      "Sure! I can answer questions about our services, website, or contact info."
    );
    this.update(msg);
  }

  about() {
    const msg = this.createChatBotMessage(
      "This site was built using Next.js and React — your AI assistant is here to help!"
    );
    this.update(msg);
  }

  unknown() {
    const msg = this.createChatBotMessage(
      "Sorry, I didn’t quite get that. Could you try rephrasing?"
    );
    this.update(msg);
  }

  handleFAQ(question) {
    const found = faqs.find((faq) =>
      question.toLowerCase().includes(faq.question.toLowerCase())
    );

    const message = found
      ? this.createChatBotMessage(found.answer)
      : this.createChatBotMessage(
          "I'm sorry, I don't have an answer for that yet."
        );

    this.addMessageToState(message);
  }

  update(message) {
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }
}

export default ActionProvider;
