import { RainbowLink } from "@/components/ui/rainbow-button";
import { stitchRainbow } from "./rainbow";
/* eslint-disable react/no-unescaped-entities */

export function StitchTimeline() {
  return (
    <section className="relative w-full py-st-space-xl px-st-margin lg:px-st-margin-desktop overflow-hidden border-t border-st-outline-variant/30 bg-st-surface-container-lowest" id="section-timeline">
      <div className="absolute -top-32 left-1/4 w-[750px] h-[550px] bg-st-secondary-container/10 rounded-[0.75rem] blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[600px] h-[550px] bg-st-tertiary-container/10 rounded-[0.75rem] blur-[160px] pointer-events-none"></div>
      <div className="relative max-w-7xl mx-auto flex flex-col z-10">
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-[0.75rem] bg-st-surface-container-highest/60 backdrop-blur-md mb-6 border border-st-outline-variant/30 shadow-md">
            <span className="w-1.5 h-1.5 rounded-[0.75rem] bg-st-primary animate-pulse"></span>
            <span className="font-st-label-sm text-st-label-sm uppercase tracking-[0.18em] text-st-on-surface">
              06 / THE TIMELINE
            </span>
            <span className="w-1 h-1 rounded-[0.75rem] bg-st-outline"></span>
            <span className="font-st-label-sm text-st-label-sm uppercase tracking-[0.14em] text-st-tertiary">
              SYSTEMATIC ARCHITECTURE // SEQUENTIAL PHASES
            </span>
          </div>
          <h2 className="font-st-headline-lg text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.1] text-st-on-surface tracking-tight mb-6 max-w-4xl">
            The journey from concept to
            {" "}
            <span className="bg-linear-to-r from-st-primary via-st-secondary to-st-tertiary bg-clip-text text-transparent italic">
              definitive outcome.
            </span>
          </h2>
          <p className="font-st-body-lg text-st-body-lg text-st-on-surface-variant max-w-3xl leading-relaxed">
            A systematic approach to building digital structures. We eliminate chaos by working in clear, sequential phases where no step begins until the previous one is approved.
          </p>
        </div>
        <div className="relative w-full my-8">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 bg-linear-to-b from-st-primary via-st-secondary to-st-tertiary opacity-40"></div>
          <div className="flex flex-col gap-12 sm:gap-16 relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-center w-full group">
              <div className="w-full md:w-1/2 md:pr-12 pl-14 md:pl-0 order-2 md:order-1">
                <div className="rounded-[0.5rem] bg-st-surface-container-high/60 backdrop-blur-xl border border-st-outline-variant/40 p-6 sm:p-8 relative overflow-hidden group-hover:border-st-primary/50 transition-all duration-300 shadow-xl">
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-linear-to-r from-transparent via-st-primary/40 to-transparent"></div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="font-st-label-sm text-st-label-sm text-st-primary uppercase tracking-[0.16em]">
                      PHASE 01 / 04
                    </span>
                    <span className="px-2.5 py-0.5 rounded-[0.125rem] bg-st-surface-container font-st-label-sm text-[11px] text-st-on-surface-variant uppercase tracking-[0.12em] border border-st-outline-variant/30">
                      Week 01
                    </span>
                  </div>
                  <h3 className="font-st-headline-sm text-[20px] sm:text-[24px] text-st-on-surface mb-3">
                    Discovery &amp; Structural Strategy
                  </h3>
                  <p className="font-st-body-md text-st-body-md text-st-on-surface-variant leading-relaxed">
                    We define the goals, map the user journeys, and organize your core messaging. We don't design a single element until the logic of your website makes complete sense.
                  </p>
                </div>
              </div>
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-[0.75rem] bg-st-surface-container border border-st-primary/50 flex items-center justify-center shadow-lg shadow-st-primary/20 z-20 group-hover:scale-110 group-hover:border-st-primary transition-all duration-300 order-1 md:order-2">
                <span className="font-st-label-sm text-[12px] font-bold text-st-primary">
                  01
                </span>
              </div>
              <div className="hidden md:block w-1/2 md:pl-12 order-3"></div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center w-full group">
              <div className="hidden md:block w-1/2 md:pr-12 order-1"></div>
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-[0.75rem] bg-st-surface-container border border-st-secondary/50 flex items-center justify-center shadow-lg shadow-st-secondary/20 z-20 group-hover:scale-110 group-hover:border-st-secondary transition-all duration-300 order-1 md:order-2">
                <span className="font-st-label-sm text-[12px] font-bold text-st-secondary">
                  02
                </span>
              </div>
              <div className="w-full md:w-1/2 md:pl-12 pl-14 md:pl-0 order-2 md:order-3">
                <div className="rounded-[0.5rem] bg-st-surface-container-high/60 backdrop-blur-xl border border-st-outline-variant/40 p-6 sm:p-8 relative overflow-hidden group-hover:border-st-secondary/50 transition-all duration-300 shadow-xl">
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-linear-to-r from-transparent via-st-secondary/40 to-transparent"></div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="font-st-label-sm text-st-label-sm text-st-secondary uppercase tracking-[0.16em]">
                      PHASE 02 / 04
                    </span>
                    <span className="px-2.5 py-0.5 rounded-[0.125rem] bg-st-surface-container font-st-label-sm text-[11px] text-st-on-surface-variant uppercase tracking-[0.12em] border border-st-outline-variant/30">
                      Weeks 02 - 03
                    </span>
                  </div>
                  <h3 className="font-st-headline-sm text-[20px] sm:text-[24px] text-st-on-surface mb-3">
                    High-Fidelity Visual Direction
                  </h3>
                  <p className="font-st-body-md text-st-body-md text-st-on-surface-variant leading-relaxed">
                    We develop a distinctive identity unique to your business. You will see precise layouts, selected typography, color pairings, and interaction concepts crafted to elevate your marketplace positioning.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center w-full group">
              <div className="w-full md:w-1/2 md:pr-12 pl-14 md:pl-0 order-2 md:order-1">
                <div className="rounded-[0.5rem] bg-st-surface-container-high/60 backdrop-blur-xl border border-st-outline-variant/40 p-6 sm:p-8 relative overflow-hidden group-hover:border-st-tertiary/50 transition-all duration-300 shadow-xl">
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-linear-to-r from-transparent via-st-tertiary/40 to-transparent"></div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="font-st-label-sm text-st-label-sm text-st-tertiary uppercase tracking-[0.16em]">
                      PHASE 03 / 04
                    </span>
                    <span className="px-2.5 py-0.5 rounded-[0.125rem] bg-st-surface-container font-st-label-sm text-[11px] text-st-on-surface-variant uppercase tracking-[0.12em] border border-st-outline-variant/30">
                      Weeks 04 - 05
                    </span>
                  </div>
                  <h3 className="font-st-headline-sm text-[20px] sm:text-[24px] text-st-on-surface mb-3">
                    Production-Grade Development
                  </h3>
                  <p className="font-st-body-md text-st-body-md text-st-on-surface-variant leading-relaxed">
                    The approved designs are translated into high-performance, clean, modular code. We build with responsive precision, optimizing for speed, safety, and smooth cross-device stability.
                  </p>
                </div>
              </div>
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-[0.75rem] bg-st-surface-container border border-st-tertiary/50 flex items-center justify-center shadow-lg shadow-st-tertiary/20 z-20 group-hover:scale-110 group-hover:border-st-tertiary transition-all duration-300 order-1 md:order-2">
                <span className="font-st-label-sm text-[12px] font-bold text-st-tertiary">
                  03
                </span>
              </div>
              <div className="hidden md:block w-1/2 md:pl-12 order-3"></div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center w-full group">
              <div className="hidden md:block w-1/2 md:pr-12 order-1"></div>
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-[0.75rem] bg-st-surface-container border border-st-primary/50 flex items-center justify-center shadow-lg shadow-st-primary/20 z-20 group-hover:scale-110 group-hover:border-st-primary transition-all duration-300 order-1 md:order-2">
                <span className="font-st-label-sm text-[12px] font-bold text-st-primary">
                  04
                </span>
              </div>
              <div className="w-full md:w-1/2 md:pl-12 pl-14 md:pl-0 order-2 md:order-3">
                <div className="rounded-[0.5rem] bg-st-surface-container-high/60 backdrop-blur-xl border border-st-outline-variant/40 p-6 sm:p-8 relative overflow-hidden group-hover:border-st-primary/50 transition-all duration-300 shadow-xl">
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-linear-to-r from-transparent via-st-primary/40 to-transparent"></div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="font-st-label-sm text-st-label-sm text-st-primary uppercase tracking-[0.16em]">
                      PHASE 04 / 04
                    </span>
                    <span className="px-2.5 py-0.5 rounded-[0.125rem] bg-st-surface-container font-st-label-sm text-[11px] text-st-on-surface-variant uppercase tracking-[0.12em] border border-st-outline-variant/30">
                      Week 06
                    </span>
                  </div>
                  <h3 className="font-st-headline-sm text-[20px] sm:text-[24px] text-st-on-surface mb-3">
                    Quality Testing &amp; Global Launch
                  </h3>
                  <p className="font-st-body-md text-st-body-md text-st-on-surface-variant leading-relaxed">
                    We test every link, verify every responsive breakpoint, audit the load performance, and smoothly transition the project to your live domains.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 relative w-full rounded-[0.5rem] bg-st-surface-container-high/70 backdrop-blur-2xl border border-st-outline-variant/40 p-6 sm:p-10 overflow-hidden shadow-2xl">
          <div className="absolute inset-x-0 top-0 h-[1px] bg-linear-to-r from-transparent via-st-primary/50 to-transparent"></div>
          <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-st-primary/10 rounded-[0.75rem] blur-3xl pointer-events-none"></div>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-10 h-10 rounded-[0.25rem] bg-st-surface-container-highest flex items-center justify-center shrink-0 border border-st-primary/40 text-st-primary shadow-md shadow-st-primary/20">
                <span className="material-symbols-outlined text-[22px]">
                  verified
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-st-headline-sm text-[22px] sm:text-[26px] text-st-on-surface">
                  What You Receive
                </h4>
                <p className="font-st-body-md text-st-body-md text-st-on-surface-variant leading-relaxed max-w-3xl">
                  A fully custom, highly optimized digital flagship that communicates your premium value effortlessly, operating on an easy-to-manage infrastructure with zero technical dependencies left behind.
                </p>
              </div>
            </div>
            <div className="shrink-0 flex items-center lg:self-center pt-4 lg:pt-0 border-t lg:border-t-0 border-st-outline-variant/20">
              <RainbowLink className={`${stitchRainbow}`} data-path="inquire" href="#contact-drawer">
                <span className="text-white font-semibold">
                  Initiate Project
                </span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform duration-200 text-white">
                  arrow_forward
                </span>
              </RainbowLink>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-6 pt-8">
          <div className="flex items-center gap-3 px-4 py-2 rounded-[0.75rem] bg-st-surface-container-low border border-st-outline-variant/30 text-st-on-surface-variant">
            <span className="w-1.5 h-1.5 rounded-[0.75rem] bg-st-primary"></span>
            <span className="font-st-label-sm text-st-label-sm uppercase tracking-[0.12em]">
              GUARANTEE // FIXED PHASING &amp; SIGN-OFF GATEWAYS
            </span>
          </div>
          <div className="flex items-center gap-4 text-st-outline font-st-label-sm text-st-label-sm uppercase tracking-[0.14em]">
            <span>
              SEC 06 // THE TIMELINE
            </span>
            <span className="w-1 h-1 rounded-[0.75rem] bg-st-outline"></span>
            <span>
              INDEX 04 PHASES
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
