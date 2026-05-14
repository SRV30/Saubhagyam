import { useEffect, useState } from 'react';
import { THEME_OPTIONS } from '../../lib/constants/theme';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(THEME_OPTIONS.dark);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme((prev) => (prev === THEME_OPTIONS.dark ? THEME_OPTIONS.light : THEME_OPTIONS.dark))}
      className="rounded-full border border-brand-gold/40 px-4 py-2 text-xs uppercase tracking-wider text-brand-gold"
    >
      {theme}
    </button>
  );
};

export default ThemeToggle;
