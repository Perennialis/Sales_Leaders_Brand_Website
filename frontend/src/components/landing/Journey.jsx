import { motion } from "framer-motion";
import { Search, Link, BookOpen, MessageCircle, TrendingUp } from "lucide-react";

const STEPS = [
  { id: "01", title: "Discover", description: "Find peers aligned with your goals.", icon: Search },
  { id: "02", title: "Connect", description: "Establish meaningful relationships.", icon: Link },
  { id: "03", title: "Learn", description: "Access curated revenue insights.", icon: BookOpen },
  { id: "04", title: "Collaborate", description: "Engage in high-value discussions.", icon: MessageCircle },
  { id: "05", title: "Grow", description: "Elevate your leadership journey.", icon: TrendingUp },
];

export default function Journey() {
  return (
    <section id="journey" className="relative py-24 lg:py-32 bg-[#F8F6FF] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(130,49,211,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(130,49,211,0.07)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_50%,transparent_100%)] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-[#1F1F2E] tracking-tight"
          >
            Your Journey with Revenue Chiefs
          </motion.h2>
        </div>

        <div className="relative">
          {/* Main timeline line */}
          <div className="absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ECECF5] to-transparent hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {STEPS.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative group flex flex-col items-center text-center"
              >
                {/* Connecting arrow indicator between steps (except last) */}
                {idx < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-full h-[2px] bg-gradient-to-r from-transparent via-[#8231D3]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}

                {/* Step Icon */}
                <div className="w-24 h-24 mb-6 rounded-full bg-white border-2 border-[#8231D3]/30 flex items-center justify-center relative shadow-[0_4px_20px_rgba(130,49,211,0.15)] group-hover:shadow-[0_8px_30px_rgba(130,49,211,0.25)] group-hover:border-[#8231D3] transition-all duration-500">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-[#EDE7FF]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <step.icon className="w-8 h-8 text-[#8231D3] group-hover:text-[#5F27CD] transition-colors duration-300 relative z-10" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#1F1F2E] border-2 border-white flex items-center justify-center text-xs font-semibold text-white shadow-md z-20">
                    {step.id}
                  </div>
                </div>

                <h3 className="text-[#1F1F2E] font-medium text-lg mb-2">{step.title}</h3>
                <p className="text-[#6C6C80] text-sm max-w-[200px]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
