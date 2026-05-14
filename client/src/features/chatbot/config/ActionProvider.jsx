class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage, stateRef, createCustomMessage, props) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.text = props?.languagePack;
  }

  addMessage = (text, withCta = false) => {
    const message = this.createChatBotMessage(text, withCta ? { widget: 'whatsapp' } : undefined);
    this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
  };

  handleKundli = () => this.addMessage(this.text.faqKundli, true);
  handleBirthTime = () => this.addMessage(this.text.birthTime);
  handleBooking = () => this.addMessage(this.text.booking, true);
  handleServiceChoice = () => this.addMessage(this.text.serviceChoice);
  handlePalmistry = () => this.addMessage(this.text.palmistry, true);
  handleCharges = () => this.addMessage(this.text.charges, true);

  handleSmartGuidance = (query) => {
    const q = query.toLowerCase();
    if (/(career|job|profession|करियर)/.test(q)) return this.addMessage('Career Guidance is best for your query. We assess opportunities, timing, and practical remedies.', true);
    if (/(marriage|shaadi|विवाह|शादी)/.test(q)) return this.addMessage('Marriage Consultation is recommended for delay, compatibility, and timing concerns.', true);
    if (/(relationship|love|रिश्त|प्रेम)/.test(q)) return this.addMessage('Love & Relationship consultation can help with compatibility, communication, and emotional balance.', true);
    if (/(palm|palmistry|हस्तरेखा)/.test(q)) return this.handlePalmistry();
    return this.handleFallback();
  };

  handleFallback = () => this.addMessage(this.text.fallback);
}

export default ActionProvider;
