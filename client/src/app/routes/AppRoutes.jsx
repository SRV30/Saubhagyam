import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import routeConfig from './routeConfig';
import PagePlaceholder from '../../pages/PagePlaceholder';
import HomePage from '../../pages/HomePage';
import ServicesPage from '../../pages/ServicesPage';
import BookConsultationPage from '../../pages/BookConsultationPage';
import AboutPage from '../../pages/AboutPage';
import TestimonialsPage from '../../pages/TestimonialsPage';
import ContactPage from '../../pages/ContactPage';

const AppRoutes = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route path={routeConfig.home} element={<HomePage />} />
      <Route path={routeConfig.services} element={<ServicesPage />} />
      <Route path={routeConfig.about} element={<AboutPage />} />
      <Route path={routeConfig.testimonials} element={<TestimonialsPage />} />
      <Route path={routeConfig.contact} element={<ContactPage />} />
      <Route path={routeConfig.bookConsultation} element={<BookConsultationPage />} />
    </Route>
    <Route path="*" element={<Navigate to={routeConfig.home} replace />} />
  </Routes>
);

export default AppRoutes;
