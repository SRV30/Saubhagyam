import { motion } from 'framer-motion';

const TestimonialCard = ({ quote, name, rating = 5 }) => (
  <motion.article whileHover={{ y: -8 }} className="group min-w-[18rem] max-w-sm rounded-2xl border border-brand-gold/30 bg-brand-elevated/35 p-6 shadow-[0_0_30px_rgba(212,175,55,0.18)] backdrop-blur-xl">
    <p className="text-brand-cream/90">“{quote}”</p>
    <p className="mt-3 text-brand-gold">{'★'.repeat(rating)}</p>
    <p className="mt-5 font-heading text-brand-gold-bright">{name}</p>
    <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-brand-gold/70 to-transparent opacity-0 transition group-hover:opacity-100" />
  </motion.article>
);

export default TestimonialCard;
