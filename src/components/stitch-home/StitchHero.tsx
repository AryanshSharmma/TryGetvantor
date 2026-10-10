import { cn } from "@/lib/utils";
import { rainbowButtonClasses } from "@/components/ui/rainbow-button";
import { stitchRainbow } from "./rainbow";
 
import { MagneticButton, MagneticLink } from "./Magnetic";
import { HeroBackdropLazy } from "./HeroBackdropLazy";

export function StitchHero() {
  return (
    <section className="relative w-full pt-12 pb-16 lg:pt-20 lg:pb-24 px-st-margin lg:px-st-margin-desktop overflow-hidden border-b border-st-outline-variant/30">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-st-secondary-container/10 rounded-[0.75rem] blur-[150px] pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-st-tertiary-container/10 rounded-[0.75rem] blur-[160px] pointer-events-none"></div>
      <div aria-hidden="true" className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="relative aspect-square w-[min(92vw,60rem)] opacity-60">
          <HeroBackdropLazy />
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center z-10">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-[0.75rem] bg-st-surface-container-high/60 backdrop-blur-xl border border-st-outline-variant/40 shadow-lg mb-8">
          <span className="w-1.5 h-1.5 rounded-[0.75rem] bg-st-primary animate-pulse"></span>
          <span className="font-st-label-sm text-st-label-sm uppercase tracking-[0.18em] text-st-on-surface">
            INDEPENDENT DIGITAL STUDIO
          </span>
          <span className="w-1 h-1 rounded-[0.75rem] bg-st-outline"></span>
          <span className="font-st-label-sm text-st-label-sm uppercase tracking-[0.16em] text-st-tertiary">
            DESIGN × DEVELOPMENT
          </span>
        </div>
        <div className="relative w-full max-w-5xl my-4">
          <div className="absolute inset-0 -top-8 left-1/2 -translate-x-1/2 w-[650px] sm:w-[750px] h-[280px] sm:h-[340px] pointer-events-none select-none -z-10">
            <div className="w-full h-full rounded-[0.75rem] bg-linear-to-r from-st-primary/20 via-st-secondary-container/20 to-st-tertiary/20 blur-2xl opacity-60"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <svg className="w-full h-full stroke-st-on-surface-variant/20" fill="none" viewBox="0 0 400 200">
                <path d="M50 150 C120 20, 280 20, 350 150" stroke="currentColor" strokeDasharray="3 6" strokeWidth="1"></path>
                <ellipse cx="200" cy="100" rx="160" ry="60" stroke="currentColor" strokeDasharray="2 4" strokeWidth="0.75"></ellipse>
                <ellipse cx="200" cy="100" rx="90" ry="35" stroke="currentColor" strokeWidth="0.5"></ellipse>
              </svg>
            </div>
          </div>
          <h1 className="font-st-headline-lg text-[40px] sm:text-[52px] lg:text-[68px] leading-[1.08] text-st-on-surface tracking-tight mb-6 max-w-4xl mx-auto">
            Websites that make your business
            {" "}
            <span className="bg-linear-to-r from-st-primary via-st-secondary to-st-tertiary bg-clip-text text-transparent italic">
              impossible to overlook.
            </span>
          </h1>
          <p className="font-st-body-lg text-st-body-lg text-st-on-surface-variant max-w-2xl mx-auto leading-relaxed mb-10">
            GetVantor designs and builds distinctive, high-quality websites that help businesses communicate their value, earn trust, and make it easy for customers to take the next step.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 mb-12">
            <MagneticButton targetId="contact-drawer" className={cn(rainbowButtonClasses, stitchRainbow)}>
              <span className="text-white font-semibold">
                Discuss Your Project
              </span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform duration-200 text-white">
                arrow_forward
              </span>
            </MagneticButton>
            <MagneticLink href="#section-selected-concepts" className="inline-flex items-center gap-2 px-6 py-3 rounded-[0.75rem] bg-st-surface-container-high/60 backdrop-blur-md border border-st-outline-variant/40 text-st-on-surface hover:text-st-primary hover:border-st-primary/40 font-st-label-md text-st-label-md uppercase tracking-[0.12em] transition-colors duration-200">
              <span>
                Explore Our Work
              </span>
              <span className="material-symbols-outlined text-[14px]">
                arrow_outward
              </span>
            </MagneticLink>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 px-6 py-2.5 rounded-[0.75rem] bg-st-surface-container-lowest/80 border border-st-outline-variant/30 text-st-on-surface-variant text-[12px] tracking-[0.12em] uppercase font-st-label-sm">
            <span className="w-1.5 h-1.5 rounded-[0.75rem] bg-st-primary/70"></span>
            <span>
              Thoughtful design
            </span>
            <span className="text-st-outline-variant">
              ·
            </span>
            <span>
              Purposeful development
            </span>
            <span className="text-st-outline-variant">
              ·
            </span>
            <span>
              Built around your business
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
