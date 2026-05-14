import usePageSEO from '../hooks/usePageSEO';
import AboutSection from '../features/about/sections/AboutSection';

const AboutPage = () => {
  usePageSEO({ title: 'About | Saubhagyam', description: 'Learn about Saubhagyam philosophy, experience, and spiritual guidance approach.' });

  return <AboutSection />;
};

export default AboutPage;
