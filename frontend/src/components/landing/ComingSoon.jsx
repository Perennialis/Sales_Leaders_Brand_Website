import { motion } from "framer-motion";
import { Mic2, Presentation, Users2, CalendarDays, Rocket } from "lucide-react";

const INITIATIVES = [
  { title: "Leadership Meetups", icon: Users2, image: "/images/meetups.png" },
  { title: "Webinars", icon: Presentation, image: "/images/webinars.png" },
  { title: "Knowledge Sessions", icon: Mic2, image: "/images/knowledge.png" },
  { title: "Networking Events", icon: CalendarDays, image: "/images/networking.png" },
  { title: "Innovation Forums", icon: Rocket, image: "/images/innovation.png" },
];

export default function ComingSoon() {
  return (
    <section id="initiatives" className="relative py-24 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#ECECF5] shadow-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-[#8231D3] animate-pulse" />
          <span className="text-xs font-semibold text-[#1F1F2E] uppercase tracking-widest">Launching Soon</span>
        </div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-semibold text-[#1F1F2E] tracking-tight mb-16"
        >
          Exciting Initiatives <br className="hidden sm:block" /> Coming Soon
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 relative z-10">
          {INITIATIVES.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative z-10 rounded-2xl w-[160px] sm:w-[200px] h-[240px] sm:h-[280px] shadow-[0_4px_20px_rgba(130,49,211,0.08)] hover:shadow-[0_8px_30px_rgba(130,49,211,0.25)] border-2 border-[#8231D3]/30 hover:border-[#8231D3] transition-all duration-300 overflow-hidden flex flex-col justify-end text-left"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              
              {/* Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F2E] via-[#1F1F2E]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              
              {/* Content */}
              <div className="relative z-10 p-5 w-full">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center mb-3 text-white">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-white font-medium text-sm sm:text-base leading-snug">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
