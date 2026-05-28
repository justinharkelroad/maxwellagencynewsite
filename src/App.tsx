import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "@/components/ErrorBoundary";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import StaffPage from "./pages/StaffPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import AutoInsurance from "./pages/products/AutoInsurance";
import HomeInsurance from "./pages/products/HomeInsurance";
import RentersInsurance from "./pages/products/RentersInsurance";
import LifeInsurance from "./pages/products/LifeInsurance";
import BusinessInsurance from "./pages/products/BusinessInsurance";
import FloodInsurance from "./pages/products/FloodInsurance";
import MotorcycleBoatInsurance from "./pages/products/MotorcycleBoatInsurance";
import UmbrellaInsurance from "./pages/products/UmbrellaInsurance";
import WindstormTwiaInsurance from "./pages/products/WindstormTwiaInsurance";
import HurricanePrepInsurance from "./pages/products/HurricanePrepInsurance";
import CoastalRoofInsurance from "./pages/products/CoastalRoofInsurance";
import TempleLocation from "./pages/locations/TempleLocation";
import CorpusChristiLocation from "./pages/locations/CorpusChristiLocation";
import OurStory from "./pages/OurStory";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/locations/temple" element={<TempleLocation />} />
            <Route path="/locations/corpus-christi" element={<CorpusChristiLocation />} />
            <Route path="/:slug" element={<StaffPage />} />
            <Route path="/insurance/auto" element={<AutoInsurance />} />
            <Route path="/insurance/home" element={<HomeInsurance />} />
            <Route path="/insurance/renters" element={<RentersInsurance />} />
            <Route path="/insurance/life" element={<LifeInsurance />} />
            <Route path="/insurance/business" element={<BusinessInsurance />} />
            <Route path="/insurance/flood-storm" element={<FloodInsurance />} />
            <Route path="/insurance/motorcycle-boat" element={<MotorcycleBoatInsurance />} />
            <Route path="/insurance/umbrella" element={<UmbrellaInsurance />} />
            <Route path="/insurance/windstorm-twia" element={<WindstormTwiaInsurance />} />
            <Route path="/insurance/hurricane-prep" element={<HurricanePrepInsurance />} />
            <Route path="/insurance/coastal-roof" element={<CoastalRoofInsurance />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
