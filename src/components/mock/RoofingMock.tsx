import type { CSSProperties } from "react";
import { roofingConceptBrand as brand } from "@/lib/site";

/**
 * Static renderings for the concept case study. Everything is fictional.
 * Sized in `em` from a container-query base so it scales with its frame.
 */

export function RoofArt({ color, className = "" }: { color: string; className?: string }) {
  const rows = Array.from({ length: 6 });
  return (
    <svg aria-hidden viewBox="0 0 400 300" className={className} fill="none" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#e9e4dc" />
      <rect y="228" width="400" height="72" fill="#cfc8bb" />
      <rect x="92" y="150" width="216" height="98" fill="#f6f2ea" />
      <rect x="128" y="176" width="34" height="72" fill="#3b3a38" />
      <rect x="208" y="176" width="60" height="38" fill="#b9c7cf" />
      <path d="M60 156 200 44l140 112z" fill={color} />
      {rows.map((_, i) => {
        const y = 138 - i * 16;
        const inset = 1.25 * (156 - y);
        return <path key={i} d={`M${60 + inset} ${y}H${340 - inset}`} stroke="#0003" strokeWidth="1.2" />;
      })}
      <rect x="252" y="66" width="22" height="42" fill="#3b3a38" />
    </svg>
  );
}

const frame = { containerType: "inline-size" } as CSSProperties;

/** BEFORE: a composite of common template patterns. Not a real site. */
export function TemplateMock() {
  const c = "#2a5db0";
  return (
    <div aria-hidden style={frame} className="h-full w-full">
      <div style={{ fontSize: "1.45cqw" }} className="h-full select-none overflow-hidden bg-[#f1f3f6] font-sans text-[#2b2f36]">
        <div className="flex justify-between px-[2em] py-[0.6em] text-[0.8em] text-white" style={{ background: c }}>
          <span>📞 CALL NOW: {brand.phone}</span>
          <span>FREE ESTIMATES • FINANCING AVAILABLE • 24/7 EMERGENCY</span>
        </div>
        <div className="flex items-center justify-between bg-white px-[2em] py-[1em] shadow-sm">
          <b className="text-[1.3em]" style={{ color: c }}>{brand.companyName}</b>
          <div className="flex gap-[1.4em] text-[0.85em] uppercase">
            {["Home", "About", "Services", "Gallery", "Reviews", "Blog", "FAQ", "Contact"].map((t) => <span key={t}>{t}</span>)}
          </div>
        </div>
        <div className="relative flex h-[19em] items-center justify-center bg-[#9aa3ad] text-center text-white">
          <svg aria-hidden className="absolute inset-0 h-full w-full opacity-25" preserveAspectRatio="none" viewBox="0 0 100 100"><path d="M0 0 100 100M100 0 0 100" stroke="#fff" strokeWidth="0.4" /></svg>
          <div className="relative">
            <p className="text-[2.1em] font-bold uppercase tracking-wide">Welcome to {brand.companyName}!</p>
            <p className="mx-auto mt-[0.6em] max-w-[34em] text-[1.05em]">Your trusted partner for all of your roofing needs. We provide quality service you can count on.</p>
            <div className="mt-[1.2em] flex justify-center gap-[0.8em] text-[0.9em] font-bold uppercase">
              <span className="rounded-full px-[1.8em] py-[0.7em]" style={{ background: c }}>Learn more</span>
              <span className="rounded-full border-2 border-white px-[1.8em] py-[0.7em]">Contact us</span>
            </div>
          </div>
          <div className="absolute bottom-[0.8em] flex gap-[0.4em]">{[0, 1, 2, 3].map((i) => <i key={i} className={`size-[0.7em] rounded-full ${i ? "bg-white/50" : "bg-white"}`} />)}</div>
        </div>
        <p className="py-[1em] text-center text-[1.2em] font-bold uppercase">Our Services</p>
        <div className="grid grid-cols-3 gap-[1.2em] px-[2em]">
          {["Roof Repair", "Roof Replacement", "Roof Inspection"].map((t) => (
            <div key={t} className="rounded-[0.5em] bg-white p-[1.2em] text-center shadow">
              <i className="mx-auto mb-[0.6em] block size-[3em] rounded-full" style={{ background: c }} />
              <b className="text-[0.95em]">{t}</b>
              <p className="mt-[0.4em] text-[0.8em] text-[#6b7078]">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.</p>
              <span className="mt-[0.6em] inline-block text-[0.8em] font-bold" style={{ color: c }}>READ MORE »</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** AFTER: the composed version. */
export function ComposedMock() {
  const c = brand.primaryColor;
  return (
    <div aria-hidden style={frame} className="h-full w-full">
      <div style={{ fontSize: "1.45cqw" }} className="h-full select-none overflow-hidden bg-[#efe9dd] text-[#1b1a17]">
        <div className="flex items-center justify-between px-[3.5em] py-[1.8em]">
          <b className="font-[family-name:var(--font-display)] text-[1.5em] font-normal tracking-tight">{brand.companyName}</b>
          <span className="border-b border-[#1b1a17] pb-[0.2em] text-[0.95em]">{brand.phone}</span>
        </div>
        <div className="grid grid-cols-[1.25fr_1fr] gap-[3em] px-[3.5em] pt-[1.5em]">
          <div className="pb-[2em]">
            <p className="text-[0.75em] uppercase tracking-[0.2em]" style={{ color: c }}>{brand.city}, {brand.state}</p>
            <p className="mt-[1.2em] font-[family-name:var(--font-display)] text-[4.9em] font-light leading-[0.95] tracking-[-0.035em]">
              A roof you never have to <i style={{ color: c }}>think</i> about.
            </p>
            <p className="mt-[1.6em] max-w-[26em] text-[1.05em] leading-[1.5] text-[#55524b]">Repairs, replacements and storm damage. A written, itemised estimate in a day.</p>
            <div className="mt-[2em] flex items-center gap-[1.6em] text-[1em]">
              <span className="px-[2em] py-[1em] font-medium text-white" style={{ background: c }}>Request an estimate →</span>
              <span className="text-[0.85em] text-[#55524b]">No charge to enquire</span>
            </div>
          </div>
          <div className="relative -mb-px self-stretch overflow-hidden">
            <RoofArt color={c} className="absolute inset-0 h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
