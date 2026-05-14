import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import routeConfig from "../../../app/routes/routeConfig";

const ContactSection = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState("");

  const blockedWords = import.meta.env.VITE_BLOCKED_WORDS?.split(",") || [];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return /^[6-9]\d{9}$/.test(phone);
  };

  const containsBlockedWords = (text) => {
    const lowerText = text.toLowerCase();

    return blockedWords.some((word) =>
      lowerText.includes(word.trim().toLowerCase()),
    );
  };

  const isSpam = (text) => {
    return /(http|www\.|https:\/\/|\.com|\.in|telegram|t\.me)/gi.test(text);
  };

  const handleSubmit = () => {
    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      setError("Please fill all fields.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!validatePhone(phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    if (containsBlockedWords(message)) {
      setError("Inappropriate content detected.");
      return;
    }

    if (isSpam(message)) {
      setError("Spam links are not allowed.");
      return;
    }

    const whatsappMessage = `New Contact Message - Saubhagyam

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
    `;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank",
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setError("");
  };

  return (
    <section className="section-shell relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_15%,rgba(123,47,247,0.22),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(255,215,0,0.08),transparent_35%)]" />

      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-6 sm:p-8"
        >
          <h2 className="font-heading text-4xl text-brand-gold-bright">
            Get In Touch
          </h2>

          <p className="mt-2 text-brand-cream/80">
            We’re here to guide your next chapter with clarity.
          </p>

          <div className="mt-6 space-y-4 text-brand-cream/90">
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-brand-gold" />+{whatsappNumber}
            </p>

            <p className="flex items-center gap-3">
              <FaEnvelope className="text-brand-gold" />
              artiverma1121@gmail.com
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="btn-gold text-sm"
            >
              WhatsApp CTA
            </a>

            <a
              href={routeConfig.bookConsultation}
              className="btn-outline-gold text-sm"
            >
              Book Consultation
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="glass-panel p-6 sm:p-8"
        >
          <h3 className="font-heading text-2xl text-brand-gold">
            Quick Message
          </h3>

          <div className="mt-5 grid gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="rounded-lg border border-brand-gold/30 bg-brand-midnight/35 px-4 py-3 text-brand-cream outline-none transition-all duration-300 focus:border-brand-gold focus:shadow-[0_0_20px_rgba(255,215,0,0.2)]"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-lg border border-brand-gold/30 bg-brand-midnight/35 px-4 py-3 text-brand-cream outline-none transition-all duration-300 focus:border-brand-gold focus:shadow-[0_0_20px_rgba(255,215,0,0.2)]"
            />

            <input
              type="number"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              maxLength={10}
              className="rounded-lg border border-brand-gold/30 bg-brand-midnight/35 px-4 py-3 text-brand-cream outline-none transition-all duration-300 focus:border-brand-gold focus:shadow-[0_0_20px_rgba(255,215,0,0.2)]"
            />

            <textarea
              rows={4}
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="rounded-lg border border-brand-gold/30 bg-brand-midnight/35 px-4 py-3 text-brand-cream outline-none transition-all duration-300 focus:border-brand-gold focus:shadow-[0_0_20px_rgba(255,215,0,0.2)]"
            />

            {error && <p className="text-sm text-red-400">{error}</p>}

            <motion.button
              whileHover={{
                scale: 1.03,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={handleSubmit}
              className="btn-gold"
            >
              Send Message
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
