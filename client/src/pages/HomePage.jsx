import usePageSEO from '../hooks/usePageSEO';
import HeroSection from '../features/home/sections/HeroSection';

const HomePage = () => {
  usePageSEO({ title: 'Saubhagyam | Premium Astrology Guidance', description: 'Discover Guidance Through Ancient Wisdom with premium astrology consultations for life clarity.' });

  return <HeroSection />;
};

export default HomePage;
