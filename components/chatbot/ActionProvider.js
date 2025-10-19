import { createChatBotMessage } from "react-chatbot-kit";

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

  update(message) {
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }
}

export default ActionProvider;
