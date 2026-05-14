import { motion } from 'framer-motion';

const StepIndicator = ({ step }) => (
  <div className="mb-6 flex items-center gap-2">
    {[1, 2, 3].map((item) => (
      <motion.div key={item} animate={{ scale: step === item ? 1.08 : 1, opacity: step >= item ? 1 : 0.5 }} className={`h-2.5 rounded-full transition-all ${step >= item ? 'w-10 bg-brand-gold' : 'w-6 bg-brand-gold/30'}`} />
    ))}
  </div>
);

export default StepIndicator;
