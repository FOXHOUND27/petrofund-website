class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lower = message.toLowerCase();

    if (lower.includes("hello") || lower.includes("hi")) {
      this.actionProvider.greet();
    } else if (lower.includes("help")) {
      this.actionProvider.help();
    } else if (lower.includes("about")) {
      this.actionProvider.about();
    } else {
      this.actionProvider.unknown();
    }
  }
}

export default MessageParser;
