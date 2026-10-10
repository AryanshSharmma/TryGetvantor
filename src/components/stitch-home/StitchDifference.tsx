import { RainbowLink } from "@/components/ui/rainbow-button";
import { stitchRainbow } from "./rainbow";
/* eslint-disable react/no-unescaped-entities */

export function StitchDifference() {
  return (
    <section className="relative w-full py-st-space-xl px-st-margin lg:px-st-margin-desktop overflow-hidden border-t border-st-outline-variant/30 bg-st-surface-container-lowest" id="section-the-difference">
      <div className="absolute -top-32 right-1/4 w-[700px] h-[500px] bg-st-secondary-container/10 rounded-[0.75rem] blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 -left-10 w-[600px] h-[550px] bg-st-tertiary-container/10 rounded-[0.75rem] blur-[160px] pointer-events-none"></div>
      <div className="relative max-w-7xl mx-auto flex flex-col z-10">
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-[0.75rem] bg-st-surface-container-highest/60 backdrop-blur-md mb-6 border border-st-outline-variant/30 shadow-md">
            <span className="w-1.5 h-1.5 rounded-[0.75rem] bg-st-primary animate-pulse"></span>
            <span className="font-st-label-sm text-st-label-sm uppercase tracking-[0.18em] text-st-on-surface">
              03 / THE GETVANTOR DIFFERENCE
            </span>
            <span className="w-1 h-1 rounded-[0.75rem] bg-st-outline"></span>
            <span className="font-st-label-sm text-st-label-sm uppercase tracking-[0.14em] text-st-tertiary">
              STUDIO ETHOS
            </span>
          </div>
          <h2 className="font-st-headline-lg text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.1] text-st-on-surface tracking-tight mb-6 max-w-4xl">
            Designed around your business.
            {" "}
            <span className="bg-linear-to-r from-st-primary via-st-secondary to-st-tertiary bg-clip-text text-transparent italic">
              Not another template.
            </span>
          </h2>
          <p className="font-st-body-lg text-st-body-lg text-st-on-surface-variant max-w-3xl leading-relaxed">
            A website should be shaped by the business it represents—not forced into a design that could belong to anyone.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="rounded-[0.5rem] bg-st-surface-container-high/60 backdrop-blur-xl border border-st-outline-variant/40 p-6 sm:p-8 flex flex-col justify-between group hover:border-st-primary/40 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-linear-to-r from-transparent via-st-primary/40 to-transparent"></div>
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="font-st-label-sm text-st-label-sm text-st-primary uppercase tracking-[0.16em]">
                  03.1 / INTENTIONAL DESIGN
                </span>
                <span className="w-2 h-2 rounded-[0.75rem] bg-st-primary/40 group-hover:bg-st-primary transition-colors"></span>
              </div>
              <h3 className="font-st-headline-sm text-[22px] sm:text-[26px] text-st-on-surface mb-3">
                Every decision has a reason.
              </h3>
              <p className="font-st-body-md text-st-body-md text-st-on-surface-variant leading-relaxed">
                From the first headline to the final interaction, the structure and visual direction should serve a purpose. We focus on the details that make a website feel coherent, distinctive, and easy to understand.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-st-outline-variant/20 flex items-center justify-between">
              <span className="font-st-label-sm text-st-label-sm text-st-outline uppercase tracking-[0.12em]">
                FOUNDATIONAL METHOD
              </span>
              <span className="material-symbols-outlined text-st-outline text-[18px] group-hover:text-st-primary transition-colors">
                architecture
              </span>
            </div>
          </div>
          <div className="rounded-[0.5rem] bg-st-surface-container-high/60 backdrop-blur-xl border border-st-outline-variant/40 p-6 sm:p-8 flex flex-col justify-between group hover:border-st-secondary/40 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-linear-to-r from-transparent via-st-secondary/40 to-transparent"></div>
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="font-st-label-sm text-st-label-sm text-st-secondary uppercase tracking-[0.16em]">
                  03.2 / CLARITY BEFORE COMPLEXITY
                </span>
                <span className="w-2 h-2 rounded-[0.75rem] bg-st-secondary/40 group-hover:bg-st-secondary transition-colors"></span>
              </div>
              <h3 className="font-st-headline-sm text-[22px] sm:text-[26px] text-st-on-surface mb-3">
                Make the important things obvious.
              </h3>
              <p className="font-st-body-md text-st-body-md text-st-on-surface-variant leading-relaxed">
                Visitors shouldn't have to decode your website to understand what you offer. We prioritize clear messaging, logical structure, and meaningful next steps.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-st-outline-variant/20 flex items-center justify-between">
              <span className="font-st-label-sm text-st-label-sm text-st-outline uppercase tracking-[0.12em]">
                COGNITIVE EASE
              </span>
              <span className="material-symbols-outlined text-st-outline text-[18px] group-hover:text-st-secondary transition-colors">
                visibility
              </span>
            </div>
          </div>
          <div className="rounded-[0.5rem] bg-st-surface-container-high/60 backdrop-blur-xl border border-st-outline-variant/40 p-6 sm:p-8 flex flex-col justify-between group hover:border-st-tertiary/40 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-linear-to-r from-transparent via-st-tertiary/40 to-transparent"></div>
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="font-st-label-sm text-st-label-sm text-st-tertiary uppercase tracking-[0.16em]">
                  03.3 / CRAFT OVER SHORTCUTS
                </span>
                <span className="w-2 h-2 rounded-[0.75rem] bg-st-tertiary/40 group-hover:bg-st-tertiary transition-colors"></span>
              </div>
              <h3 className="font-st-headline-sm text-[22px] sm:text-[26px] text-st-on-surface mb-3">
                Considered, not cookie-cutter.
              </h3>
              <p className="font-st-body-md text-st-body-md text-st-on-surface-variant leading-relaxed">
                We aim to create a visual experience suited to your business rather than simply changing the colors and logo of an existing template.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-st-outline-variant/20 flex items-center justify-between">
              <span className="font-st-label-sm text-st-label-sm text-st-outline uppercase tracking-[0.12em]">
                BESPOKE EXECUTION
              </span>
              <span className="material-symbols-outlined text-st-outline text-[18px] group-hover:text-st-tertiary transition-colors">
                diamond
              </span>
            </div>
          </div>
          <div className="rounded-[0.5rem] bg-st-surface-container-high/60 backdrop-blur-xl border border-st-outline-variant/40 p-6 sm:p-8 flex flex-col justify-between group hover:border-st-primary/40 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-linear-to-r from-transparent via-st-primary/40 to-transparent"></div>
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="font-st-label-sm text-st-label-sm text-st-primary uppercase tracking-[0.16em]">
                  03.4 / DESIGN THAT CONNECTS TO PURPOSE
                </span>
                <span className="w-2 h-2 rounded-[0.75rem] bg-st-primary/40 group-hover:bg-st-primary transition-colors"></span>
              </div>
              <h3 className="font-st-headline-sm text-[22px] sm:text-[26px] text-st-on-surface mb-3">
                Make every element earn its place.
              </h3>
              <p className="font-st-body-md text-st-body-md text-st-on-surface-variant leading-relaxed">
                Visual impact matters, but it should work alongside usability, content, and the needs of the customer—not compete with them.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-st-outline-variant/20 flex items-center justify-between">
              <span className="font-st-label-sm text-st-label-sm text-st-outline uppercase tracking-[0.12em]">
                SYNERGETIC VALUE
              </span>
              <span className="material-symbols-outlined text-st-outline text-[18px] group-hover:text-st-primary transition-colors">
                target
              </span>
            </div>
          </div>
        </div>
        <div className="relative w-full rounded-[0.5rem] bg-st-surface-container-high/60 backdrop-blur-xl border border-st-outline-variant/40 p-6 sm:p-8 mb-10 overflow-hidden shadow-xl">
          <div className="absolute inset-x-0 top-0 h-[1px] bg-linear-to-r from-transparent via-st-primary/50 to-transparent"></div>
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-st-secondary/10 rounded-[0.75rem] blur-2xl pointer-events-none"></div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-7 h-7 rounded-[0.125rem] bg-st-surface-container-highest flex items-center justify-center shrink-0 mt-0.5 border border-st-outline-variant/30">
                <span className="material-symbols-outlined text-st-primary text-[16px]">
                  lightbulb
                </span>
              </div>
              <p className="font-st-headline-sm text-[20px] sm:text-[24px] leading-snug text-st-on-surface italic tracking-normal">
                “The goal isn't to make your website look like everyone else's idea of premium. It's to create a digital presence that makes sense for your business.”
              </p>
            </div>
            <span className="font-st-label-sm text-st-label-sm text-st-secondary uppercase tracking-[0.16em] shrink-0 self-start sm:self-center px-3 py-1 rounded-[0.125rem] bg-st-surface-container-low/80 border border-st-secondary/20">
              PRINCIPLE 02
            </span>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-6 pt-4">
          <RainbowLink className={`${stitchRainbow}`} data-path="work" href="#">
            <span className="text-white font-semibold">
              See the Work
            </span>
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform duration-200 text-white">
              arrow_forward
            </span>
          </RainbowLink>
          <div className="flex items-center gap-4 text-st-outline font-st-label-sm text-st-label-sm uppercase tracking-[0.14em]">
            <span>
              SEC 03 // THE GETVANTOR DIFFERENCE
            </span>
            <span className="w-1 h-1 rounded-[0.75rem] bg-st-outline"></span>
            <span>
              INDEX 04 PILLARS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
