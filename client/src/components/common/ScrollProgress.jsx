import { motion, useSpring, useTransform, useScroll } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.25 });
  const shimmerX = useTransform(scrollYProgress, [0, 1], ['-25%', '115%']);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[80] h-2">
      <motion.div style={{ scaleX }} className="h-full origin-left bg-linear-to-r from-[#7B2FF7] via-[#D4AF37] to-[#F8E9A1] shadow-[0_0_16px_rgba(212,175,55,0.65),0_0_40px_rgba(123,47,247,0.55)]" />
      <motion.div style={{ x: shimmerX }} className="absolute inset-y-0 h-full w-20 bg-white/50 blur-sm" />
    </div>
  );
};

export default ScrollProgress;
