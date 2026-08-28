import { useState, useEffect } from "react";
import { Crown, Check } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState("Annual"); // "Monthly" or "Annual"

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const plans = [
    {
      name: "BASIC",
      subtitle: "Annual membership with essential benefits",
      priceMonthly: 500,
      priceAnnual: 6000,
      features: [
        "Portal Access",
        "Profession Announcement on Website",
        "Profession Announcement on LinkedIn",
        "Organization Change Announcement",
      ],
      isPopular: false,
    },
    {
      name: "PREMIUM",
      subtitle: "Complete premium membership",
      priceMonthly: 1667,
      priceAnnual: 20000,
      features: [
        "Portal Access",
        "Profession Announcement on Website",
        "Profession Announcement on LinkedIn",
        "Organization Change Announcement",
        "Premium Members Directory Access",
        "Premium Member Contact Access",
        "Podcasts Access",
        "Videos Access",
        "Gestures Access",
        "Exclusive Premium Events",
        "Networking Opportunities",
        "All Future Premium Benefits",
      ],
      isPopular: true,
    },
    {
      name: "FREE",
      subtitle: "Access to the portal with limited features",
      priceMonthly: 0,
      priceAnnual: 0,
      features: [
        "Portal Access",
      ],
      isPopular: false,
    }
  ];

  return (
    <div data-testid="pricing-page" className="min-h-screen bg-[#F8F9FC] text-[#1F1F2E] font-poppins">
      <Navbar />

      {/* Header Section */}
      <div className="pt-32 pb-10 px-5 sm:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1F1F2E] mb-3">
              Membership
            </h1>
            <p className="text-[#6C6C80] text-sm max-w-xl">
              Choose a plan built for sales leaders who take their craft seriously.
            </p>
          </div>
          
          <div className="flex items-center text-sm text-[#6C6C80]">
            <span>Home</span>
            <span className="mx-2">&gt;</span>
            <span className="font-medium text-[#1F1F2E]">Membership</span>
          </div>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-12">
          <div className="bg-white border border-[#ECECF5] rounded-full p-1 flex items-center shadow-sm">
            <button
              onClick={() => setBillingCycle("Monthly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === "Monthly"
                  ? "bg-[#8231D3] text-white shadow-md"
                  : "text-[#6C6C80] hover:text-[#1F1F2E]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("Annual")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === "Annual"
                  ? "bg-[#8231D3] text-white shadow-md"
                  : "text-[#6C6C80] hover:text-[#1F1F2E]"
              }`}
            >
              Annual
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => {
            const isPremium = plan.isPopular;
            const price = billingCycle === "Annual" ? plan.priceAnnual : plan.priceMonthly;
            const period = billingCycle === "Annual" ? "/yr" : "/mo";
            
            return (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl p-8 transition-transform hover:-translate-y-1 duration-300 flex flex-col ${
                  isPremium
                    ? "border-2 border-[#8231D3] shadow-[0_8px_30px_rgba(130,49,211,0.12)]"
                    : "border border-[#ECECF5] shadow-sm hover:shadow-md"
                }`}
              >
                {isPremium && (
                  <div className="absolute -top-3.5 right-6 bg-[#8231D3] text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg shadow-[#8231D3]/30">
                    <Crown className="w-3 h-3 fill-white" />
                    Most Popular
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className={`flex items-center gap-2 font-bold tracking-widest text-xs uppercase mb-2 ${
                    isPremium ? "text-[#8231D3]" : "text-[#8231D3]"
                  }`}>
                    <Crown className="w-4 h-4" />
                    {plan.name}
                  </h3>
                  <p className="text-sm text-[#6C6C80] h-10">
                    {plan.subtitle}
                  </p>
                </div>
                
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-[#1F1F2E]">
                    ₹{price.toLocaleString()}
                  </span>
                  <span className="text-sm text-[#6C6C80] font-medium">{period}</span>
                </div>
                
                <a
                  href="https://app.revenuechiefs.org/register"
                  className={`block w-full py-3 rounded-lg text-sm font-medium text-center transition-colors mb-8 ${
                    isPremium
                      ? "bg-[#8231D3] hover:bg-[#5F27CD] text-white btn-glow"
                      : "bg-[#111118] hover:bg-[#2A2A35] text-white"
                  }`}
                >
                  Subscribe Now
                </a>
                
                <ul className="space-y-4 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#4a4a5c]">
                      <div className="mt-0.5 rounded-full bg-[#F8F6FF] text-[#8231D3] p-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}
