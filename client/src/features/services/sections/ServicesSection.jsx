import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import servicesData from "../data/servicesData";
import ServiceCard from "../components/ServiceCard";

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
  <section className="relative py-16 sm:py-20">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(123,47,247,0.25),transparent_42%),radial-gradient(circle_at_85%_20%,rgba(255,215,0,0.1),transparent_38%)]" />

    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="font-medium tracking-[0.22em] text-brand-gold">
        {t("home.servicesTag")}
      </p>
      <h2 className="mt-3 font-heading text-4xl text-brand-cream sm:text-5xl">
        {t("home.servicesTitle")}
      </h2>
      <p className="mt-4 text-brand-cream/80">
        Premium astrology consultations crafted with ancient wisdom and modern
        clarity.
      </p>
    </motion.div>

    <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {servicesData.map((service, index) => (
        <ServiceCard
          key={service.title}
          index={index}
          title={service.title}
          description={service.description}
          Icon={service.icon}
        />
      ))}
    </div>
  </section>
  );
};

export default ServicesSection;
