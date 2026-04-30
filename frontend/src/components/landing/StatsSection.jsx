import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: 5000, suffix: "+", label: "Members" },
  { value: 300,  suffix: "+", label: "Companies" },
  { value: 850,  suffix: "+", label: "Senior Hires" },
  { value: 120,  suffix: "+", label: "Events Hosted" },
  { value: 92,   suffix: "%", label: "Renewal Rate" },
];

function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1600;
    const startTime = performance.now();
    const tick = (t) => {
      const p = Math.min((t - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(start + (to - start) * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {val.toLocaleString("en-IN")}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section data-testid="stats-section" className="relative py-20 sm:py-28 overflow-hidden bg-[#5F27CD]">
      {/* Decorative */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#8231D3] blur-3xl opacity-50 animate-blob" />
      <div className="absolute -bottom-40 -right-32 w-[480px] h-[480px] rounded-full bg-[#A05CE5] blur-3xl opacity-40 animate-blob" />
      <div className="absolute inset-0 opacity-20"
           style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)", backgroundSize: "26px 26px" }} />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-white text-xs font-medium tracking-wide backdrop-blur">
            BY THE NUMBERS
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
            India's largest private<br className="hidden sm:block" />
            sales leadership network.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-white/15 rounded-3xl overflow-hidden border border-white/15">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#5F27CD] px-6 py-8 sm:py-10"
              data-testid={`stat-${i}`}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-white/75">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
