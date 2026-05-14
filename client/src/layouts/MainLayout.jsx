import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SiteHeader from '../components/common/SiteHeader';
import FloatingChatbot from '../features/chatbot/components/FloatingChatbot';
import SiteFooter from '../components/common/SiteFooter';
import ScrollProgress from '../components/common/ScrollProgress';

const THEME_KEY = 'saubhagyam-theme';
const LANG_KEY = 'saubhagyam-language';

const MainLayout = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY) || 'dark';
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');

    const savedLanguage = localStorage.getItem(LANG_KEY);
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  return (
    <div className="min-h-screen bg-app-gradient text-brand-cream transition-colors duration-500">
      <ScrollProgress />
      <SiteHeader />
      <main className="container-padded py-10">
        <Outlet />
      </main>
      <SiteFooter />
      <FloatingChatbot />
    </div>
  );
};

export default MainLayout;
