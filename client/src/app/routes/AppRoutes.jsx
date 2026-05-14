import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import routeConfig from './routeConfig';
import PagePlaceholder from '../../pages/PagePlaceholder';
import HomePage from '../../pages/HomePage';
import ServicesPage from '../../pages/ServicesPage';

const AppRoutes = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route path={routeConfig.home} element={<HomePage />} />
      <Route path={routeConfig.services} element={<ServicesPage />} />
      <Route path={routeConfig.about} element={<PagePlaceholder titleKey="navigation.about" />} />
      <Route path={routeConfig.testimonials} element={<PagePlaceholder titleKey="navigation.testimonials" />} />
      <Route path={routeConfig.contact} element={<PagePlaceholder titleKey="navigation.contact" />} />
      <Route path={routeConfig.bookConsultation} element={<PagePlaceholder titleKey="navigation.bookConsultation" />} />
    </Route>
    <Route path="*" element={<Navigate to={routeConfig.home} replace />} />
  </Routes>
);

export default AppRoutes;
