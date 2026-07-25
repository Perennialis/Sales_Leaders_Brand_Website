import { motion } from "framer-motion";
import { Users, Lightbulb, Briefcase, TrendingUp } from "lucide-react";

const REASONS = [
  {
    title: "Sales Leadership Community",
    description: "Join an exclusive circle of top-tier revenue leaders.",
    icon: Users,
  },
  {
    title: "Curated Knowledge Hub",
    description: "Access premium insights and actionable strategies.",
    icon: Lightbulb,
  },
  {
    title: "Professional Networking",
    description: "Build relationships that elevate your career.",
    icon: Briefcase,
  },
  {
    title: "Career Growth Opportunities",
    description: "Unlock new paths for leadership and advancement.",
    icon: TrendingUp,
  },
];

export default function WhyRevenueChiefs() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(130,49,211,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(130,49,211,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Background gradients */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#ECECF5] to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#8231D3]/5 blur-[120px] rounded-full" />
      
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold text-[#1F1F2E] tracking-tight"
          >
            Why Revenue Chiefs?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-[#6C6C80] text-lg"
          >
            A purpose-built ecosystem designed to empower revenue leaders with the tools, network, and insights they need.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Animated connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ECECF5] to-transparent -translate-y-1/2 z-0" />

          {REASONS.map((reason, idx) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, rotate: -1 }}
              className="relative z-10 group bg-white border border-[#8231D3]/30 rounded-2xl p-6 hover:border-[#8231D3]/50 transition-all duration-300 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(130,49,211,0.08)] hover:shadow-[0_8px_30px_rgba(130,49,211,0.15)]"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#F8F6FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <div className="relative z-10 w-12 h-12 rounded-full bg-[#F8F6FF] border border-[#ECECF5] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#EDE7FF] group-hover:border-[#8231D3]/30 transition-all duration-300">
                <reason.icon className="w-5 h-5 text-[#8231D3]" />
              </div>
              <h3 className="relative z-10 text-[#1F1F2E] font-medium mb-2">{reason.title}</h3>
              <p className="relative z-10 text-[#6C6C80] text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
