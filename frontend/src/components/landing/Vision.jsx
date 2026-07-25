import { motion } from "framer-motion";
import { Heart, BookOpenCheck, Network, Sparkles } from "lucide-react";

const VISION_CARDS = [
  {
    title: "Community First",
    description: "Built by and for revenue leaders, prioritizing authentic connections over noise.",
    icon: Heart,
  },
  {
    title: "Learn Together",
    description: "A collaborative environment where shared experiences drive collective success.",
    icon: BookOpenCheck,
  },
  {
    title: "Build Relationships",
    description: "Forge lasting bonds with peers facing the same strategic challenges.",
    icon: Network,
  },
  {
    title: "Unlock Opportunities",
    description: "Discover new avenues for career growth and organizational impact.",
    icon: Sparkles,
  },
];

export default function Vision() {
  return (
    <section id="vision" className="relative py-24 lg:py-32 bg-white overflow-hidden border-t border-[#ECECF5]">
      {/* Abstract animated gradient blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#A56EFF]/10 to-[#7134EF]/5 blur-[120px] rounded-full mix-blend-multiply pointer-events-none translate-x-1/3 -translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Sticky Heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F6FF] border border-[#ECECF5] mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#8231D3]" />
                <span className="text-xs font-medium text-[#1F1F2E] uppercase tracking-wider">Our Vision</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-semibold text-[#1F1F2E] tracking-tight leading-tight">
                Building the Future of <br className="hidden md:block" />
                <span className="text-[#8231D3]">Sales Leadership</span>
              </h2>
              <p className="mt-6 text-lg text-[#6C6C80] leading-relaxed max-w-md">
                We believe the most significant leaps in your career come from the company you keep. Revenue Chiefs is designed to foster exactly that environment.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Compact Stacked List */}
          <div className="lg:col-span-7 relative z-10 flex flex-col gap-4">
            {VISION_CARDS.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col sm:flex-row items-start gap-5 sm:gap-6 p-6 rounded-2xl bg-white border border-[#8231D3]/30 hover:border-[#8231D3]/50 hover:bg-[#F8F6FF]/50 transition-all shadow-[0_4px_20px_rgba(130,49,211,0.08)] hover:shadow-[0_8px_30px_rgba(130,49,211,0.15)] cursor-default"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#F8F6FF] border border-[#ECECF5] flex items-center justify-center group-hover:bg-[#EDE7FF] group-hover:border-[#8231D3]/30 transition-colors">
                  <card.icon className="w-5 h-5 text-[#8231D3]" />
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-[#1F1F2E] mb-2 group-hover:text-[#8231D3] transition-colors">{card.title}</h3>
                  <p className="text-[#6C6C80] text-base leading-relaxed">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
