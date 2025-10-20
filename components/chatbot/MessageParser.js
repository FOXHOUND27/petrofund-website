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
    } else if (lower.includes("help") || lower.includes("assist")) {
      this.actionProvider.help();

      // FAQ detection
    } else if (lower.includes("?") || this.isLikelyFAQ(lower)) {
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
