import usePageSEO from '../hooks/usePageSEO';
import HeroSection from '../features/home/sections/HeroSection';
import AboutSection from '../features/about/sections/AboutSection';
import ServicesSection from '../features/services/sections/ServicesSection';
import TestimonialsSection from '../features/testimonials/sections/TestimonialsSection';
import ContactSection from '../features/contact/sections/ContactSection';

const HomePage = () => {
  usePageSEO({ title: 'Saubhagyam | Premium Astrology Guidance', description: 'Discover Guidance Through Ancient Wisdom with premium astrology consultations for life clarity.' });

  return (
    <>
      <section id="home"><HeroSection /></section>
      <section id="about"><AboutSection /></section>
      <section id="services"><ServicesSection /></section>
      <section id="testimonials"><TestimonialsSection /></section>
      <section id="contact"><ContactSection /></section>
    </>
  );
};

export default HomePage;
