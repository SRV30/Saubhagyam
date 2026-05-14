import { Suspense } from 'react';
import AppRoutes from './app/routes/AppRoutes';
import PageLoader from './components/common/PageLoader';

const App = () => (
  <Suspense fallback={<PageLoader />}>
    <AppRoutes />
  </Suspense>
);

export default App;
