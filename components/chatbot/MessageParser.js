class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lower = message.toLowerCase();

    // Greeting
    if (lower.includes("hello") || lower.includes("hi")) {
      this.actionProvider.greet();

      // Help command
    } else if (lower.includes("help")) {
      this.actionProvider.help();

      // About command
    } else if (lower.includes("about")) {
      this.actionProvider.about();

      // FAQ: detect questions
    } else if (lower.includes("?")) {
      this.actionProvider.handleFAQ(message);

      // Fallback / unknown message
    } else {
      this.actionProvider.unknown();
    }
  }
}

export default MessageParser;
