import { motion } from "framer-motion";
import { MapPin, CalendarDays, ArrowUpRight } from "lucide-react";

const EVENTS = [
  {
    title: "National Revenue Summit",
    city: "Mumbai",
    date: "March 14, 2026",
    tag: "FLAGSHIP",
    img: "https://images.unsplash.com/photo-1773828755374-0ee802d9f44b?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  },
  {
    title: "CRO Private Dinner",
    city: "Bangalore",
    date: "January 28, 2026",
    tag: "INVITE-ONLY",
    img: "https://images.unsplash.com/photo-1775163560631-6ff15eb2fa1f?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  },
  {
    title: "B2B Growth Forum",
    city: "Delhi",
    date: "February 19, 2026",
    tag: "FORUM",
    img: "https://images.unsplash.com/photo-1769839271768-aee5469799ee?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  },
];

export default function EventsShowcase({ onCta }) {
  return (
    <section id="events" data-testid="events-showcase" className="py-20 sm:py-28 bg-[#F4F5F7]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-white border border-[#ECECF5] text-[#5F27CD] text-xs font-medium tracking-wide">
              UPCOMING EVENTS
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1F1F2E] leading-tight">
              Where revenue leaders<br />meet, in <span className="text-[#8231D3]">person.</span>
            </h2>
          </div>
          <button
            onClick={onCta}
            data-testid="events-view-all-btn"
            className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#ECECF5] text-[#1F1F2E] hover:bg-[#EDE7FF] hover:text-[#8231D3] transition-all"
          >
            View All Events <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENTS.map((e, i) => (
            <motion.article
              key={e.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-lift bg-white border border-[#ECECF5] rounded-2xl overflow-hidden group"
              data-testid={`event-card-${i}`}
            >
              <div className="relative h-52 overflow-hidden">
                <img src={e.img} alt={e.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F2E]/55 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur text-[11px] font-semibold tracking-wider text-[#5F27CD]">
                  {e.tag}
                </span>
                <h3 className="absolute bottom-4 left-4 right-4 text-xl font-semibold text-white leading-snug">
                  {e.title}
                </h3>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-4 text-sm text-[#6C6C80]">
                  <span className="inline-flex items-center gap-1.5"><CalendarDays className="w-4 h-4 text-[#8231D3]" />{e.date}</span>
                  <span className="inline-flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#8231D3]" />{e.city}</span>
                </div>
                <button
                  onClick={onCta}
                  data-testid={`event-rsvp-btn-${i}`}
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#8231D3] text-white font-medium hover:bg-[#5F27CD] transition-colors btn-glow"
                >
                  Request RSVP
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
