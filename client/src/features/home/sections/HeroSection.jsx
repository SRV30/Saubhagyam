import { useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import gsap from "gsap";
import routeConfig from "../../../app/routes/routeConfig";
import ZodiacWheel from "../components/ZodiacWheel";

const HeroSection = () => {
  const heroRef = useRef(null);

  const particles = useMemo(
    () =>
      [...Array(35)].map((_, idx) => ({
        id: idx,
        size: Math.random() * 4 + 1,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
      })),
    [],
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-badge", {
        opacity: 0,
        y: 30,
        filter: "blur(10px)",
        duration: 1,
      })
        .from(
          ".hero-title",
          {
            opacity: 0,
            y: 100,
            stagger: 0.2,
            filter: "blur(30px)",
            duration: 1.4,
            ease: "power4.out",
          },
          "-=0.5",
        )
        .from(
          ".hero-description",
          {
            opacity: 0,
            y: 40,
            duration: 1,
          },
          "-=0.8",
        )
        .from(
          ".hero-buttons",
          {
            opacity: 0,
            y: 30,
            stagger: 0.15,
            duration: 0.8,
          },
          "-=0.8",
        )
        .from(
          ".hero-wheel",
          {
            opacity: 0,
            scale: 0.5,
            rotate: -180,
            filter: "blur(40px)",
            duration: 2,
            ease: "expo.out",
          },
          "-=2",
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-[#090015]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(123,47,247,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,215,0,0.08),transparent_35%)]" />

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.3, 0.45, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/20 blur-[140px]"
      />

      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-yellow-200/70"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0, 1, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="container-padded relative z-10 grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <div className="space-y-8">
          <motion.div
            className="hero-badge inline-flex items-center rounded-full border border-yellow-400/20 bg-white/5 px-5 py-2 backdrop-blur-xl"
            animate={{
              boxShadow: [
                "0 0 20px rgba(255,215,0,0.08)",
                "0 0 35px rgba(255,215,0,0.18)",
                "0 0 20px rgba(255,215,0,0.08)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            <span className="text-xs tracking-[0.35em] text-yellow-300">
              SAUBHAGYAM • ANCIENT SCIENCE, MODERN CLARITY
            </span>
          </motion.div>

          <div className="space-y-2">
            <motion.h1
              className="hero-title font-heading text-5xl leading-[1.05] text-[#F8F5E9] sm:text-6xl lg:text-7xl"
              animate={{
                textShadow: [
                  "0 0 10px rgba(255,215,0,0.08)",
                  "0 0 30px rgba(255,215,0,0.18)",
                  "0 0 10px rgba(255,215,0,0.08)",
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            >
              Discover
            </motion.h1>

            <motion.h1
              className="hero-title font-heading text-5xl leading-[1.05] text-[#F8F5E9] sm:text-6xl lg:text-7xl"
              animate={{
                textShadow: [
                  "0 0 10px rgba(255,215,0,0.08)",
                  "0 0 30px rgba(255,215,0,0.18)",
                  "0 0 10px rgba(255,215,0,0.08)",
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: 0.4,
              }}
            >
              Guidance
            </motion.h1>

            <motion.h1
              className="hero-title font-heading text-5xl leading-[1.05] text-[#F8F5E9] sm:text-6xl lg:text-7xl"
              animate={{
                textShadow: [
                  "0 0 10px rgba(255,215,0,0.08)",
                  "0 0 30px rgba(255,215,0,0.18)",
                  "0 0 10px rgba(255,215,0,0.08)",
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: 0.8,
              }}
            >
              Through
            </motion.h1>

            <motion.h1
              className="hero-title font-heading text-5xl leading-[1.05] text-yellow-300 sm:text-6xl lg:text-7xl"
              animate={{
                textShadow: [
                  "0 0 20px rgba(255,215,0,0.3)",
                  "0 0 50px rgba(255,215,0,0.7)",
                  "0 0 20px rgba(255,215,0,0.3)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              Ancient Wisdom
            </motion.h1>
          </div>

          <motion.p
            className="hero-description max-w-2xl text-lg leading-relaxed text-[#F8F5E9]/75"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
          >
            Professional astrology consultations for career, relationships, life
            direction, and spiritual clarity.
          </motion.p>

          <div className="flex flex-wrap gap-5">
            <motion.div
              className="hero-buttons"
              whileHover={{
                scale: 1.05,
                y: -4,
              }}
              whileTap={{
                scale: 0.96,
              }}
            >
              <Link
                to={routeConfig.bookConsultation}
                className="group relative overflow-hidden rounded-full border border-yellow-400/30 bg-yellow-400/10 px-8 py-4 text-sm font-semibold tracking-wide text-yellow-300 backdrop-blur-xl"
              >
                <span className="relative z-10">Book Consultation</span>

                <motion.div
                  animate={{
                    x: ["-150%", "250%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
              </Link>
            </motion.div>

            <motion.div
              className="hero-buttons"
              whileHover={{
                scale: 1.05,
                y: -4,
              }}
              whileTap={{
                scale: 0.96,
              }}
            >
              <Link
                to={routeConfig.services}
                className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold tracking-wide text-white/90 backdrop-blur-xl transition-all duration-300 hover:border-yellow-300/40 hover:text-yellow-300"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="hero-wheel relative mx-auto flex items-center justify-center"
          animate={{
            y: [0, -18, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-107.5 w-107.5 rounded-full border border-yellow-400/10"
          />

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-130 w-130 rounded-full border border-purple-400/10"
          />

          <ZodiacWheel />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
