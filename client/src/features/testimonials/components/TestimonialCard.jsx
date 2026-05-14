import { motion } from 'framer-motion';

const TestimonialCard = ({ quote, name }) => (
  <motion.article whileHover={{ y: -8 }} className="group min-w-[18rem] max-w-sm rounded-2xl border border-brand-gold/30 bg-brand-elevated/35 p-6 backdrop-blur-xl">
    <p className="text-brand-cream/90">“{quote}”</p>
    <p className="mt-5 font-heading text-brand-gold-bright">{name}</p>
    <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-brand-gold/70 to-transparent opacity-0 transition group-hover:opacity-100" />
  </motion.article>
);

export default TestimonialCard;
