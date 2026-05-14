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
      botName: text.title,
      initialMessages: [createChatBotMessage(text.greeting, { delay: 350, widget: 'quickReplies' })],
      state: { languagePack: text },
      customStyles: {
        botMessageBox: { background: 'linear-gradient(120deg,#2b1155,#4a1d78)', color: '#F7EAD4' },
        chatButton: { backgroundColor: '#D4AF37' }
      },
      widgets: [
        { widgetName: 'quickReplies', widgetFunc: (props) => <QuickReplies {...props} options={text.quick} /> },
        { widgetName: 'whatsapp', widgetFunc: () => <WhatsappCTA label={text.whatsappCta} /> }
      ]
    }),
    [text]
  );

  return (
    <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="fixed bottom-5 right-5 z-[70]">
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: 18, scale: 0.94, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }} exit={{ opacity: 0, y: 10, scale: 0.96 }} className="mb-3 w-[22rem] max-w-[90vw] overflow-hidden rounded-3xl border border-brand-gold/40 bg-brand-midnight/65 shadow-[0_0_55px_rgba(123,47,247,0.45),0_0_24px_rgba(212,175,55,0.35)] backdrop-blur-2xl">
            <div className="relative border-b border-brand-gold/25 px-4 py-3 text-sm font-semibold text-brand-gold">
              {text.title}
              <motion.span className="absolute right-4 top-3 h-2 w-2 rounded-full bg-brand-gold" animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.2, 0.9] }} transition={{ repeat: Infinity, duration: 1.6 }} />
            </div>
            <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} placeholderText={lang === 'hi' ? 'अपना प्रश्न लिखें...' : 'Type your question...'} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.06, boxShadow: '0 0 30px rgba(212,175,55,0.5)' }} onClick={() => setOpen((prev) => !prev)} className="rounded-full border border-brand-gold/50 bg-brand-elevated/70 px-5 py-3 text-sm font-semibold text-brand-gold shadow-[0_0_28px_rgba(212,175,55,0.35)]">
        {open ? (lang === 'hi' ? 'बंद करें' : 'Close') : text.title}
      </motion.button>
    </motion.div>
  );
};

export default FloatingChatbot;
