import { Linkedin, Mail, Twitter } from "lucide-react";

const COLS = [
  {
    title: "Network",
    links: ["About", "Membership", "Featured Leaders", "Chairman Circle"],
  },
  {
    title: "Platform",
    links: ["Directory", "Community Feed", "Events", "Hiring", "Learning Hub"],
  },
  {
    title: "Company",
    links: ["Careers", "Press", "Contact", "Privacy", "Terms"],
  },
];

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-[#F4F5F7] border-t border-[#ECECF5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#top" className="flex items-center gap-3">
              <img src={require('../../assets/logo/logo.png')} alt="Revenue Chiefs Logo" className="h-12 w-auto object-contain mix-blend-multiply" />
              <span className="font-bold text-2xl text-[#1F1F2E] tracking-tight">
                Revenue Chiefs
              </span>
            </a>
            <p className="mt-5 text-sm text-[#6C6C80] leading-relaxed max-w-sm">
              India's premier private network for Sales Heads, CROs, VPs, Directors,
              Founders, and revenue leaders driving enterprise growth.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Linkedin, label: "linkedin", href: "#" },
                { Icon: Twitter, label: "twitter", href: "#" },
                { Icon: Mail, label: "email", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  data-testid={`footer-social-${label}`}
                  className="w-10 h-10 rounded-full bg-white border border-[#ECECF5] grid place-items-center hover:bg-[#EDE7FF] hover:border-[#EDE7FF] transition-colors"
                >
                  <Icon className="w-4 h-4 text-[#1F1F2E]" strokeWidth={1.7} />
                </a>
              ))}
            </div>
          </div>

          {COLS.map((c) => (
            <div key={c.title} className="lg:col-span-2">
              <h4 className="text-sm font-semibold text-[#1F1F2E] tracking-wide">{c.title}</h4>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      data-testid={`footer-link-${l.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-sm text-[#6C6C80] hover:text-[#8231D3] transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-[#1F1F2E] tracking-wide">Stay Connected</h4>
            <p className="mt-5 text-sm text-[#6C6C80]">
              Quarterly insights on India's revenue landscape — for leaders only.
            </p>
            <a
              href="#membership"
              data-testid="footer-join-link"
              className="mt-5 inline-flex items-center text-sm font-medium text-[#8231D3] hover:text-[#5F27CD]"
            >
              Apply to join →
            </a>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-[#ECECF5] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6C6C80]">
            © {new Date().getFullYear()} Revenue Chiefs. All rights reserved.
          </p>
          <p className="text-xs text-[#6C6C80]">
            Crafted for India's revenue leaders.
          </p>
        </div>
      </div>
    </footer>
  );
}
