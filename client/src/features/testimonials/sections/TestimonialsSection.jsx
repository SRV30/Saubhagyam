import { useMemo } from 'react';
import { motion } from 'framer-motion';
import testimonialsData from '../data/testimonialsData';
import TestimonialCard from '../components/TestimonialCard';

const TestimonialsSection = () => {
  const loopedTestimonials = useMemo(() => [...testimonialsData, ...testimonialsData], []);

  return (
    <section className="relative py-16 sm:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(123,47,247,0.2),transparent_45%),radial-gradient(circle_at_70%_80%,rgba(255,215,0,0.08),transparent_35%)]" />

      <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mx-auto mb-10 max-w-2xl text-center">
        <p className="text-sm tracking-[0.2em] text-brand-gold">TESTIMONIALS</p>
        <h2 className="mt-3 font-heading text-4xl text-brand-cream sm:text-5xl">What Clients Say</h2>
      </motion.div>

      <div className="overflow-hidden">
        <motion.div animate={{ x: ['0%', '-50%'] }} transition={{ duration: 24, repeat: Infinity, ease: 'linear' }} className="flex w-max gap-5 pr-5">
          {loopedTestimonials.map((testimonial, idx) => (
            <TestimonialCard key={`${testimonial.name}-${idx}`} {...testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
