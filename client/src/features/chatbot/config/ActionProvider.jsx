import { createChatBotMessage } from 'react-chatbot-kit';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage, stateRef, languagePack) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.languagePack = languagePack;
  }

  addMessage = (text) => {
    const message = this.createChatBotMessage(text);
    this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
  };

  handleKundli = () => this.addMessage(this.languagePack.faqKundli);
  handleBirthTime = () => this.addMessage(this.languagePack.birthTime);
  handleBooking = () => this.addMessage(this.languagePack.booking);
  handleServiceChoice = () => this.addMessage(this.languagePack.serviceChoice);
  handleFallback = () => this.addMessage(this.languagePack.fallback);
}

export default ActionProvider;
