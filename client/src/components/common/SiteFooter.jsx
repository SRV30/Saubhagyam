import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import routeConfig from '../../app/routes/routeConfig';

const SiteFooter = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language.startsWith('hi') ? 'en' : 'hi';
    i18n.changeLanguage(nextLang);
    localStorage.setItem('saubhagyam-language', nextLang);
  };

  return (
    <footer className="mt-14 border-t border-brand-gold/20 bg-brand-midnight/55 py-10 backdrop-blur-xl">
      <div className="container-padded grid gap-8 md:grid-cols-4">
        <div>
          <h4 className="font-heading text-xl text-brand-gold">Saubhagyam</h4>
          <p className="mt-2 text-sm text-brand-cream/80">Luxury spiritual guidance with authentic Vedic insights.</p>
        </div>
        <div>
          <h5 className="font-heading text-brand-gold">Quick Links</h5>
          <div className="mt-3 space-y-2 text-sm">
            <Link to={routeConfig.home} className="block text-brand-cream/85 transition hover:text-brand-gold">Home</Link>
            <Link to={routeConfig.about} className="block text-brand-cream/85 transition hover:text-brand-gold">About</Link>
            <Link to={routeConfig.contact} className="block text-brand-cream/85 transition hover:text-brand-gold">Contact</Link>
          </div>
        </div>
        <div>
          <h5 className="font-heading text-brand-gold">Services</h5>
          <div className="mt-3 space-y-2 text-sm text-brand-cream/85">
            <p>Kundli Reading</p><p>Numerology</p><p>Marriage Consultation</p>
          </div>
        </div>
        <div>
          <h5 className="font-heading text-brand-gold">Connect</h5>
          <div className="mt-3 flex items-center gap-3 text-brand-gold">
            <a href="#"><FaInstagram /></a><a href="#"><FaFacebookF /></a><a href="#"><FaYoutube /></a>
          </div>
          <button onClick={toggleLanguage} className="btn-outline-gold mt-4 !px-3 !py-1 text-xs">{i18n.language.startsWith('hi') ? 'EN' : 'हिं'}</button>
        </div>
      </div>
      <p className="container-padded mt-8 text-xs text-brand-cream/60">© {new Date().getFullYear()} Saubhagyam. All rights reserved.</p>
    </footer>
  );
};

export default SiteFooter;
