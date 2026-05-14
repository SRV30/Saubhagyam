import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import routeConfig from './routeConfig';
import PagePlaceholder from '../../pages/PagePlaceholder';

const AppRoutes = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route path={routeConfig.home} element={<PagePlaceholder titleKey="navigation.home" />} />
      <Route path={routeConfig.about} element={<PagePlaceholder titleKey="navigation.about" />} />
      <Route path={routeConfig.services} element={<PagePlaceholder titleKey="navigation.services" />} />
      <Route path={routeConfig.blog} element={<PagePlaceholder titleKey="navigation.blog" />} />
      <Route path={routeConfig.contact} element={<PagePlaceholder titleKey="navigation.contact" />} />
    </Route>
    <Route path="*" element={<Navigate to={routeConfig.home} replace />} />
  </Routes>
);

export default AppRoutes;
