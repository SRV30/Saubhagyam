import { motion } from "framer-motion";
import img from "../../../assets/img.png";

const ZodiacWheel = () => {
  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-1054w-105l bg-yellow-400/20 blur-[120px] sm:h-140 sm:w-140"
      />

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-8 left-10 h-3 w-3 rounded-full bg-yellow-300 shadow-[0_0_25px_rgba(255,215,0,1)]"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-purple-300 shadow-[0_0_20px_rgba(168,85,247,1)]"
      />

      <motion.div
        initial={{
          scale: 0,
          rotate: -1080,
          opacity: 0,
          filter: "blur(20px)",
        }}
        animate={{
          scale: 1,
          rotate: 0,
          opacity: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 2.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative flex items-center justify-center"
      >
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.02, 1],
          }}
          transition={{
            rotate: {
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute h-75 w-75 rounded-full border border-yellow-400/30 sm:h-105 sm:w-105"
        />

        {/* SECOND OUTER RING */}
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-85 w-85 rounded-full border border-purple-400/20 sm:h-117.5 sm:w-117.5"
        />

        <motion.div
          animate={{
            rotate: 360,
            y: [0, -12, 0],
            scale: [1, 1.01, 1],
          }}
          transition={{
            rotate: {
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            },
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
            scale: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          whileHover={{
            scale: 1.05,
          }}
          className="relative h-72 w-72 overflow-hidden rounded-full border border-yellow-400/40 shadow-[0_0_120px_rgba(212,175,55,0.45)] sm:h-96 sm:w-96"
        >
          {/* IMAGE */}
          <img
            src={img}
            alt="Zodiac Wheel"
            className="h-full w-full object-cover scale-110"
          />

          {/* GTA 6 STYLE LIGHT SWEEP */}
          <motion.div
            animate={{
              x: ["-150%", "250%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12"
          />

          {/* GOLD OVERLAY */}
          <div className="absolute inset-0 bg-linear-to-br from-yellow-300/10 via-transparent to-purple-500/10" />

          {/* INNER GLOW PULSE */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full bg-yellow-300/10 blur-3xl"
          />
        </motion.div>

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-105 w-105 sm:h-130 sm:w-130"
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default ZodiacWheel;
