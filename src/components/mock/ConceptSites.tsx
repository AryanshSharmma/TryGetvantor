import type { CSSProperties, ReactNode } from "react";

/**
 * Four fictional concept sites. Each is a different business with its own art
 * direction, to show range. None is a client. Sized in em from a
 * container-query base so they scale with whatever frame holds them.
 */

const frame = { containerType: "inline-size" } as CSSProperties;
const serif = "font-[family-name:var(--font-display)]";

function Shell({ bg, color, children }: { bg: string; color: string; children: ReactNode }) {
  return (
    <div aria-hidden style={frame} className="h-full w-full">
      <div style={{ fontSize: "1.7cqw", background: bg, color }} className="relative h-full select-none overflow-hidden">
        {children}
      </div>
    </div>
  );
}

/** Ceramics studio */
export function CeramicsSite() {
  return (
    <Shell bg="#ecdcc4" color="#2a1e16">
      <div className="flex items-center justify-between px-[3em] py-[1.8em]">
        <b className={`${serif} text-[1.6em] font-normal`}>Kiln &amp; Clay</b>
        <span className="flex gap-[2em] text-[0.85em]"><span>Shop</span><span>Studio</span><span>Classes</span></span>
      </div>
      <div className="grid h-[calc(100%-5.4em)] grid-cols-[1.05fr_1fr] gap-[2.5em] pl-[3em]">
        <div className="self-center pb-[3em]">
          <p className="text-[0.7em] uppercase tracking-[0.2em] text-[#a1472a]">Hand-thrown ceramics</p>
          <p className={`${serif} mt-[1em] text-[3.6em] font-light leading-[1] tracking-[-0.02em]`}>
            Made by hand, <i className="text-[#a1472a]">slowly.</i>
          </p>
          <p className="mt-[1.2em] max-w-[22em] text-[0.95em] leading-[1.5] opacity-75">Small batches of tableware, fired in our own kiln.</p>
          <span className="mt-[1.8em] inline-block rounded-full bg-[#2a1e16] px-[1.8em] py-[0.9em] text-[0.9em] text-[#ecdcc4]">Shop the collection</span>
        </div>
        <svg viewBox="0 0 300 380" className="h-full w-full" preserveAspectRatio="xMidYMax slice">
          <rect width="300" height="380" fill="#c4633f" />
          <circle cx="215" cy="120" r="70" fill="#e8a55f" />
          <rect y="300" width="300" height="80" fill="#8f3f27" />
          <path d="M70 300c-30-20-34-70-6-100 8-10 8-22 4-34h40c-4 12-4 24 4 34 28 30 24 80-6 100z" fill="#f4e9d6" />
          <path d="M155 300c-22-14-24-52-6-76l-6-24h56l-6 24c18 24 16 62-6 76z" fill="#2f5d4b" />
          <path d="M232 300c-16-10-16-34-4-48 6-6 6-14 4-22h26c-2 8-2 16 4 22 12 14 12 38-4 48z" fill="#e8a55f" />
        </svg>
      </div>
    </Shell>
  );
}

/** Advisory firm */
export function AdvisorySite() {
  return (
    <Shell bg="#e4ebf5" color="#11264b">
      <div className="flex items-center justify-between px-[3em] py-[1.8em]">
        <b className="text-[1.15em] font-semibold tracking-tight">Marlow Advisory</b>
        <span className="flex gap-[2em] text-[0.85em]"><span>Services</span><span>Insight</span><span className="rounded-full border border-current px-[1.2em] py-[0.4em]">Contact</span></span>
      </div>
      <div className="grid h-[calc(100%-5.4em)] grid-cols-[1.1fr_1fr] gap-[2.5em] px-[3em]">
        <div className="self-center pb-[3em]">
          <p className={`${serif} text-[3.5em] font-light leading-[1.02] tracking-[-0.02em]`}>
            Clear advice for <i className="text-[#2c5fd0]">complicated</i> decisions.
          </p>
          <p className="mt-[1.3em] max-w-[24em] text-[0.95em] leading-[1.5] opacity-75">Independent counsel for owners and boards.</p>
          <span className="mt-[1.8em] inline-block rounded-full bg-[#11264b] px-[1.8em] py-[0.9em] text-[0.9em] text-white">Book a conversation</span>
        </div>
        <svg viewBox="0 0 300 300" className="h-full w-full self-center" preserveAspectRatio="xMidYMid meet">
          <rect width="100" height="100" fill="#11264b" />
          <path d="M100 0h100v100H100z" fill="#f2c14e" />
          <circle cx="250" cy="50" r="50" fill="#2c5fd0" />
          <path d="M0 100h100v100A100 100 0 0 1 0 100z" fill="#2c5fd0" transform="rotate(0)" />
          <rect x="100" y="100" width="100" height="100" fill="#fff" />
          <path d="M200 100h100v100H200z" fill="#11264b" />
          <circle cx="50" cy="250" r="50" fill="#f2c14e" />
          <path d="M100 200h100v100H100z" fill="#2c5fd0" />
          <path d="M200 300V200a100 100 0 0 1 100 100z" fill="#fff" />
        </svg>
      </div>
    </Shell>
  );
}

