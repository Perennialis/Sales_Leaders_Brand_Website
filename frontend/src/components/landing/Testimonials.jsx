import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "The most valuable sales leadership network in India. The peer dialogue alone has reshaped how we think about pipeline and quota planning.",
    name: "Vikram Iyer",
    role: "Chief Revenue Officer, Enterprise SaaS",
    img: "https://images.unsplash.com/photo-1659353220482-554773c2f7fa?w=160&q=85",
  },
  {
    quote: "Exceptional quality of members and curation of events. Every dinner I've attended has produced at least one strategic relationship.",
    name: "Anjali Sharma",
    role: "VP Sales, BFSI Vertical",
    img: "https://images.pexels.com/photos/7580822/pexels-photo-7580822.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=160",
  },
  {
    quote: "Found three of my key hires through this community. The hiring marketplace is unmatched at the leadership tier.",
    name: "Rohit Kapoor",
    role: "Founder & CEO, B2B Platform",
    img: "https://images.unsplash.com/photo-1737574821698-862e77f044c1?w=160&q=85",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % TESTIMONIALS.length);
  const prev = () => setI((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    const t = setInterval(next, 6500);
    return () => clearInterval(t);
  }, []);

  const t = TESTIMONIALS[i];
  return (
    <section data-testid="testimonials" className="py-20 sm:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-[#EDE7FF] text-[#5F27CD] text-xs font-medium tracking-wide">
            TESTIMONIALS
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1F1F2E] leading-tight">
            What our members <span className="text-[#8231D3]">say.</span>
          </h2>
        </div>

        <div className="mt-14 relative bg-[#F8F6FF] border border-[#ECECF5] rounded-3xl p-8 sm:p-14 overflow-hidden">
          <Quote className="absolute top-8 right-8 w-20 h-20 text-[#EDE7FF]" strokeWidth={1} />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.45 }}
              data-testid={`testimonial-${i}`}
            >
              <p className="text-xl sm:text-2xl lg:text-[28px] leading-snug text-[#1F1F2E] font-medium tracking-tight max-w-3xl">
                "{t.quote}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-white" />
                <div>
                  <div className="font-semibold text-[#1F1F2E]">{t.name}</div>
                  <div className="text-sm text-[#6C6C80]">{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  data-testid={`testimonial-dot-${idx}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-2 rounded-full transition-all ${idx === i ? "bg-[#8231D3] w-8" : "bg-[#DDD3FB] w-2"}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                data-testid="testimonial-prev"
                className="w-10 h-10 rounded-full border border-[#ECECF5] bg-white grid place-items-center hover:bg-[#EDE7FF] transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4 text-[#1F1F2E]" />
              </button>
              <button
                onClick={next}
                data-testid="testimonial-next"
                className="w-10 h-10 rounded-full bg-[#8231D3] text-white grid place-items-center hover:bg-[#5F27CD] transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
