import { useEffect, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import routeConfig from '../../../app/routes/routeConfig';
import ZodiacWheel from '../components/ZodiacWheel';

const HeroSection = () => {
  const heroRef = useRef(null);
  const particleCount = 20;
  const particles = useMemo(
    () =>
      [...Array(particleCount)].map((_, idx) => ({
        id: idx,
        size: 2 + (idx % 4),
        left: `${(idx * 37) % 100}%`,
        delay: (idx % 8) * 0.4,
        duration: 8 + (idx % 5),
      })),
    []
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.hero-parallax-glow', {
        opacity: 0.75,
        scale: 1.08,
        duration: 4.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden py-14">
      <div className="hero-parallax-glow absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(123,47,247,0.45),transparent_50%),radial-gradient(circle_at_80%_25%,rgba(255,215,0,0.16),transparent_40%)]" />

      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-brand-gold/60"
          style={{ left: particle.left, width: particle.size, height: particle.size }}
          animate={{ y: ['-2vh', '100vh'], opacity: [0, 0.8, 0] }}
          transition={{ repeat: Infinity, duration: particle.duration, delay: particle.delay, ease: 'linear' }}
        />
      ))}

      <div className="container-padded relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease: 'easeOut' }} className="space-y-7">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="inline-flex rounded-full border border-brand-gold/30 bg-brand-elevated/35 px-4 py-1 text-xs tracking-[0.22em] text-brand-gold backdrop-blur-lg">
            SAUBHAGYAM • ANCIENT SCIENCE, MODERN CLARITY
          </motion.p>

          <h1 className="font-heading text-4xl leading-tight text-brand-cream sm:text-5xl lg:text-6xl">
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.8 }} className="block">
              Discover Guidance Through
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.8 }} className="block text-brand-gold-bright drop-shadow-[0_0_18px_rgba(255,215,0,0.4)]">
              Ancient Wisdom
            </motion.span>
          </h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65, duration: 0.8 }} className="max-w-2xl text-base text-brand-cream/85 sm:text-lg">
            Professional astrology consultations for career, relationships, life direction, and spiritual clarity.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }} className="flex flex-wrap gap-4">
            <Link to={routeConfig.bookConsultation} className="rounded-full border border-brand-gold/65 bg-brand-gold/20 px-6 py-3 text-sm font-semibold tracking-wide text-brand-gold shadow-[0_0_30px_rgba(212,175,55,0.3)] transition duration-300 hover:-translate-y-0.5 hover:bg-brand-gold/30">
              Book Consultation
            </Link>
            <Link to={routeConfig.services} className="rounded-full border border-brand-cream/30 px-6 py-3 text-sm font-semibold tracking-wide text-brand-cream transition duration-300 hover:border-brand-gold/60 hover:text-brand-gold">
              Explore Services
            </Link>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 1 }} className="relative mx-auto">
          <ZodiacWheel />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
