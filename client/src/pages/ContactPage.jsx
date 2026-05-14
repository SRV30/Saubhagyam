import usePageSEO from '../hooks/usePageSEO';
import ContactSection from '../features/contact/sections/ContactSection';

const ContactPage = () => {
  usePageSEO({ title: 'Contact | Saubhagyam', description: 'Connect with Saubhagyam for astrology consultation support and WhatsApp booking.' });

  return <ContactSection />;
};

export default ContactPage;
