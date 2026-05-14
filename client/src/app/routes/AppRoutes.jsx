import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import routeConfig from './routeConfig';

const HomePage = lazy(() => import('../../pages/HomePage'));
const BookConsultationPage = lazy(() => import('../../pages/BookConsultationPage'));
const PagePlaceholder = lazy(() => import('../../pages/PagePlaceholder'));

const AppRoutes = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route path={routeConfig.home} element={<HomePage />} />
      <Route path={routeConfig.bookConsultation} element={<BookConsultationPage />} />
      <Route path="*" element={<PagePlaceholder titleKey="common.notFound" />} />
    </Route>
    <Route path="*" element={<Navigate to={routeConfig.home} replace />} />
  </Routes>
);

export default AppRoutes;
