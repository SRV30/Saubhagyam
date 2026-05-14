import usePageSEO from '../hooks/usePageSEO';
import BookingSection from '../features/booking/sections/BookingSection';

const BookConsultationPage = () => {
  usePageSEO({ title: 'Book Consultation | Saubhagyam', description: 'Book your astrology consultation and continue directly to WhatsApp.' });

  return <BookingSection />;
};

export default BookConsultationPage;
