import { Suspense } from "react";
import AppRoutes from "./app/routes/AppRoutes";
import PageLoader from "./components/common/PageLoader";
import { Analytics } from "@vercel/analytics/react";

const App = () => (
  <Suspense fallback={<PageLoader />}>
    <AppRoutes />
    <Analytics/>
  </Suspense>
);

export default App;
