import usePageSEO from '../hooks/usePageSEO';
import ServicesSection from '../features/services/sections/ServicesSection';

const ServicesPage = () => {
  usePageSEO({ title: 'Services | Saubhagyam', description: 'Explore Kundli, Palmistry, Numerology and consultation services at Saubhagyam.' });

  return <ServicesSection />;
};

export default ServicesPage;
