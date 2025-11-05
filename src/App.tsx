import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const Layout = () => (
  <>
    <a href="#main" className="skip-link">
      Pular para o conteúdo
    </a>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicos" element={<ServicesPage />} />
      <Route path="/contato" element={<ContactPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    <WhatsappButton />
  </>
);

const App = () => (
  <HelmetProvider>
    <ThemeProvider defaultTheme="light" storageKey="greensmile-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
