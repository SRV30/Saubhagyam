import { motion } from 'framer-motion';

const ZodiacWheel = () => (
  <motion.div
    aria-hidden
    animate={{ rotate: 360 }}
    transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
    className="relative h-72 w-72 rounded-full border border-brand-gold/40 bg-brand-elevated/20 shadow-[0_0_90px_rgba(212,175,55,0.22)] backdrop-blur-sm sm:h-[24rem] sm:w-[24rem]"
  >
    <div className="absolute inset-5 rounded-full border border-brand-gold/35" />
    <div className="absolute inset-12 rounded-full border border-brand-gold/30" />
    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.2),transparent_60%)]" />
    <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold shadow-[0_0_24px_rgba(255,215,0,0.8)]" />
  </motion.div>
);

export default ZodiacWheel;
