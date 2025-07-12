import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Design from "./pages/Design";
import AIEstimating from "./pages/AIEstimating";
import Bidding from "./pages/Bidding";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Documents from "./pages/Documents";
import BIM from "./pages/BIM";
import Financial from "./pages/Financial";
import CRM from "./pages/CRM";
import Leads from "./pages/Leads";
import Workflow from "./pages/Workflow";
import HR from "./pages/HR";
import Scheduling from "./pages/Scheduling";
import Field from "./pages/Field";
import AI from "./pages/AI";
import Integrations from "./pages/Integrations";
import Marketplace from "./pages/Marketplace";
import Settings from "./pages/Settings";
import Add from "./pages/Add";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/design" element={<Design />} />
          <Route path="/estimating" element={<AIEstimating />} />
          <Route path="/bidding" element={<Bidding />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/bim" element={<BIM />} />
          <Route path="/financial" element={<Financial />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/workflow" element={<Workflow />} />
          <Route path="/hr" element={<HR />} />
          <Route path="/scheduling" element={<Scheduling />} />
          <Route path="/field" element={<Field />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/add" element={<Add />} />
          <Route path="/account" element={<Account />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
