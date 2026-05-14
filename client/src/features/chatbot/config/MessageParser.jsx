class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const text = message.toLowerCase();
    if (text.includes('kundli')) return this.actionProvider.handleKundli();
    if (text.includes('जन्म') || text.includes('birth time')) return this.actionProvider.handleBirthTime();
    if (text.includes('book') || text.includes('बुक')) return this.actionProvider.handleBooking();
    if (text.includes('service') || text.includes('सेवा') || text.includes('choose')) return this.actionProvider.handleServiceChoice();
    if (text.includes('palm') || text.includes('हस्तरेखा')) return this.actionProvider.handlePalmistry();
    if (text.includes('charge') || text.includes('price') || text.includes('fees') || text.includes('शुल्क')) return this.actionProvider.handleCharges();
    return this.actionProvider.handleSmartGuidance(text);
  }
}

export default MessageParser;
