import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, BookOpen, TrendingUp, Handshake } from "lucide-react";

const FEATURES = [
  {
    title: "Connect",
    description: "Build meaningful relationships with sales leaders.",
    icon: Users,
    image: "/images/hero_community.png"
  },
  {
    title: "Learn",
    description: "Access industry insights and practical knowledge.",
    icon: BookOpen,
    image: "/images/hero_knowledge.png"
  },
  {
    title: "Grow",
    description: "Expand your professional network and career.",
    icon: TrendingUp,
    image: "/images/hero_growth.png"
  },
  {
    title: "Collaborate",
    description: "Exchange ideas with experienced revenue professionals.",
    icon: Handshake,
    image: "/images/hero_networking.png"
  },
];

export default function Hero({ onPrimary, onSecondary }) {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-[#F8F6FF] text-[#1F1F2E]"
    >
      {/* Light Mode Blobs / Mesh Gradient */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#EDE7FF] blur-[100px] animate-blob" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#DDD3FB] blur-[100px] animate-blob animation-delay-2000" />
      <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(130,49,211,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(130,49,211,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#ECECF5] shadow-sm backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#8231D3]" strokeWidth={1.8} />
            <span className="text-xs font-medium text-[#1F1F2E]">
              Invite-only · The Premier Revenue Leadership Circle
            </span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[64px] font-semibold leading-[1.05] tracking-tight text-[#1F1F2E]">
            Where Top<br />
            <span className="text-[#8231D3]">
              Sales Leaders
            </span> Connect,<br />
            Grow &amp; Lead.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#6C6C80] leading-relaxed max-w-xl">
            A private, premium network designed for revenue leaders to exchange ideas, access curated insights, and elevate their professional journey.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://app.revenuechiefs.org/register"
              data-testid="hero-request-invite-btn"
              className="relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#8231D3] text-white font-medium hover:bg-[#5F27CD] transition-all shadow-[0_4px_14px_0_rgba(130,49,211,0.39)] hover:shadow-[0_6px_20px_rgba(130,49,211,0.23)]"
            >
              Request Invitation
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </a>
          </div>

          {/* Premium Feature Image Cards */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="group relative h-[140px] bg-white border border-[#8231D3]/30 rounded-2xl p-4 hover:border-[#8231D3]/50 transition-all cursor-pointer shadow-[0_4px_20px_rgba(130,49,211,0.08)] hover:shadow-[0_8px_30px_rgba(130,49,211,0.15)] overflow-hidden flex flex-col justify-end"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${feature.image})` }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F2E] via-[#1F1F2E]/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex items-center gap-3 relative z-10">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white">
                    <feature.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm">{feature.title}</h3>
                    <p className="text-white/80 text-[11px] mt-0.5 leading-snug line-clamp-2">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SECTION — Mobile Preview Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end perspective-1000"
        >
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-[320px] lg:max-w-[360px] transform lg:-rotate-y-12 lg:rotate-x-12 hover:rotate-0 transition-transform duration-700 ease-out"
          >
            {/* Phone Frame Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#8231D3] to-[#5F27CD] opacity-10 blur-2xl rounded-[3rem]" />
            
            {/* The mock-up Image */}
            <div className="relative rounded-[2.5rem] overflow-hidden border-[6px] border-white bg-white shadow-2xl ring-1 ring-[#ECECF5]">
              <img
                src="/mobile-preview.png"
                alt="Revenue Chiefs Mobile App Preview"
                className="w-full h-auto object-cover"
              />
              
              {/* Shine effect on glass */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-50" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
