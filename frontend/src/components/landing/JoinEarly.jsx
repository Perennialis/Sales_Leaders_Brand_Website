import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function JoinEarly({ onApply }) {
  return (
    <section className="relative py-24 bg-[#F8F6FF] overflow-hidden flex items-center justify-center border-t border-[#ECECF5]">
      {/* Floating background elements */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(130,49,211,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(130,49,211,0.07)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />
      
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#8231D3]/10 via-[#A56EFF]/5 to-transparent blur-[120px] rounded-full pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2rem] overflow-hidden bg-white shadow-xl shadow-[#8231D3]/5 border border-[#ECECF5]"
        >
          <div className="grid lg:grid-cols-2 items-center">
            
            {/* LEFT SIDE: Text & CTA */}
            <div className="p-10 sm:p-14 lg:p-16 relative z-10">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1F1F2E] tracking-tight mb-5">
                Join the Early Community
              </h2>
              <p className="text-base text-[#6C6C80] mb-8 max-w-md leading-relaxed">
                Be among the first professionals to experience Revenue Chiefs. 
                Elevate your leadership journey with curated insights, real-time analytics, and powerful connections.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a 
                  href="https://app.revenuechiefs.org/register"
                  className="relative group w-full sm:w-auto px-7 py-3.5 bg-[#8231D3] text-white rounded-full font-medium text-[15px] shadow-[0_4px_14px_0_rgba(130,49,211,0.39)] hover:shadow-[0_6px_20px_rgba(130,49,211,0.23)] transition-all overflow-hidden inline-flex items-center justify-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                  <span className="relative flex items-center gap-2">
                    Join the Waitlist
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </div>
            </div>

            {/* RIGHT SIDE: Tech UI Mockup */}
            <div className="relative h-[300px] lg:h-[450px] bg-[#12121A] overflow-hidden lg:rounded-l-[2rem] border-t lg:border-t-0 lg:border-l border-[#2A2A35]">
              {/* Abstract UI Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#8231D3]/20 blur-[80px] rounded-full" />
              
              {/* Tech UI Image */}
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                alt="Technology UI Dashboard"
                className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
              
              {/* Glassmorphic Overlay for UI */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#12121A]/80 to-transparent pointer-events-none" />
              
              {/* Decorative Tech Elements */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-white/60 text-xs uppercase tracking-wider mb-1">Network Growth</div>
                  <div className="text-white font-medium text-xl">+428%</div>
                </div>
                <div className="w-16 h-8 bg-gradient-to-r from-transparent to-[#8231D3]/40 rounded-full blur-[2px]" />
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
