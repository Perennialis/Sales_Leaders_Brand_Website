const LOGOS = [
  { name: "TCS",         style: { fontFamily: "Poppins", fontWeight: 700, fontSize: 28, letterSpacing: "-0.02em", color: "#1F1F2E" } },
  { name: "Infosys",     style: { fontFamily: "Poppins", fontWeight: 600, fontSize: 26, fontStyle: "italic", color: "#1F1F2E" } },
  { name: "Wipro",       style: { fontFamily: "Poppins", fontWeight: 700, fontSize: 26, color: "#1F1F2E" } },
  { name: "HCLTech",     style: { fontFamily: "Poppins", fontWeight: 700, fontSize: 26, color: "#1F1F2E" } },
  { name: "Accenture",   style: { fontFamily: "Poppins", fontWeight: 600, fontSize: 24, color: "#1F1F2E" } },
  { name: "salesforce",  style: { fontFamily: "Poppins", fontWeight: 600, fontSize: 26, color: "#1F1F2E" } },
  { name: "Microsoft",   style: { fontFamily: "Poppins", fontWeight: 500, fontSize: 26, color: "#1F1F2E" } },
  { name: "SAP",         style: { fontFamily: "Poppins", fontWeight: 700, fontSize: 28, letterSpacing: "0.05em", color: "#1F1F2E" } },
  { name: "Oracle",      style: { fontFamily: "Poppins", fontWeight: 500, fontSize: 26, color: "#1F1F2E" } },
];

export default function TrustedCompanies() {
  const loop = [...LOGOS, ...LOGOS];
  return (
    <section data-testid="trusted-companies" className="py-14 sm:py-20 bg-white border-y border-[#ECECF5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <p className="text-center text-xs sm:text-sm font-medium tracking-[0.18em] text-[#6C6C80] uppercase">
          Trusted by Sales Leaders at Top Enterprises
        </p>
      </div>

      <div className="mt-10 relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee gap-16 sm:gap-24 w-max">
          {loop.map((l, i) => (
            <div
              key={`${l.name}-${i}`}
              className="flex items-center justify-center h-12 sm:h-14 shrink-0 opacity-55 hover:opacity-100 transition-opacity"
              data-testid={`logo-${l.name.toLowerCase()}`}
              style={l.style}
            >
              {l.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
