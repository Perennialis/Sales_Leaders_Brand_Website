import { motion } from "framer-motion";
import { ArrowRight, Sparkles, BadgeCheck, TrendingUp, Users } from "lucide-react";

const METRICS = [
  { value: "5,000+", label: "Members" },
  { value: "300+",   label: "Companies" },
  { value: "120+",   label: "Events" },
  { value: "₹10,000 Cr+", label: "Revenue Influence" },
];

export default function Hero({ onPrimary, onSecondary }) {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-[#F8F6FF]"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[480px] h-[480px] rounded-full bg-[#EDE7FF] blur-3xl opacity-80 animate-blob" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#DDD3FB] blur-3xl opacity-70 animate-blob" />
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#ECECF5] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#8231D3]" strokeWidth={1.8} />
            <span className="text-xs font-medium text-[#1F1F2E]">
              Invite-only · India's Premier Revenue Leadership Circle
            </span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[64px] font-semibold leading-[1.05] tracking-tight text-[#1F1F2E]">
            Where India's Top<br />
            <span className="text-[#8231D3]">Sales Leaders</span> Connect,<br />
            Grow &amp; Lead.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#6C6C80] leading-relaxed max-w-xl">
            A private executive network for CROs, VPs of Sales, Founders, and Revenue
            decision-makers driving growth across enterprises.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={onPrimary}
              data-testid="hero-request-invite-btn"
              className="btn-glow inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#8231D3] text-white font-medium hover:bg-[#5F27CD] transition-colors"
            >
              Request Invitation
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </button>
            <button
              onClick={onSecondary}
              data-testid="hero-explore-btn"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#ECECF5] text-[#1F1F2E] font-medium hover:bg-[#EDE7FF] hover:text-[#8231D3] hover:border-[#EDE7FF] transition-all"
            >
              Explore the Network
            </button>
          </div>

          {/* Metrics */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl">
            {METRICS.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                data-testid={`hero-metric-${i}`}
                className="bg-white rounded-2xl border border-[#ECECF5] px-4 py-3 sm:px-5 sm:py-4 shadow-sm"
              >
                <div className="text-xl sm:text-2xl font-semibold text-[#1F1F2E]">{m.value}</div>
                <div className="text-xs text-[#6C6C80] mt-1">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — visual stack */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-5 relative h-[460px] sm:h-[540px]"
        >
          {/* Main image card */}
          <div className="absolute inset-0 rounded-[28px] overflow-hidden border border-white shadow-[0_30px_60px_-25px_rgba(95,39,205,0.45)]">
            <img
              src="https://images.unsplash.com/photo-1758520144424-2e04f4ad7f60?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBkaXNjdXNzaW9ufGVufDB8fHx8MTc3NzI4Mjc3MXww&ixlib=rb-4.1.0&q=85"
              alt="Executive networking"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#5F27CD]/20 via-transparent to-transparent" />
          </div>

          {/* Floating member card */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 sm:-left-10 top-10 bg-white rounded-2xl border border-[#ECECF5] shadow-xl p-4 w-[230px]"
            data-testid="hero-floating-member-card"
          >
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1584940120505-117038d90b05?w=140&q=85"
                className="w-11 h-11 rounded-full object-cover ring-2 ring-[#EDE7FF]"
                alt=""
              />
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-semibold text-[#1F1F2E]">Rajiv Menon</span>
                  <BadgeCheck className="w-3.5 h-3.5 text-[#8231D3]" />
                </div>
                <div className="text-xs text-[#6C6C80]">VP Sales · Infosys</div>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-[#ECECF5] flex items-center justify-between">
              <span className="text-[11px] text-[#6C6C80]">Verified Member</span>
              <span className="text-[11px] font-medium text-[#8231D3]">Connect →</span>
            </div>
          </motion.div>

          {/* Floating stat card */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-3 sm:-right-8 bottom-12 bg-white rounded-2xl border border-[#ECECF5] shadow-xl p-4 w-[230px]"
            data-testid="hero-floating-stat-card"
          >
            <div className="flex items-center gap-2 text-[#8231D3]">
              <TrendingUp className="w-4 h-4" />
              <span className="text-xs font-medium">Pipeline Velocity</span>
            </div>
            <div className="mt-2 text-2xl font-semibold text-[#1F1F2E]">+38.2%</div>
            <div className="mt-3 h-2 rounded-full bg-[#EDE7FF] overflow-hidden">
              <div className="h-full w-[78%] bg-[#8231D3] rounded-full" />
            </div>
            <div className="mt-2 text-[11px] text-[#6C6C80]">Across 300+ peer companies</div>
          </motion.div>

          {/* Floating bottom-left badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-6 bottom-6 bg-[#1F1F2E] text-white rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-xl bg-[#8231D3] grid place-items-center">
              <Users className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold leading-none">Live Now</div>
              <div className="text-[11px] text-white/70 mt-1">42 leaders online</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
