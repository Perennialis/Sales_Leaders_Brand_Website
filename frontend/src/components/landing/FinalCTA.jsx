import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function FinalCTA({ onApply, onSchedule }) {
  return (
    <section data-testid="final-cta" className="py-20 sm:py-28 bg-[#F8F6FF]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-[#1F1F2E] p-10 sm:p-16 lg:p-20"
        >
          {/* Glow */}
          <div className="absolute -top-32 -right-20 w-[420px] h-[420px] rounded-full bg-[#8231D3] blur-3xl opacity-50 animate-blob" />
          <div className="absolute -bottom-32 -left-20 w-[420px] h-[420px] rounded-full bg-[#5F27CD] blur-3xl opacity-40 animate-blob" />
          <div className="absolute inset-0 opacity-15"
               style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)", backgroundSize: "26px 26px" }} />

          <div className="relative max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur text-white text-xs font-medium tracking-wide">
              JOIN THE CIRCLE
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[52px] font-semibold leading-[1.1] tracking-tight text-white">
              Ready to join India's most powerful<br className="hidden sm:block" />
              <span className="text-[#C9B5FB]">sales leadership circle?</span>
            </h2>
            <p className="mt-5 text-white/70 text-base sm:text-lg max-w-2xl leading-relaxed">
              Submit your application or schedule a private intro call with our membership team.
              All applications are reviewed within 7 working days.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={onApply}
                data-testid="final-cta-apply-btn"
                className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#8231D3] text-white font-medium hover:bg-[#5F27CD] transition-colors"
              >
                Apply for Membership
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onSchedule}
                data-testid="final-cta-schedule-btn"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#1F1F2E] font-medium hover:bg-[#EDE7FF] hover:text-[#8231D3] transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                Schedule Intro Call
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
