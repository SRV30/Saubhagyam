import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import TestimonialCard from "../components/TestimonialCard";
import TestimonialForm from "../components/TestimonialForm";

const TestimonialsSection = () => {
  const { t } = useTranslation();

  const [testimonials, setTestimonials] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  const apiBase = import.meta.env.VITE_API_BASE_URL;

  const loadTestimonials = async () => {
    try {
      setLoading(true);

      const res = await fetch(`${apiBase}/api/testimonials/get`);

      const data = await res.json();

      if (data.success) {
        setTestimonials(data.data || []);
      } else {
        setTestimonials([]);
      }
    } catch (error) {
      console.error(error);
      setTestimonials([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loopedTestimonials = useMemo(() => {
    if (testimonials.length === 0) return [];

    return [...testimonials, ...testimonials];
  }, [testimonials]);

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(123,47,247,0.2),transparent_45%),radial-gradient(circle_at_70%_80%,rgba(255,215,0,0.08),transparent_35%)]" />

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-10 max-w-2xl text-center"
      >
        <p className="text-sm tracking-[0.2em] text-brand-gold">
          {t("home.testimonialTag")}
        </p>

        <h2 className="mt-3 font-heading text-4xl text-brand-cream sm:text-5xl">
          {t("home.testimonialTitle")}
        </h2>

        <p className="mt-4 text-brand-cream/70">
          Sacred experiences shared by our valued clients.
        </p>

        <motion.button
          whileHover={{
            scale: 1.05,
            y: -3,
          }}
          whileTap={{
            scale: 0.96,
          }}
          onClick={() => setShowForm((prev) => !prev)}
          className="btn-gold mt-8"
        >
          {showForm ? "Close Review Form" : "Write a Review"}
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <TestimonialForm onSubmitted={loadTestimonials} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-14">
        {loading ? (
          <div className="flex justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-2 border-brand-gold border-t-transparent" />
          </div>
        ) : testimonials.length === 0 ? (
          <div className="text-center text-brand-cream/70">
            No testimonials available yet.
          </div>
        ) : (
          <div className="overflow-hidden">
            <motion.div
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex w-max gap-5 pr-5"
            >
              {loopedTestimonials.map((testimonial, idx) => (
                <TestimonialCard
                  key={`${testimonial._id || testimonial.fullName}-${idx}`}
                  quote={testimonial.review}
                  name={testimonial.fullName}
                  rating={testimonial.rating}
                />
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
