import { useState } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import TrustedCompanies from "@/components/landing/TrustedCompanies";
import WhyJoin from "@/components/landing/WhyJoin";
import FeaturedLeaders from "@/components/landing/FeaturedLeaders";
import PlatformFeatures from "@/components/landing/PlatformFeatures";
import StatsSection from "@/components/landing/StatsSection";
import Testimonials from "@/components/landing/Testimonials";
import EventsShowcase from "@/components/landing/EventsShowcase";
import MembershipPlans from "@/components/landing/MembershipPlans";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import RequestInviteDialog from "@/components/landing/RequestInviteDialog";

const Landing = () => {
  const [dialog, setDialog] = useState({ open: false, mode: "invite" });

  const openInvite   = () => setDialog({ open: true, mode: "invite" });
  const openApply    = () => setDialog({ open: true, mode: "apply" });
  const openSchedule = () => setDialog({ open: true, mode: "schedule" });

  const scrollToPlatform = () => {
    document.querySelector("#platform")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-[#1F1F2E]" data-testid="landing-page">
      <Navbar onCta={openInvite} />
      <main>
        <Hero onPrimary={openInvite} onSecondary={scrollToPlatform} />
        <TrustedCompanies />
        <WhyJoin />
        <FeaturedLeaders />
        <PlatformFeatures />
        <StatsSection />
        <Testimonials />
        <EventsShowcase onCta={openInvite} />
        <MembershipPlans onCta={openApply} />
        <FinalCTA onApply={openApply} onSchedule={openSchedule} />
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
