import { motion } from "framer-motion";
import { BadgeCheck, Linkedin } from "lucide-react";

const LEADERS = [
  {
    name: "Rajiv Menon",
    role: "VP Sales",
    company: "Infosys",
    img: "https://images.unsplash.com/photo-1584940120505-117038d90b05?crop=entropy&cs=srgb&fm=jpg&w=600&q=85",
    stat: "₹420 Cr quota",
  },
  {
    name: "Priya Shah",
    role: "Director Sales",
    company: "TCS",
    img: "https://images.pexels.com/photos/7580822/pexels-photo-7580822.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=600",
    stat: "12 yrs B2B SaaS",
  },
  {
    name: "Karan Mehta",
    role: "Chief Revenue Officer",
    company: "HCL Technologies",
    img: "https://images.unsplash.com/photo-1659353220482-554773c2f7fa?crop=entropy&cs=srgb&fm=jpg&w=600&q=85",
    stat: "Built $200M ARR",
  },
  {
    name: "Sneha Nair",
    role: "Head of Sales",
    company: "Wipro",
    img: "https://images.pexels.com/photos/7580761/pexels-photo-7580761.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=600",
    stat: "Enterprise BFSI",
  },
  {
    name: "Arjun Rao",
    role: "Revenue Leader",
    company: "Accenture",
    img: "https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=srgb&fm=jpg&w=600&q=85",
    stat: "Global Accounts",
  },
];

export default function FeaturedLeaders() {
  return (
    <section id="leaders" data-testid="featured-leaders" className="py-20 sm:py-28 bg-[#F8F6FF]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-white border border-[#ECECF5] text-[#5F27CD] text-xs font-medium tracking-wide">
              FEATURED LEADERS
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1F1F2E] leading-tight">
              The minds shaping<br />
              <span className="text-[#8231D3]">India's revenue future.</span>
            </h2>
          </div>
          <p className="text-[#6C6C80] max-w-md text-sm sm:text-base">
            A glimpse at a few of the verified leaders who form the backbone of our network.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {LEADERS.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-lift bg-white border border-[#ECECF5] rounded-2xl overflow-hidden group"
              data-testid={`leader-card-${i}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={l.img}
                  alt={l.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F2E]/30 to-transparent" />
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white grid place-items-center shadow-md">
                  <BadgeCheck className="w-4 h-4 text-[#8231D3]" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-[#1F1F2E]">{l.name}</h3>
                <p className="text-xs text-[#6C6C80] mt-1">{l.role}</p>
                <p className="text-xs font-medium text-[#8231D3] mt-1">{l.company}</p>

                <div className="mt-4 pt-4 border-t border-[#ECECF5] flex items-center justify-between">
                  <span className="text-[11px] text-[#6C6C80]">{l.stat}</span>
                  <Linkedin className="w-4 h-4 text-[#8231D3]" strokeWidth={1.8} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
