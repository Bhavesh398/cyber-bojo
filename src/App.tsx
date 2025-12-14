import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ReportPage from "./pages/ReportPage";
import RightsPage from "./pages/RightsPage";
import CyberSafetyPage from "./pages/CyberSafetyPage";
import MentorChatPage from "./pages/MentorChatPage";
import DirectoryPage from "./pages/DirectoryPage";
import EmergencyPage from "./pages/EmergencyPage";
import SafetyTipsPage from "./pages/SafetyTipsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/rights" element={<RightsPage />} />
          <Route path="/cyber" element={<CyberSafetyPage />} />
          <Route path="/mentor" element={<MentorChatPage />} />
          <Route path="/directory" element={<DirectoryPage />} />
          <Route path="/emergency" element={<EmergencyPage />} />
          <Route path="/safety-tips" element={<SafetyTipsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
