import { motion } from 'framer-motion';

const QuickReplies = ({ actionProvider, options = [] }) => (
  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-3 flex flex-wrap gap-2">
    {options.map((label, i) => (
      <motion.button
        key={label}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.05 }}
        whileHover={{ y: -2, scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => {
          const lower = label.toLowerCase();
          if (lower.includes('kundli')) actionProvider.handleKundli();
          else if (lower.includes('palm')) actionProvider.handlePalmistry();
          else if (lower.includes('career')) actionProvider.handleSmartGuidance('career issue');
          else if (lower.includes('जन्म') || lower.includes('birth')) actionProvider.handleBirthTime();
          else if (lower.includes('charge')) actionProvider.handleCharges();
          else if (lower.includes('choose')) actionProvider.handleServiceChoice();
          else actionProvider.handleFallback();
        }}
        className="rounded-full border border-brand-gold/45 bg-brand-midnight/40 px-3 py-1 text-xs text-brand-gold shadow-[0_0_14px_rgba(123,47,247,0.25)] transition hover:border-brand-gold hover:bg-brand-gold/15"
      >
        {label}
      </motion.button>
    ))}
  </motion.div>
);

export default QuickReplies;
