class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const text = message.toLowerCase();
    if (text.includes('kundli')) return this.actionProvider.handleKundli();
    if (text.includes('जन्म') || text.includes('birth time')) return this.actionProvider.handleBirthTime();
    if (text.includes('book') || text.includes('बुक')) return this.actionProvider.handleBooking();
    if (text.includes('service') || text.includes('सेवा')) return this.actionProvider.handleServiceChoice();
    return this.actionProvider.handleFallback();
  }
}

export default MessageParser;
