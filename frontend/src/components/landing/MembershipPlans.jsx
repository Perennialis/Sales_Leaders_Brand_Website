import { motion } from "framer-motion";
import { Check, Crown } from "lucide-react";

const PLANS = [
  {
    name: "Executive",
    price: "₹49,000",
    period: "/year",
    desc: "Foundational access for senior sales leaders.",
    features: [
      "Full Members Directory access",
      "All city-chapter events",
      "Community Feed & playbooks",
      "Quarterly research reports",
      "Member-only newsletter",
    ],
    cta: "Apply for Executive",
    highlighted: false,
  },
  {
    name: "Premier",
    price: "₹1,20,000",
    period: "/year",
    desc: "Most chosen — full network + hiring + learning.",
    features: [
      "Everything in Executive",
      "Hiring Marketplace access",
      "Learning Academy (all cohorts)",
      "Private CRO roundtables",
      "1:1 strategic intros (12/yr)",
      "Compensation benchmarks",
    ],
    cta: "Apply for Premier",
    highlighted: true,
  },
  {
    name: "Chairman Circle",
    price: "₹3,50,000",
    period: "/year",
    desc: "Closed-door circle for top revenue leaders.",
    features: [
      "Everything in Premier",
      "Chairman dinners (6/yr)",
      "Advisory access to founders",
      "Confidential deal & M&A intel",
      "Personal concierge",
      "Speaking & media opportunities",
    ],
    cta: "Request Consideration",
    highlighted: false,
  },
];

export default function MembershipPlans({ onCta }) {
  return (
    <section id="membership" data-testid="membership-plans" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-[#EDE7FF] text-[#5F27CD] text-xs font-medium tracking-wide">
            MEMBERSHIP
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1F1F2E] leading-tight">
            Choose your<br />
            <span className="text-[#8231D3]">level of access.</span>
          </h2>
          <p className="mt-5 text-[#6C6C80] text-base sm:text-lg leading-relaxed">
            All memberships are application-reviewed. We protect the quality of the room.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              data-testid={`plan-card-${p.name.toLowerCase().replace(/\s+/g, "-")}`}
              className={`relative rounded-3xl p-8 sm:p-9 flex flex-col card-lift ${
                p.highlighted
                  ? "bg-[#1F1F2E] border-2 border-[#8231D3] text-white shadow-[0_30px_60px_-25px_rgba(95,39,205,0.55)] lg:-translate-y-4"
                  : "bg-white border border-[#ECECF5]"
              }`}
            >
              {p.highlighted && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#8231D3] text-white text-xs font-semibold tracking-wide flex items-center gap-1.5">
                  <Crown className="w-3.5 h-3.5" /> MOST POPULAR
                </span>
              )}

              <h3 className={`text-2xl font-semibold ${p.highlighted ? "text-white" : "text-[#1F1F2E]"}`}>
                {p.name}
              </h3>
              <p className={`mt-2 text-sm ${p.highlighted ? "text-white/70" : "text-[#6C6C80]"}`}>{p.desc}</p>

              <div className="mt-6 flex items-end gap-1">
                <span className={`text-4xl sm:text-5xl font-semibold tracking-tight ${p.highlighted ? "text-white" : "text-[#1F1F2E]"}`}>
                  {p.price}
                </span>
                <span className={`mb-2 text-sm ${p.highlighted ? "text-white/60" : "text-[#6C6C80]"}`}>{p.period}</span>
              </div>

              <ul className="mt-8 space-y-3.5 flex-1">
                {p.features.map((f) => (
                  <li key={f} className={`flex items-start gap-3 text-sm ${p.highlighted ? "text-white/85" : "text-[#1F1F2E]"}`}>
                    <span className={`mt-0.5 w-5 h-5 rounded-full grid place-items-center shrink-0 ${
                      p.highlighted ? "bg-[#8231D3]" : "bg-[#EDE7FF]"
                    }`}>
                      <Check className={`w-3 h-3 ${p.highlighted ? "text-white" : "text-[#8231D3]"}`} strokeWidth={2.5} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={onCta}
                data-testid={`plan-cta-${p.name.toLowerCase().replace(/\s+/g, "-")}`}
                className={`mt-8 w-full px-6 py-3.5 rounded-full font-medium transition-all btn-glow ${
                  p.highlighted
                    ? "bg-[#8231D3] text-white hover:bg-[#5F27CD]"
                    : "bg-[#1F1F2E] text-white hover:bg-[#5F27CD]"
                }`}
              >
                {p.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
