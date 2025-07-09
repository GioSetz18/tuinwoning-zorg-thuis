
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import SEO from "@/components/SEO";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Models from "./pages/Models";
import ModelComfort from "./pages/ModelComfort";
import ModelPremium from "./pages/ModelPremium";
import ModelDeluxe from "./pages/ModelDeluxe";
import ModelCustom from "./pages/ModelCustom";
import Workflow from "./pages/Workflow";
import FAQPage from "./pages/FAQPage";
import Contact from "./pages/Contact";
import Brochure from "./pages/Brochure";
import Privacy from "./pages/Privacy";
import Referenties from "./pages/Referenties";
import TestimonialPolman from "./pages/TestimonialPolman";
import TestimonialDeJongWindau from "./pages/TestimonialDeJongWindau";
import TestimonialVanWijngaarden from "./pages/TestimonialVanWijngaarden";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SEO /> {/* Default SEO for all pages */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/over-ons" element={<AboutUs />} />
            <Route path="/modellen" element={<Models />} />
            <Route path="/modellen/comfort" element={<ModelComfort />} />
            <Route path="/modellen/premium" element={<ModelPremium />} />
            <Route path="/modellen/deluxe" element={<ModelDeluxe />} />
            <Route path="/modellen/custom" element={<ModelCustom />} />
            <Route path="/werkwijze" element={<Workflow />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/brochure" element={<Brochure />} />
            <Route path="/referenties" element={<Referenties />} />
            <Route path="/referenties/polman" element={<TestimonialPolman />} />
            <Route path="/referenties/de-jong-windau" element={<TestimonialDeJongWindau />} />
            <Route path="/referenties/van-wijngaarden" element={<TestimonialVanWijngaarden />} />
            <Route path="/privacy" element={<Privacy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