/** Restaurant */
export function RestaurantSite() {
  return (
    <Shell bg="#f4c9b4" color="#3a1a14">
      <div className="flex items-center justify-between px-[3em] py-[1.8em]">
        <b className={`${serif} text-[1.6em] font-normal italic`}>Osteria Lume</b>
        <span className="flex gap-[2em] text-[0.85em]"><span>Menu</span><span>Wine</span><span>Visit</span></span>
      </div>
      <div className="grid h-[calc(100%-5.4em)] grid-cols-[1fr_1.05fr] items-center gap-[2em] px-[3em]">
        <div className="pb-[3em]">
          <p className={`${serif} text-[3.7em] font-light italic leading-[1] tracking-[-0.02em]`}>Dinner, the long way round.</p>
          <p className="mt-[1.2em] max-w-[22em] text-[0.95em] leading-[1.5] opacity-75">Wood-fired cooking and a short, seasonal menu.</p>
          <span className="mt-[1.8em] inline-block rounded-full bg-[#b5301f] px-[1.8em] py-[0.9em] text-[0.9em] text-[#fbe9dc]">Reserve a table</span>
        </div>
        <svg viewBox="0 0 300 300" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
          <circle cx="150" cy="150" r="146" fill="#fbe9dc" />
          <circle cx="150" cy="150" r="118" fill="none" stroke="#e7c3ae" strokeWidth="2" />
          <circle cx="150" cy="150" r="84" fill="#b5301f" />
          {[0, 60, 120, 180, 240, 300].map((a) => (
            <path key={a} d="M150 150 150 76" stroke="#f4c9b4" strokeWidth="3" transform={`rotate(${a} 150 150)`} />
          ))}
          <circle cx="150" cy="150" r="22" fill="#f4c9b4" />
          <path d="M222 82c14-16 34-20 46-14-6 16-24 28-46 14zM84 64c-12-14-30-18-42-10 6 14 22 24 42 10z" fill="#4f6b37" />
        </svg>
      </div>
    </Shell>
  );
}

/** Training studio */
export function TrainingSite() {
  return (
    <Shell bg="#d9f25a" color="#0d0d0d">
      <div className="flex items-center justify-between px-[3em] py-[1.8em]">
        <b className="text-[1.3em] font-extrabold uppercase tracking-tight">Pulse</b>
        <span className="flex gap-[2em] text-[0.85em] font-medium"><span>Classes</span><span>Coaches</span><span className="rounded-full bg-black px-[1.2em] py-[0.4em] text-[#d9f25a]">Join</span></span>
      </div>
      <div className="relative h-[calc(100%-5.4em)] overflow-hidden px-[3em]">
        <p className="relative z-10 max-w-[7.2em] pt-[0.6em] text-[3.9em] font-extrabold uppercase leading-[0.92] tracking-[-0.03em]">
          Stronger, on your terms.
        </p>
        <span className="relative z-10 mt-[1.6em] inline-block rounded-full bg-black px-[1.8em] py-[0.9em] text-[0.9em] font-medium text-[#d9f25a]">Try a free class</span>
        <svg viewBox="0 0 300 300" className="absolute -right-[3em] bottom-0 h-[105%] w-[52%]" preserveAspectRatio="xMaxYMax slice">
          <circle cx="190" cy="150" r="120" fill="#0d0d0d" />
          {[0, 1, 2, 3, 4].map((i) => (
            <path key={i} d={`M${20 + i * 56} 300 ${120 + i * 56} 0`} stroke="#d9f25a" strokeWidth="14" />
          ))}
          <circle cx="190" cy="150" r="46" fill="#ff5a36" />
        </svg>
      </div>
    </Shell>
  );
}

export const concepts = [
  { key: "ceramics", name: "Kiln & Clay", kind: "Ceramics studio", Site: CeramicsSite },
  { key: "advisory", name: "Marlow Advisory", kind: "Advisory firm", Site: AdvisorySite },
  { key: "restaurant", name: "Osteria Lume", kind: "Restaurant", Site: RestaurantSite },
  { key: "training", name: "Pulse", kind: "Training studio", Site: TrainingSite },
] as const;

/** A site inside a browser window. */
export function Browser({ children, className = "", url }: { children: ReactNode; className?: string; url?: string }) {
  return (
    <div className={`overflow-hidden rounded-[10px] bg-white shadow-[0_30px_60px_-20px_rgb(0_0_0/0.28),0_0_0_1px_rgb(20_35_31/0.1)] ${className}`}>
      <div className="flex h-5 items-center gap-1 bg-[#f1ece1] px-2.5 sm:h-6">
        {[0, 1, 2].map((i) => <i key={i} className="size-1.5 rounded-full bg-black/20" />)}
        {url && <span className="ml-2 truncate text-[9px] text-black/40">{url}</span>}
      </div>
      <div className="aspect-[16/10]">{children}</div>
    </div>
  );
}
