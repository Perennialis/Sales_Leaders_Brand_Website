import { motion } from "framer-motion";

export default function VisualShowcase() {
  return (
    <section className="relative h-[400px] md:h-[500px] bg-white overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none z-20" />
      
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-[#EDE7FF] blur-[120px] rounded-[100%] pointer-events-none" />

      {/* Network Animation Container */}
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center z-10">
        
        {/* Center Node */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 20px rgba(130,49,211,0.1)", "0 0 40px rgba(130,49,211,0.2)", "0 0 20px rgba(130,49,211,0.1)"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute z-20 w-24 h-24 md:w-32 md:h-32 rounded-full bg-white border border-[#ECECF5] backdrop-blur-md flex items-center justify-center shadow-lg"
        >
          <span className="text-[#1F1F2E] font-medium text-center text-sm md:text-base leading-tight px-4">
            Connecting<br/>Revenue Leaders
          </span>
        </motion.div>

        {/* Orbiting Nodes and Lines */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border border-[#8231D3]/30 border-dashed"
        >
          {/* Node 1 */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#8231D3] shadow-[0_0_15px_rgba(130,49,211,0.5)]" />
          {/* Node 2 */}
          <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-4 h-4 rounded-full bg-[#A56EFF] shadow-[0_0_10px_rgba(165,110,255,0.5)]" />
          {/* Node 3 */}
          <div className="absolute -bottom-4 left-1/4 w-8 h-8 rounded-full bg-[#5F27CD] shadow-[0_0_20px_rgba(95,39,205,0.4)]" />
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full border border-[#8231D3]/20"
        >
          {/* Node 4 */}
          <div className="absolute top-1/4 -left-2 w-3 h-3 rounded-full bg-[#8231D3]/80" />
          {/* Node 5 */}
          <div className="absolute bottom-0 right-10 w-5 h-5 rounded-full bg-[#A56EFF]/60" />
        </motion.div>

        {/* Connecting Animated Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
          <motion.path
            d="M 50% 50% L 20% 20%"
            stroke="url(#grad)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M 50% 50% L 80% 30%"
            stroke="url(#grad)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.path
            d="M 50% 50% L 70% 80%"
            stroke="url(#grad)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.path
            d="M 50% 50% L 30% 70%"
            stroke="url(#grad)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8231D3" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>

      </div>
    </section>
  );
}
