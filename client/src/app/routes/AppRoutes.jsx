import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import routeConfig from './routeConfig';

const HomePage = lazy(() => import('../../pages/HomePage'));
const ServicesPage = lazy(() => import('../../pages/ServicesPage'));
const AboutPage = lazy(() => import('../../pages/AboutPage'));
const TestimonialsPage = lazy(() => import('../../pages/TestimonialsPage'));
const ContactPage = lazy(() => import('../../pages/ContactPage'));
const BookConsultationPage = lazy(() => import('../../pages/BookConsultationPage'));
const PagePlaceholder = lazy(() => import('../../pages/PagePlaceholder'));

const AppRoutes = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route path={routeConfig.home} element={<HomePage />} />
      <Route path={routeConfig.services} element={<ServicesPage />} />
      <Route path={routeConfig.about} element={<AboutPage />} />
      <Route path={routeConfig.testimonials} element={<TestimonialsPage />} />
      <Route path={routeConfig.contact} element={<ContactPage />} />
      <Route path={routeConfig.bookConsultation} element={<BookConsultationPage />} />
      <Route path="*" element={<PagePlaceholder titleKey="common.notFound" />} />
    </Route>
    <Route path="*" element={<Navigate to={routeConfig.home} replace />} />
  </Routes>
);

export default AppRoutes;
