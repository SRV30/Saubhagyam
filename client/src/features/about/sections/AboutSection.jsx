import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const AboutSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      y: -12,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, []);

  return (
    <section className="relative py-16 sm:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_25%,rgba(123,47,247,0.2),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(255,215,0,0.08),transparent_36%)]" />
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.65 }} className="space-y-6">
          <p className="text-sm tracking-[0.2em] text-brand-gold">ABOUT THE ASTROLOGER</p>
          <h2 className="font-heading text-4xl leading-tight text-brand-cream sm:text-5xl">Guiding Souls Through Ancient Vedic Insight</h2>
          <p className="text-brand-cream/85">With over 15 years of practical astrological experience, Saubhagyam provides grounded spiritual direction for modern life decisions in career, relationships, and personal transformation.</p>
          <p className="text-brand-cream/80">Our philosophy blends classical wisdom with compassionate counseling: clear remedies, practical guidance, and mindful action for long-term harmony.</p>
          <div className="grid grid-cols-3 gap-4">
            {[
              ['15+', 'Years Experience'],
              ['5000+', 'Consultations'],
              ['98%', 'Positive Feedback'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl border border-brand-gold/25 bg-brand-elevated/30 p-4 text-center backdrop-blur-xl">
                <p className="font-heading text-2xl text-brand-gold-bright">{value}</p>
                <p className="mt-1 text-xs text-brand-cream/80">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mx-auto w-full max-w-md">
          <div ref={imageRef} className="relative overflow-hidden rounded-3xl border border-brand-gold/35 bg-brand-midnight/45 p-3 shadow-[0_0_50px_rgba(212,175,55,0.2)] backdrop-blur-xl">
            <div className="h-[26rem] w-full rounded-2xl bg-[radial-gradient(circle_at_50%_30%,rgba(255,215,0,0.22),transparent_40%),linear-gradient(160deg,#2B1155_0%,#130025_100%)]" />
            <div className="absolute inset-x-8 bottom-8 rounded-xl border border-brand-gold/25 bg-brand-midnight/75 p-4 backdrop-blur-xl">
              <p className="font-heading text-lg text-brand-gold">Spiritual Guidance</p>
              <p className="mt-1 text-sm text-brand-cream/85">Calm, clear, and confidential consultations tailored to your path.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
