import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import routeConfig from '../../app/routes/routeConfig';

const navKeys = [
  ['home', routeConfig.home],
  ['about', routeConfig.about],
  ['services', routeConfig.services],
  ['blog', routeConfig.blog],
  ['contact', routeConfig.contact],
];

const SiteHeader = () => {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-40 border-b border-brand-gold/20 bg-brand-midnight/75 backdrop-blur-xl">
      <div className="container-padded flex h-20 items-center justify-between">
        <p className="font-heading text-2xl tracking-wider text-brand-gold">Saubhagyam</p>
        <nav className="flex items-center gap-6 text-sm">
          {navKeys.map(([key, path]) => (
            <NavLink
              key={key}
              to={path}
              className={({ isActive }) =>
                `transition-colors ${isActive ? 'text-brand-gold' : 'text-brand-cream/90 hover:text-brand-gold'}`
              }
            >
              {t(`navigation.${key}`)}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
