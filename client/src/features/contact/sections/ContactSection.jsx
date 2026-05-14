import { motion } from 'framer-motion';
import { FaEnvelope, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import routeConfig from '../../../app/routes/routeConfig';

const ContactSection = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

  return (
    <section className="relative py-16 sm:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_15%,rgba(123,47,247,0.22),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(255,215,0,0.08),transparent_35%)]" />
      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-panel p-6 sm:p-8">
          <h2 className="font-heading text-4xl text-brand-gold-bright">Get In Touch</h2>
          <p className="mt-2 text-brand-cream/80">We’re here to guide your next chapter with clarity.</p>
          <div className="mt-6 space-y-4 text-brand-cream/90">
            <p className="flex items-center gap-3"><FaPhoneAlt className="text-brand-gold" /> +91 98765 43210</p>
            <p className="flex items-center gap-3"><FaEnvelope className="text-brand-gold" /> support@saubhagyam.com</p>
            <p className="flex items-center gap-3"><FaMapMarkerAlt className="text-brand-gold" /> New Delhi, India</p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="rounded-full bg-brand-gold/20 px-5 py-2 text-sm font-semibold text-brand-gold shadow-[0_0_20px_rgba(212,175,55,0.3)]">WhatsApp CTA</a>
            <a href={routeConfig.bookConsultation} className="rounded-full border border-brand-gold/40 px-5 py-2 text-sm text-brand-gold">Book Consultation</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="glass-panel p-6 sm:p-8">
          <h3 className="font-heading text-2xl text-brand-gold">Quick Message</h3>
          <div className="mt-5 grid gap-4">
            <input placeholder="Your Name" className="rounded-lg border border-brand-gold/30 bg-brand-midnight/35 px-4 py-3 outline-none" />
            <input placeholder="Your Email" className="rounded-lg border border-brand-gold/30 bg-brand-midnight/35 px-4 py-3 outline-none" />
            <textarea rows={4} placeholder="Your Message" className="rounded-lg border border-brand-gold/30 bg-brand-midnight/35 px-4 py-3 outline-none" />
            <button className="rounded-full bg-brand-gold/20 px-5 py-2 font-semibold text-brand-gold transition hover:bg-brand-gold/35">Send Message</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
