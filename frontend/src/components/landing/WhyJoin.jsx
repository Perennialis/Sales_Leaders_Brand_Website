import { motion } from "framer-motion";
import {
  Users, Handshake, Briefcase, CalendarDays, GraduationCap, BarChart3
} from "lucide-react";

const FEATURES = [
  { Icon: Users, title: "Elite Peer Network", desc: "Connect with 5,000+ vetted sales leaders across India's top enterprises." },
  { Icon: Handshake, title: "Strategic Partnerships", desc: "Forge co-selling, alliance, and channel partnerships with peer companies." },
  { Icon: Briefcase, title: "Hiring Access", desc: "Source senior sales talent through a private, members-only marketplace." },
  { Icon: CalendarDays, title: "Events & Summits", desc: "120+ curated events yearly — from CRO dinners to flagship summits." },
  { Icon: GraduationCap, title: "Learning Academy", desc: "Masterclasses, certifications & playbooks taught by India's top revenue leaders." },
  { Icon: BarChart3, title: "Sales Intelligence", desc: "Compensation benchmarks, hiring trends, and quarterly market intelligence." },
];

export default function WhyJoin() {
  return (
    <section id="why-join" data-testid="why-join" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full bg-[#EDE7FF] text-[#5F27CD] text-xs font-medium tracking-wide">
            WHY JOIN
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1F1F2E] leading-tight">
            Everything a revenue leader needs<br className="hidden sm:block" />
            <span className="text-[#8231D3]">in one private circle.</span>
          </h2>
          <p className="mt-5 text-[#6C6C80] text-base sm:text-lg leading-relaxed">
            Six powerful pillars built specifically for senior sales decision-makers — all
            invitation-only, all peer-driven.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {FEATURES.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="card-lift bg-white border border-[#ECECF5] rounded-2xl p-7 sm:p-8"
              data-testid={`why-join-card-${i}`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#EDE7FF] grid place-items-center mb-5 group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5 text-[#8231D3]" strokeWidth={1.8} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#1F1F2E]">{title}</h3>
              <p className="mt-2.5 text-[#6C6C80] text-sm sm:text-base leading-relaxed">{desc}</p>
              <div className="mt-6 inline-flex items-center text-sm font-medium text-[#8231D3] opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
