import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import routeConfig from '../../app/routes/routeConfig';
import { cn } from '../../lib/utils/cn';

const THEME_KEY = 'saubhagyam-theme';
const LANG_KEY = 'saubhagyam-language';
const navItems = [['home', 'home'], ['services', 'services'], ['about', 'about'], ['testimonials', 'testimonials'], ['contact', 'contact']];

const SiteHeader = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const defaultTheme = useMemo(() => localStorage.getItem(THEME_KEY) || 'dark', []);
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id));
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0.1 });
    navItems.forEach(([, id]) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const run = () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (location.pathname !== routeConfig.home) navigate(routeConfig.home);
    setTimeout(run, 60);
    setIsMenuOpen(false);
  };

  const toggleTheme = () => { const nextTheme = theme === 'dark' ? 'light' : 'dark'; setTheme(nextTheme); localStorage.setItem(THEME_KEY, nextTheme); document.documentElement.classList.toggle('dark', nextTheme === 'dark'); };
  const toggleLanguage = () => { const nextLang = i18n.language.startsWith('hi') ? 'en' : 'hi'; i18n.changeLanguage(nextLang); localStorage.setItem(LANG_KEY, nextLang); };

  return (<motion.header initial={{ y: -24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="sticky top-0 z-50 border-b border-brand-gold/30 bg-brand-midnight/45 backdrop-blur-2xl">
      <div className="container-padded flex h-20 items-center justify-between gap-4">
        <button onClick={() => scrollToSection('home')} className="font-heading text-2xl tracking-[0.2em] text-brand-gold">SAUBHAGYAM</button>
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map(([key, id]) => (<button key={key} onClick={() => scrollToSection(id)} className={cn('relative text-sm font-medium tracking-wide text-brand-cream transition-all duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brand-gold after:transition-transform after:duration-300 hover:text-brand-gold hover:after:scale-x-100', activeSection === id && 'text-brand-gold after:scale-x-100')}>{t(`navigation.${key}`)}</button>))}
          <Link to={routeConfig.bookConsultation} className="rounded-full border border-brand-gold/50 bg-brand-gold/20 px-5 py-2 text-sm font-semibold text-brand-gold transition hover:-translate-y-0.5 hover:bg-brand-gold/35">{t('navigation.bookConsultation')}</Link>
        </nav>
        <button onClick={() => setIsMenuOpen((p) => !p)} className="lg:hidden text-brand-gold">☰</button>
        <div className="hidden items-center gap-2 lg:flex"><button onClick={toggleLanguage} className="rounded-full border border-brand-gold/40 px-3 py-1.5 text-xs text-brand-gold transition hover:bg-brand-gold/15">{i18n.language.startsWith('hi') ? 'EN' : 'हिं'}</button><button onClick={toggleTheme} className="rounded-full border border-brand-gold/40 px-3 py-1.5 text-xs text-brand-gold transition hover:bg-brand-gold/15">{theme === 'dark' ? '☀' : '☾'}</button></div>
      </div>
      <AnimatePresence>{isMenuOpen && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="border-t border-brand-gold/20 bg-brand-midnight/95 px-6 py-4 lg:hidden"><div className="flex flex-col gap-4">{navItems.map(([key,id]) => <button key={key} onClick={() => scrollToSection(id)} className={cn('text-left text-sm text-brand-cream', activeSection===id && 'text-brand-gold')}>{t(`navigation.${key}`)}</button>)}<Link to={routeConfig.bookConsultation} onClick={()=>setIsMenuOpen(false)} className="rounded-lg border border-brand-gold/40 px-4 py-2 text-center text-brand-gold">{t('navigation.bookConsultation')}</Link></div></motion.div>}</AnimatePresence>
    </motion.header>);
};

export default SiteHeader;
