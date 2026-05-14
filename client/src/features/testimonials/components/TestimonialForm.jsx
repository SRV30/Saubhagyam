import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Notification from "../../../components/common/Notification";

const TestimonialForm = ({ onSubmitted }) => {
  const { t, i18n } = useTranslation();

  const [form, setForm] = useState({
    fullName: "",
    review: "",
    rating: 5,
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [notification, setNotification] = useState({
    show: false,
    type: "success",
    title: "",
    message: "",
  });

  const apiBase = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        setNotification((prev) => ({
          ...prev,
          show: false,
        }));
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [notification.show]);

  const showNotification = (type, title, message) => {
    setNotification({
      show: true,
      type,
      title,
      message,
    });
  };

  const submit = async () => {
    if (form.fullName.trim().length < 2) {
      return showNotification(
        "error",
        i18n.language.startsWith("hi") ? "अमान्य नाम" : "Invalid Name",
        i18n.language.startsWith("hi")
          ? "कृपया सही नाम दर्ज करें।"
          : "Please enter a valid name.",
      );
    }

    if (form.review.trim().length < 20) {
      return showNotification(
        "error",
        i18n.language.startsWith("hi") ? "रिव्यू छोटा है" : "Review Too Short",
        i18n.language.startsWith("hi")
          ? "रिव्यू कम से कम 20 अक्षर का होना चाहिए।"
          : "Review must be at least 20 characters.",
      );
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${apiBase}/api/testimonials/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed");
      }

      setForm({
        fullName: "",
        review: "",
        rating: 5,
      });

      onSubmitted();

      showNotification(
        "success",
        i18n.language.startsWith("hi")
          ? "रिव्यू सफलतापूर्वक भेजा गया"
          : "Review Submitted",
        i18n.language.startsWith("hi")
          ? "आपका पवित्र अनुभव साझा करने के लिए धन्यवाद।"
          : "Thank you for sharing your sacred experience.",
      );
    } catch (e) {
      setError(e.message);

      showNotification(
        "error",
        i18n.language.startsWith("hi") ? "कुछ गलत हुआ" : "Something Went Wrong",
        e.message,
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Notification
        show={notification.show}
        type={notification.type}
        title={notification.title}
        message={notification.message}
        onClose={() =>
          setNotification((prev) => ({
            ...prev,
            show: false,
          }))
        }
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-12 rounded-3xl border border-brand-gold/30 bg-brand-elevated/40 p-6 shadow-[0_0_30px_rgba(123,47,247,0.22)] backdrop-blur-xl"
      >
        <h3 className="font-heading text-2xl text-brand-gold">
          {t("home.reviewFormTitle")}
        </h3>

        <div className="mt-4 grid gap-4">
          <input
            className="rounded-xl border border-brand-gold/30 bg-brand-midnight/30 px-4 py-3 text-brand-cream outline-none transition-all duration-300 focus:border-brand-gold focus:shadow-[0_0_25px_rgba(212,175,55,0.25)]"
            placeholder={t("home.fullName")}
            value={form.fullName}
            onChange={(e) =>
              setForm({
                ...form,
                fullName: e.target.value,
              })
            }
          />

          <textarea
            rows={4}
            className="rounded-xl border border-brand-gold/30 bg-brand-midnight/30 px-4 py-3 text-brand-cream outline-none transition-all duration-300 focus:border-brand-gold focus:shadow-[0_0_25px_rgba(212,175,55,0.25)]"
            placeholder={t("home.review")}
            value={form.review}
            onChange={(e) =>
              setForm({
                ...form,
                review: e.target.value,
              })
            }
          />

          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.button
                key={star}
                whileHover={{
                  scale: 1.2,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                onClick={() =>
                  setForm({
                    ...form,
                    rating: star,
                  })
                }
                className={`text-3xl transition-all duration-300 ${
                  form.rating >= star
                    ? "text-brand-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.7)]"
                    : "text-brand-cream/30"
                }`}
              >
                ★
              </motion.button>
            ))}
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <motion.button
            whileHover={{
              y: -3,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
            onClick={submit}
            disabled={loading}
            className="btn-gold relative overflow-hidden"
          >
            <motion.div
              animate={{
                x: ["-150%", "250%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />

            <span className="relative z-10">
              {loading ? "..." : t("home.submitReview")}
            </span>
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};

export default TestimonialForm;
