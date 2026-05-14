import { Outlet } from 'react-router-dom';
import SiteHeader from '../components/common/SiteHeader';
import ThemeToggle from '../components/common/ThemeToggle';

const MainLayout = () => (
  <div className="min-h-screen bg-app-gradient text-brand-cream transition-colors duration-300">
    <SiteHeader />
    <main className="container-padded py-10">
      <div className="mb-6 flex justify-end">
        <ThemeToggle />
      </div>
      <Outlet />
    </main>
  </div>
);

export default MainLayout;
