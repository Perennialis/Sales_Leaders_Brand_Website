import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Why Join", href: "#why-join" },
  { label: "Leaders", href: "#leaders" },
  { label: "Platform", href: "#platform" },
  { label: "Events", href: "#events" },
  { label: "Membership", href: "#membership" },
];

export default function Navbar({ onCta }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-[#ECECF5] shadow-[0_4px_20px_-12px_rgba(95,39,205,0.18)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
        <a href="#top" data-testid="logo-link" className="flex items-center gap-2.5 group">
          <span className="w-9 h-9 rounded-xl bg-[#8231D3] grid place-items-center text-white font-bold shadow-[0_8px_20px_-8px_rgba(130,49,211,0.55)]">
            E
          </span>
          <span className="font-semibold text-[#1F1F2E] tracking-tight hidden sm:block">
            Executive <span className="text-[#8231D3]">Sales</span> Network
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="px-4 py-2 text-sm font-medium text-[#1F1F2E] hover:text-[#8231D3] transition-colors rounded-lg"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onCta}
            data-testid="navbar-explore-btn"
            className="px-4 py-2 text-sm font-medium text-[#1F1F2E] hover:text-[#8231D3] transition-colors"
          >
            Sign In
          </button>
          <button
            onClick={onCta}
            data-testid="navbar-request-invite-btn"
            className="btn-glow px-5 py-2.5 rounded-full bg-[#8231D3] text-white text-sm font-medium hover:bg-[#5F27CD] transition-colors"
          >
            Request Invitation
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          data-testid="mobile-menu-toggle"
          className="lg:hidden w-10 h-10 grid place-items-center rounded-xl border border-[#ECECF5] bg-white"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5 text-[#1F1F2E]" /> : <Menu className="w-5 h-5 text-[#1F1F2E]" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-[#ECECF5] overflow-hidden"
            data-testid="mobile-menu"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  data-testid={`mobile-nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="px-4 py-3 rounded-xl text-[#1F1F2E] hover:bg-[#EDE7FF] hover:text-[#8231D3] transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <button
                onClick={() => { setOpen(false); onCta?.(); }}
                data-testid="mobile-request-invite-btn"
                className="mt-2 w-full px-5 py-3 rounded-full bg-[#8231D3] text-white font-medium hover:bg-[#5F27CD] transition-colors"
              >
                Request Invitation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
