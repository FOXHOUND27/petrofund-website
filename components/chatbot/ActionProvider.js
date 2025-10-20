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
  handleFAQ(userInput) {
    const input = userInput.toLowerCase().trim();

    const found = faqs.find((faq) => {
      const keywords = faq.question
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, "")
        .split(" ");
      return keywords.some((kw) => input.includes(kw));
    });

    const msg = found
      ? this.createChatBotMessage(found.answer)
      : this.createChatBotMessage(
          "I'm sorry, I don't have an answer for that yet. Check https://www.petrofund.org."
        );

    this.addMessageToState(msg);
  }

  // Show clickable FAQ buttons
  showFAQButtons() {
    const buttons = faqs.map((faq) => ({
      text: faq.question,
      handler: () => this.handleFAQ(faq.question),
      id: faq.question,
    }));

    const msg = this.createChatBotMessage(
      "Here are some frequently asked questions:",
      {
        widget: "faqButtons",
        withAvatar: true,
        loading: false,
      }
    );

    this.addMessageToState(msg);
  }
}

export default ActionProvider;
