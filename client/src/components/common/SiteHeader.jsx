import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import routeConfig from '../../app/routes/routeConfig';
import { cn } from '../../lib/utils/cn';

const THEME_KEY = 'saubhagyam-theme';
const LANG_KEY = 'saubhagyam-language';

const navItems = [
  ['home', routeConfig.home],
  ['services', routeConfig.services],
  ['about', routeConfig.about],
  ['testimonials', routeConfig.testimonials],
  ['contact', routeConfig.contact],
];

const SiteHeader = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const defaultTheme = useMemo(() => localStorage.getItem(THEME_KEY) || 'dark', []);
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem(THEME_KEY, nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
  };

  const toggleLanguage = () => {
    const nextLang = i18n.language.startsWith('hi') ? 'en' : 'hi';
    i18n.changeLanguage(nextLang);
    localStorage.setItem(LANG_KEY, nextLang);
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-brand-gold/30 bg-brand-midnight/45 backdrop-blur-2xl"
    >
      <div className="container-padded flex h-20 items-center justify-between gap-4">
        <NavLink to={routeConfig.home} className="font-heading text-2xl tracking-[0.2em] text-brand-gold">
          SAUBHAGYAM
        </NavLink>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map(([key, path]) => (
            <NavLink
              key={key}
              to={path}
              className={({ isActive }) =>
                cn(
                  'relative text-sm font-medium tracking-wide text-brand-cream transition-all duration-300',
                  'after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0',
                  'after:bg-brand-gold after:transition-transform after:duration-300 hover:text-brand-gold hover:after:scale-x-100',
                  isActive && 'text-brand-gold after:scale-x-100'
                )
              }
            >
              {t(`navigation.${key}`)}
            </NavLink>
          ))}
          <NavLink to={routeConfig.bookConsultation} className="rounded-full border border-brand-gold/50 bg-brand-gold/20 px-5 py-2 text-sm font-semibold text-brand-gold transition hover:-translate-y-0.5 hover:bg-brand-gold/35">
            {t('navigation.bookConsultation')}
          </NavLink>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button onClick={toggleLanguage} className="rounded-full border border-brand-gold/40 px-3 py-1.5 text-xs text-brand-gold transition hover:bg-brand-gold/15">{i18n.language.startsWith('hi') ? 'EN' : 'हिं'}</button>
          <button onClick={toggleTheme} className="rounded-full border border-brand-gold/40 px-3 py-1.5 text-xs text-brand-gold transition hover:bg-brand-gold/15">{theme === 'dark' ? '☀' : '☾'}</button>
        </div>

        <button onClick={() => setIsMenuOpen((prev) => !prev)} className="lg:hidden" aria-label="Menu">
          <motion.div animate={isMenuOpen ? 'open' : 'closed'} className="space-y-1.5">
            <motion.span variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 8 } }} className="block h-0.5 w-7 bg-brand-gold" />
            <motion.span variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }} className="block h-0.5 w-7 bg-brand-gold" />
            <motion.span variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -8 } }} className="block h-0.5 w-7 bg-brand-gold" />
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="border-t border-brand-gold/20 bg-brand-midnight/95 px-6 py-4 lg:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map(([key, path]) => (
                <NavLink key={key} to={path} onClick={() => setIsMenuOpen(false)} className="text-sm text-brand-cream transition hover:text-brand-gold">
                  {t(`navigation.${key}`)}
                </NavLink>
              ))}
              <NavLink to={routeConfig.bookConsultation} onClick={() => setIsMenuOpen(false)} className="rounded-lg border border-brand-gold/40 px-4 py-2 text-center text-brand-gold">
                {t('navigation.bookConsultation')}
              </NavLink>
              <div className="flex gap-2">
                <button onClick={toggleLanguage} className="flex-1 rounded-lg border border-brand-gold/30 px-4 py-2 text-brand-gold">{i18n.language.startsWith('hi') ? 'EN' : 'हिं'}</button>
                <button onClick={toggleTheme} className="flex-1 rounded-lg border border-brand-gold/30 px-4 py-2 text-brand-gold">{theme === 'dark' ? 'Light' : 'Dark'}</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default SiteHeader;
