import usePageSEO from '../hooks/usePageSEO';
import TestimonialsSection from '../features/testimonials/sections/TestimonialsSection';

const TestimonialsPage = () => {
  usePageSEO({ title: 'Testimonials | Saubhagyam', description: 'Read real client testimonials and experiences from Saubhagyam consultations.' });

  return <TestimonialsSection />;
};

export default TestimonialsPage;
