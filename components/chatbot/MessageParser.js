class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lower = message.toLowerCase().trim();

    // Greetings
    if (/(hello|hi|hey)/.test(lower)) {
      this.actionProvider.greet();

      // Help
    } else if (lower.includes("help") || this.isLikelyFAQ(lower)) {
      this.actionProvider.handleFAQ(message);

      // Fallback
    } else {
      this.actionProvider.unknown();
    }
  }

  isLikelyFAQ(message) {
    const faqWords = [
      "how",
      "what",
      "when",
      "where",
      "can",
      "do",
      "which",
      "are",
      "is",
    ];
    return faqWords.some((word) => message.startsWith(word));
  }
}

export default MessageParser;
