import { Linkedin, Mail, Twitter, Youtube, Instagram, Phone } from "lucide-react";
import { Link } from "react-router-dom";

// For Pinterest, since Lucide doesn't have a direct Pinterest icon, we can use a custom SVG or just use a fallback like Link icon if needed, but wait! We can render a custom SVG for Pinterest or use an existing similar icon.
// Since we want to stick to lucide-react as much as possible, let's use a custom SVG for Pinterest to make it premium.
const PinterestIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.853 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.777 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.133-4.515 4.34 0 .859.331 1.781.745 2.281.082.099.094.19.069.294-.078.326-.252 1.026-.286 1.17-.04.172-.133.208-.313.124-1.173-.548-1.905-2.274-1.905-3.655 0-2.973 2.16-5.703 6.233-5.703 3.284 0 5.834 2.34 5.834 5.462 0 3.265-2.057 5.885-4.918 5.885-.96 0-1.864-.499-2.174-1.09l-.594 2.264c-.215.823-.798 1.854-1.19 2.484C10.158 21.82 11.056 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
  </svg>
);

const SOCIALS = [
  { Icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@RevenueChiefsNetwork", color: "text-[#FF0000]" },
  { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/inforevenuechiefs/", color: "text-[#E1306C]" },
  { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/revenue-chiefs-a71a77420/", color: "text-[#0A66C2]" },
  { Icon: PinterestIcon, label: "Pinterest", href: "https://in.pinterest.com/inforevenuechiefs/_profile/", color: "text-[#E60023]" },
  { Icon: Twitter, label: "X", href: "https://x.com/Revenuechiefs", color: "text-[#000000]" },
];

const COLS = [
  {
    title: "Explore",
    links: [
      { label: "About Us", href: "/#about" },
      { label: "Your Journey", href: "/#journey" },
      { label: "Our Vision", href: "/#vision" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Benefits", href: "/#benefits" },
      { label: "Initiatives", href: "/#initiatives" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      { label: "Cancellation & Refund Policy", href: "/cancellation-and-refund-policy" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#ECECF5] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Contact */}
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.jpeg" alt="Revenue Chiefs Logo" className="h-10 w-auto object-contain rounded-md" />
              <span className="font-bold text-2xl text-[#1F1F2E] tracking-tight">
                Revenue Chiefs
              </span>
            </Link>
            <p className="mt-5 text-sm text-[#6C6C80] leading-relaxed max-w-sm">
              The premier invite-only network for forward-thinking sales leaders. Connect, collaborate, and elevate your revenue career.
            </p>
            
            <div className="mt-8 space-y-3">
              <a href="mailto:inforevenuechiefs@gmail.com" className="flex items-center gap-3 text-sm text-[#6C6C80] hover:text-[#8231D3] transition-colors">
                <Mail className="w-4 h-4" />
                inforevenuechiefs@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm text-[#6C6C80]">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <div className="flex flex-col gap-1.5">
                  <a href="tel:+919884200044" className="hover:text-[#8231D3] transition-colors">
                    +91 98842 00044
                  </a>
                  <a href="tel:+917996969996" className="hover:text-[#8231D3] transition-colors">
                    +91 79969 69996
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              {SOCIALS.map(({ Icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  data-testid={`footer-social-${label.toLowerCase()}`}
                  className={`w-10 h-10 rounded-full bg-[#F8F6FF] border border-[#ECECF5] grid place-items-center hover:bg-white hover:border-[#D0D0D5] hover:shadow-sm ${color} transition-all duration-300`}
                  title={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {COLS.map((c) => (
            <div key={c.title} className="lg:col-span-2">
              <h4 className="text-sm font-semibold text-[#1F1F2E] tracking-wide">{c.title}</h4>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    {l.href.startsWith("/") && !l.href.includes("#") ? (
                      <Link
                        to={l.href}
                        className="text-sm text-[#6C6C80] hover:text-[#8231D3] transition-colors"
                      >
                        {l.label}
                      </Link>
                    ) : (
                      <a
                        href={l.href}
                        className="text-sm text-[#6C6C80] hover:text-[#8231D3] transition-colors"
                      >
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="mt-16 pt-8 border-t border-[#ECECF5] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6C6C80]">
            © {new Date().getFullYear()} Revenue Chiefs. All rights reserved.
          </p>
          <p className="text-xs text-[#6C6C80]">
            Crafted for revenue leaders.
          </p>
        </div>
      </div>
    </footer>
  );
}
