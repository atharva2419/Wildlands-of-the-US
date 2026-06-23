import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollManager from "@/components/ScrollManager";
import PageLoader from "@/components/PageLoader";
import SecretMessage from "@/components/SecretMessage";
import RangerChat from "@/components/ranger/RangerChat";

// Route-level code splitting: the map libraries (react-simple-maps + us-atlas)
// and the charts (recharts) load only on the route that needs them.
const Landing = lazy(() => import("@/pages/Landing"));
const ParkRoute = lazy(() => import("@/pages/ParkRoute"));
const NotFound = lazy(() => import("@/pages/NotFound"));

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <SecretMessage />
      <RangerChat />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/parks/:slug" element={<ParkRoute />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
