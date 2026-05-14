import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Chatbot from 'react-chatbot-kit';
import { useTranslation } from 'react-i18next';
import { createChatBotMessage } from 'react-chatbot-kit';
import ActionProvider from '../config/ActionProvider';
import MessageParser from '../config/MessageParser';
import { botText } from '../config/messages';
import QuickReplies from './QuickReplies';
import WhatsappCTA from './WhatsappCTA';
import 'react-chatbot-kit/build/main.css';
import '../styles/chatbot.css';

const FloatingChatbot = () => {
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith('hi') ? 'hi' : 'en';
  const text = botText[lang];

  const config = useMemo(
    () => ({
      botName: 'Cosmic Guide',
      initialMessages: [
        createChatBotMessage(text.greeting, {
          delay: 350,
          widget: 'quickReplies',
        }),
      ],
      customStyles: {
        botMessageBox: { backgroundColor: '#2B1155' },
        chatButton: { backgroundColor: '#D4AF37' },
      },
      widgets: [
        {
          widgetName: 'quickReplies',
          widgetFunc: (props) => <QuickReplies {...props} options={text.quick} />,
        },
        {
          widgetName: 'whatsapp',
          widgetFunc: () => <WhatsappCTA label={text.whatsappCta} />,
        },
      ],
    }),
    [text]
  );

  const providerFactory = (createMsg, setState, createClient, stateRef) => new ActionProvider(createMsg, setState, createClient, stateRef, text);

  return (
    <div className="fixed bottom-5 right-5 z-[70]">
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: 16, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.96 }} className="mb-3 w-[20rem] max-w-[85vw] overflow-hidden rounded-2xl border border-brand-gold/35 bg-brand-midnight/85 shadow-[0_0_45px_rgba(123,47,247,0.35)] backdrop-blur-2xl">
            <div className="border-b border-brand-gold/25 px-4 py-3 text-sm font-semibold text-brand-gold">Cosmic Guide</div>
            <Chatbot config={config} actionProvider={providerFactory} messageParser={MessageParser} placeholderText={lang === 'hi' ? 'अपना प्रश्न लिखें...' : 'Type your question...'} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} onClick={() => setOpen((prev) => !prev)} className="rounded-full border border-brand-gold/50 bg-brand-elevated/70 px-5 py-3 text-sm font-semibold text-brand-gold shadow-[0_0_28px_rgba(212,175,55,0.35)]">
        {open ? (lang === 'hi' ? 'बंद करें' : 'Close') : 'Cosmic Guide'}
      </motion.button>
    </div>
  );
};

export default FloatingChatbot;
