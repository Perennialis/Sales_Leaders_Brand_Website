import { motion } from "framer-motion";
import { Search, MessageSquare, CalendarDays, BriefcaseBusiness, BookOpenCheck, BarChart3, Check } from "lucide-react";

const FEATURES = [
  {
    Icon: Search,
    tag: "01 · DIRECTORY",
    title: "Members Directory",
    desc: "Search 5,000+ verified sales leaders by industry, function, region, or revenue scale. Connect 1:1 with full context.",
    bullets: ["Verified profiles", "Smart filters", "Direct intros"],
    img: "https://images.unsplash.com/photo-1758518730083-4c12527b6742?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  },
  {
    Icon: MessageSquare,
    tag: "02 · COMMUNITY",
    title: "Community Feed",
    desc: "A curated feed of playbooks, deal stories, market intel, and peer Q&A — moderated by senior CROs.",
    bullets: ["Daily insights", "Anonymous AMAs", "Topic channels"],
    img: "https://images.unsplash.com/photo-1772112334844-2eed0111e690?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  },
  {
    Icon: CalendarDays,
    tag: "03 · EVENTS",
    title: "Events Platform",
    desc: "RSVP to invite-only dinners, summits, and roundtables across 12 Indian cities. Members-first access.",
    bullets: ["120+ events / yr", "City chapters", "Curated guest lists"],
    img: "https://images.unsplash.com/photo-1775163560631-6ff15eb2fa1f?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  },
  {
    Icon: BriefcaseBusiness,
    tag: "04 · HIRING",
    title: "Hiring Marketplace",
    desc: "Post & discover senior sales roles. 850+ leadership hires made via our private referral pool.",
    bullets: ["Senior-only roles", "Member referrals", "Confidential search"],
    img: "https://images.pexels.com/photos/5511124/pexels-photo-5511124.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=900",
  },
  {
    Icon: BookOpenCheck,
    tag: "05 · LEARNING",
    title: "Learning Hub",
    desc: "Cohort-based programs, masterclasses, and frameworks taught by India's top revenue operators.",
    bullets: ["Live cohorts", "Frameworks library", "Peer coaching"],
    img: "https://images.unsplash.com/photo-1773828755374-0ee802d9f44b?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  },
  {
    Icon: BarChart3,
    tag: "06 · INTELLIGENCE",
    title: "Research Center",
    desc: "Quarterly compensation, hiring, and pipeline benchmarks across SaaS, BFSI, and IT services.",
    bullets: ["Comp benchmarks", "Hiring trends", "Quarterly reports"],
    img: "https://images.unsplash.com/photo-1769839271768-aee5469799ee?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  },
];

export default function PlatformFeatures() {
  return (
    <section id="platform" data-testid="platform-features" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-[#EDE7FF] text-[#5F27CD] text-xs font-medium tracking-wide">
            THE PLATFORM
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1F1F2E] leading-tight">
            Six modules. <span className="text-[#8231D3]">One private OS</span><br />
            for revenue leaders.
          </h2>
        </div>

        <div className="mt-16 sm:mt-24 space-y-20 sm:space-y-28">
          {FEATURES.map((f, i) => {
            const flip = i % 2 === 1;
            const { Icon } = f;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${flip ? "lg:[direction:rtl]" : ""}`}
                data-testid={`platform-feature-${i}`}
              >
                <div className={`${flip ? "lg:[direction:ltr]" : ""}`}>
                  <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] text-[#8231D3]">
                    <span className="w-8 h-px bg-[#8231D3]" />
                    {f.tag}
                  </div>
                  <h3 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1F1F2E] leading-tight">
                    {f.title}
                  </h3>
                  <p className="mt-4 text-[#6C6C80] text-base sm:text-lg leading-relaxed max-w-lg">
                    {f.desc}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-sm text-[#1F1F2E]">
                        <span className="w-5 h-5 rounded-full bg-[#EDE7FF] grid place-items-center">
                          <Check className="w-3 h-3 text-[#8231D3]" strokeWidth={2.5} />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual mockup */}
                <div className={`${flip ? "lg:[direction:ltr]" : ""} relative`}>
                  <div className="relative rounded-3xl overflow-hidden border border-[#ECECF5] shadow-[0_30px_60px_-25px_rgba(95,39,205,0.30)] bg-white">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img src={f.img} alt={f.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#5F27CD]/35 via-[#8231D3]/10 to-transparent" />
                    </div>

                    {/* Floating UI panel */}
                    <div className="absolute left-4 bottom-4 right-4 sm:left-6 sm:bottom-6 sm:right-auto sm:max-w-xs bg-white rounded-2xl border border-[#ECECF5] shadow-xl p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#EDE7FF] grid place-items-center">
                          <Icon className="w-5 h-5 text-[#8231D3]" strokeWidth={1.8} />
                        </div>
                        <div>
                          <div className="text-xs font-medium tracking-wide text-[#8231D3]">{f.tag.split("·")[1]?.trim()}</div>
                          <div className="text-sm font-semibold text-[#1F1F2E]">{f.title}</div>
                        </div>
                      </div>
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        <div className="h-1.5 rounded-full bg-[#8231D3]" />
                        <div className="h-1.5 rounded-full bg-[#EDE7FF]" />
                        <div className="h-1.5 rounded-full bg-[#EDE7FF]" />
                      </div>
                    </div>

                    {/* Top-right pill */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-[11px] font-medium text-[#1F1F2E] border border-white shadow">
                      Members only
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
