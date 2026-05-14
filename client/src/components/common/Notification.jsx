import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, AlertCircle, Info, X } from "lucide-react";

const icons = {
  success: <CheckCircle size={20} />,
  error: <AlertCircle size={20} />,
  info: <Info size={20} />,
};

const styles = {
  success:
    "border-emerald-400/30 bg-emerald-500/10 text-emerald-200 shadow-[0_0_30px_rgba(16,185,129,0.22)]",
  error:
    "border-red-400/30 bg-red-500/10 text-red-200 shadow-[0_0_30px_rgba(239,68,68,0.22)]",
  info: "border-brand-gold/30 bg-brand-gold/10 text-brand-cream shadow-[0_0_35px_rgba(212,175,55,0.22)]",
};

const Notification = ({ show, type = "info", title, message, onClose }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{
            opacity: 0,
            y: -40,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -30,
            scale: 0.9,
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed right-5 top-5 z-9999"
        >
          <div
            className={`relative overflow-hidden rounded-2xl border backdrop-blur-2xl ${styles[type]} min-w-[320px] max-w-sm`}
          >
            <motion.div
              animate={{
                x: ["-120%", "250%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent"
            />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.18),transparent_55%)]" />

            <div className="relative flex gap-4 p-5">
              <motion.div
                animate={{
                  scale: [1, 1.12, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                {icons[type]}
              </motion.div>

              <div className="flex-1">
                <h4 className="font-heading text-lg tracking-wide">{title}</h4>

                <p className="mt-1 text-sm leading-relaxed text-white/75">
                  {message}
                </p>
              </div>

              <button
                onClick={onClose}
                className="transition hover:rotate-90 hover:text-brand-gold"
              >
                <X size={18} />
              </button>
            </div>

            <motion.div
              initial={{
                width: "100%",
              }}
              animate={{
                width: "0%",
              }}
              transition={{
                duration: 5,
                ease: "linear",
              }}
              className="h-0.5 bg-linear-to-r from-brand-gold via-yellow-300 to-brand-gold"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
