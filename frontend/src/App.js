import { useState } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import WhyRevenueChiefs from "@/components/landing/WhyRevenueChiefs";
import Journey from "@/components/landing/Journey";
import VisualShowcase from "@/components/landing/VisualShowcase";
import Vision from "@/components/landing/Vision";
import Experience from "@/components/landing/Experience";
import ComingSoon from "@/components/landing/ComingSoon";
import JoinEarly from "@/components/landing/JoinEarly";
import Footer from "@/components/landing/Footer";
import RequestInviteDialog from "@/components/landing/RequestInviteDialog";

import TermsAndConditions from "@/pages/TermsAndConditions";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import CancellationRefundPolicy from "@/pages/CancellationRefundPolicy";
import ContactUs from "@/pages/ContactUs";

const Landing = () => {
  const [dialog, setDialog] = useState({ open: false, mode: "invite" });

  const openInvite   = () => setDialog({ open: true, mode: "invite" });
  const openApply    = () => setDialog({ open: true, mode: "apply" });

  const scrollToPlatform = () => {
    document.querySelector("#platform")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-[#1F1F2E]" data-testid="landing-page">
      <Navbar onCta={openInvite} />
      <main>
        <Hero onPrimary={openInvite} onSecondary={scrollToPlatform} />
        <WhyRevenueChiefs />
        <Journey />
        <VisualShowcase />
        <Vision />
        <Experience />
        <ComingSoon />
        <JoinEarly onApply={openApply} />
      </main>
      <Footer />

      <RequestInviteDialog
        open={dialog.open}
        onOpenChange={(o) => setDialog((d) => ({ ...d, open: o }))}
        mode={dialog.mode}
      />

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#FFFFFF",
            border: "1px solid #ECECF5",
            color: "#1F1F2E",
          },
        }}
      />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cancellation-and-refund-policy" element={<CancellationRefundPolicy />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
