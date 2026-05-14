import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, Icon, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ delay: index * 0.08, duration: 0.55, ease: 'easeOut' }}
    whileHover={{ y: -8, scale: 1.015 }}
    className="group relative overflow-hidden rounded-2xl border border-brand-gold/30 bg-brand-elevated/35 p-6 backdrop-blur-xl"
  >
    <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-brand-gold/10 blur-2xl transition duration-500 group-hover:bg-brand-gold/25" />
    <motion.div whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }} transition={{ duration: 0.6 }} className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-brand-gold/35 bg-brand-midnight/55 text-brand-gold shadow-[0_0_18px_rgba(212,175,55,0.28)]">
      <Icon className="text-2xl" />
    </motion.div>
    <h3 className="font-heading text-xl text-brand-gold-bright">{title}</h3>
    <p className="mt-3 text-sm leading-relaxed text-brand-cream/85">{description}</p>
    <div className="mt-5 h-px w-full bg-gradient-to-r from-brand-gold/0 via-brand-gold/60 to-brand-gold/0 opacity-0 transition group-hover:opacity-100" />
  </motion.article>
);

export default ServiceCard;
