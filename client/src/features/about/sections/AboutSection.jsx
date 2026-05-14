import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import astrologerImg from "../../../assets/saubhagyam_dark.png";

const AboutSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    if (!imageRef.current) return;

    gsap.to(imageRef.current, {
      y: -12,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section className="relative py-16 sm:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_25%,rgba(123,47,247,0.2),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(255,215,0,0.08),transparent_36%)]" />

      <div className="grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
          className="space-y-6"
        >
          <p className="text-sm tracking-[0.2em] text-brand-gold">
            ABOUT THE ASTROLOGER
          </p>

          <h2 className="font-heading text-4xl leading-tight text-brand-cream sm:text-5xl">
            Guiding Souls Through Ancient Vedic Insight
          </h2>

          <p className="text-brand-cream/85">
            With over 20 years of practical astrological experience, Saubhagyam
            provides grounded spiritual direction for modern life decisions in
            career, relationships, and personal transformation.
          </p>

          <p className="text-brand-cream/80">
            Our philosophy blends classical wisdom with compassionate
            counseling: clear remedies, practical guidance, and mindful action
            for long-term harmony.
          </p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
            {[
              ["20+", "Years Experience"],
              ["5000+", "Consultations"],
            ].map(([value, label]) => (
              <motion.div
                key={label}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                }}
                className="rounded-2xl border border-brand-gold/25 bg-brand-elevated/30 p-5 text-center backdrop-blur-xl"
              >
                <p className="font-heading text-3xl text-brand-gold-bright">
                  {value}
                </p>

                <p className="mt-2 text-sm text-brand-cream/80">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto w-full max-w-md"
        >
          <div
            ref={imageRef}
            className="group relative overflow-hidden rounded-4xl border border-brand-gold/35 bg-brand-midnight/45 p-3 shadow-[0_0_70px_rgba(212,175,55,0.18)] backdrop-blur-xl"
          >
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-yellow-400/10 blur-3xl"
            />

            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.15),transparent_55%)]"
            />

            <img
              src={astrologerImg}
              alt="Astrologer"
              className="h-128 w-full rounded-3xl object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 rounded-3xl bg-linear-to-t from-[#090015] via-transparent to-transparent" />

            <motion.div
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-x-6 bottom-6 rounded-2xl border border-brand-gold/20 bg-brand-midnight/75 p-5 backdrop-blur-xl"
            >
              <p className="font-heading text-2xl text-brand-gold">
                Spiritual Guidance
              </p>

              <p className="mt-2 text-sm leading-relaxed text-brand-cream/85">
                Calm, clear, and confidential consultations tailored to your
                spiritual and personal journey.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
