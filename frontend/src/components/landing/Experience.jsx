import { motion } from "framer-motion";
import { MessageSquare, Lightbulb, Share2, Users, ArrowUpRight, BarChart3 } from "lucide-react";

const EXPERIENCES = [
  {
    title: "Industry Discussions",
    description: "Deep dive into macroeconomic trends and sector-specific challenges.",
    icon: MessageSquare,
    image: "/images/exp_industry.png"
  },
  {
    title: "Leadership Insights",
    description: "Learn from the playbooks of top-performing revenue executives.",
    icon: Lightbulb,
    image: "/images/exp_leadership.png"
  },
  {
    title: "Knowledge Sharing",
    description: "Exchange frameworks, templates, and proven strategies.",
    icon: Share2,
    image: "/images/hero_knowledge.png"
  },
  {
    title: "Professional Networking",
    description: "Connect with peers who speak your language and understand your role.",
    icon: Users,
    image: "/images/hero_networking.png"
  },
  {
    title: "Career Development",
    description: "Navigate executive transitions and board-level communications.",
    icon: ArrowUpRight,
    image: "/images/hero_growth.png"
  },
  {
    title: "Revenue Excellence",
    description: "Master the art of predictable growth and scale.",
    icon: BarChart3,
    image: "/images/hero_community.png"
  },
];

export default function Experience() {
  return (
    <section id="benefits" className="relative py-24 lg:py-32 bg-[#F8F6FF] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(130,49,211,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(130,49,211,0.07)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#8231D3]/5 to-transparent blur-[100px] rounded-full pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#ECECF5] mb-6 shadow-sm"
          >
            <span className="text-xs font-medium text-[#1F1F2E] uppercase tracking-wider">The Platform</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-semibold text-[#1F1F2E] tracking-tight"
          >
            What You'll Experience
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative h-[280px] bg-white border-2 border-[#8231D3]/30 rounded-2xl p-5 hover:border-[#8231D3] transition-all overflow-hidden shadow-[0_4px_20px_rgba(130,49,211,0.08)] hover:shadow-[0_8px_30px_rgba(130,49,211,0.25)] flex flex-col justify-end"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${exp.image})` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F2E] via-[#1F1F2E]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 flex flex-col h-full justify-end">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center mb-4 text-white">
                  <exp.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-medium text-white mb-2">{exp.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed line-clamp-2">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
