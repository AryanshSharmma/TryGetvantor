import { RainbowLink } from "@/components/ui/rainbow-button";
import { stitchRainbow } from "./rainbow";
/* eslint-disable react/no-unescaped-entities */

export function StitchPricing() {
  return (
    <section className="relative w-full py-st-space-xl px-st-margin lg:px-st-margin-desktop overflow-hidden border-t border-st-outline-variant/30 bg-st-surface-container-lowest" id="section-pricing">
      <div className="absolute -top-32 left-1/3 w-[700px] h-[500px] bg-st-secondary-container/10 rounded-[0.75rem] blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[600px] h-[550px] bg-st-tertiary-container/10 rounded-[0.75rem] blur-[160px] pointer-events-none"></div>
      <div className="relative max-w-7xl mx-auto flex flex-col z-10">
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-[0.75rem] bg-st-surface-container-highest/60 backdrop-blur-md mb-6 border border-st-outline-variant/30 shadow-md">
            <span className="w-1.5 h-1.5 rounded-[0.75rem] bg-st-primary animate-pulse"></span>
            <span className="font-st-label-sm text-st-label-sm uppercase tracking-[0.18em] text-st-on-surface">
              05 / PRICING &amp; TIERS
            </span>
            <span className="w-1 h-1 rounded-[0.75rem] bg-st-outline"></span>
            <span className="font-st-label-sm text-st-label-sm uppercase tracking-[0.14em] text-st-tertiary">
              INVESTMENT TIERS
            </span>
          </div>
          <h2 className="font-st-headline-lg text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.1] text-st-on-surface tracking-tight mb-6 max-w-4xl">
            Transparent investment.
            {" "}
            <span className="bg-linear-to-r from-st-primary via-st-secondary to-st-tertiary bg-clip-text text-transparent italic">
              Defined scopes.
            </span>
          </h2>
          <p className="font-st-body-lg text-st-body-lg text-st-on-surface-variant max-w-3xl leading-relaxed">
            We don't deal in hidden fees or variable pricing guessing games. Every project is scoped down to the pixel before we write a single line of code. Choose the structure that aligns with your current growth phase.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
          <div className="md:col-span-4 rounded-[0.5rem] bg-st-surface-container-high/60 backdrop-blur-xl border border-st-outline-variant/40 p-6 sm:p-8 flex flex-col justify-between group hover:border-st-primary/40 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-linear-to-r from-transparent via-st-primary/40 to-transparent"></div>
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-st-label-sm text-st-label-sm text-st-primary uppercase tracking-[0.16em]">
                  STANDARD WEB PRESENCE
                </span>
                <span className="w-2 h-2 rounded-[0.75rem] bg-st-primary/40 group-hover:bg-st-primary transition-colors"></span>
              </div>
              <h3 className="font-st-headline-sm text-[22px] sm:text-[24px] text-st-on-surface mb-2">
                The Core Build
              </h3>
              <div className="py-4 border-y border-st-outline-variant/20 mb-6">
                <div className="font-st-headline-sm text-[24px] sm:text-[26px] text-st-on-surface font-semibold mb-1">
                  Quoted after your preview
                </div>
                <span className="font-st-label-sm text-st-label-sm text-st-outline uppercase tracking-[0.14em]">
                  Fixed Project Fee
                </span>
              </div>
              <ul className="flex flex-col gap-3.5 mb-8">
                <li className="flex items-start gap-3 text-st-body-sm text-st-on-surface-variant">
                  <span className="material-symbols-outlined text-st-primary text-[18px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>
                    Custom Strategy &amp; Architecture
                  </span>
                </li>
                <li className="flex items-start gap-3 text-st-body-sm text-st-on-surface-variant">
                  <span className="material-symbols-outlined text-st-primary text-[18px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>
                    Bespoke Visual Identity (Up to 5 Pages)
                  </span>
                </li>
                <li className="flex items-start gap-3 text-st-body-sm text-st-on-surface-variant">
                  <span className="material-symbols-outlined text-st-primary text-[18px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>
                    Fully Responsive Full-Stack Development
                  </span>
                </li>
                <li className="flex items-start gap-3 text-st-body-sm text-st-on-surface-variant">
                  <span className="material-symbols-outlined text-st-primary text-[18px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>
                    Performance Optimization &amp; Core SEO Setup
                  </span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-st-outline-variant/20">
              <a className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[0.75rem] bg-st-surface-container-low border border-st-outline-variant/40 text-st-on-surface hover:text-st-primary hover:border-st-primary/40 font-st-label-md text-st-label-md uppercase tracking-[0.12em] transition-all duration-200 group-hover:bg-st-surface-container" data-path="inquire" href="#contact-drawer">
                <span>
                  Select Core Structure
                </span>
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
          <div className="md:col-span-4 rounded-[0.5rem] bg-st-surface-container-high/80 backdrop-blur-2xl border border-st-secondary/40 p-6 sm:p-8 flex flex-col justify-between group hover:border-st-secondary/60 transition-all duration-300 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-linear-to-r from-st-primary via-st-secondary to-st-tertiary"></div>
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-linear-to-r from-st-primary/30 via-st-secondary/30 to-st-tertiary/30"></div>
            <div className="absolute top-0 right-0 px-3 py-1 bg-st-secondary-container text-st-on-secondary-container font-st-label-sm text-[10px] uppercase tracking-[0.16em] rounded-bl-[0.25rem] font-semibold">
              MOST POPULAR
            </div>
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-st-label-sm text-st-label-sm text-st-secondary uppercase tracking-[0.16em]">
                  HIGH-MARGIN OUTCOME
                </span>
                <span className="w-2 h-2 rounded-[0.75rem] bg-st-secondary animate-pulse"></span>
              </div>
              <h3 className="font-st-headline-sm text-[22px] sm:text-[24px] text-st-on-surface mb-2">
                Dynamic Growth System
              </h3>
              <div className="py-4 border-y border-st-outline-variant/30 mb-6">
                <div className="font-st-headline-sm text-[24px] sm:text-[26px] bg-linear-to-r from-st-primary via-st-secondary to-st-tertiary bg-clip-text text-transparent font-semibold mb-1">
                  Quoted after your preview
                </div>
                <span className="font-st-label-sm text-st-label-sm text-st-secondary uppercase tracking-[0.14em]">
                  Fixed Project Fee
                </span>
              </div>
              <ul className="flex flex-col gap-3.5 mb-8">
                <li className="flex items-start gap-3 text-st-body-sm text-st-on-surface-variant">
                  <span className="material-symbols-outlined text-st-secondary text-[18px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span className="font-semibold text-st-on-surface">
                    Everything in the Core Build Included
                  </span>
                </li>
                <li className="flex items-start gap-3 text-st-body-sm text-st-on-surface-variant">
                  <span className="material-symbols-outlined text-st-secondary text-[18px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>
                    Expanded Layout System (Up to 12 Custom Pages)
                  </span>
                </li>
                <li className="flex items-start gap-3 text-st-body-sm text-st-on-surface-variant">
                  <span className="material-symbols-outlined text-st-secondary text-[18px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>
                    Custom Micro-Interactions &amp; Complex Animations
                  </span>
                </li>
                <li className="flex items-start gap-3 text-st-body-sm text-st-on-surface-variant">
                  <span className="material-symbols-outlined text-st-secondary text-[18px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>
                    Dynamic CMS Integration (Blogs, Portfolios, Resources)
                  </span>
                </li>
                <li className="flex items-start gap-3 text-st-body-sm text-st-on-surface-variant">
                  <span className="material-symbols-outlined text-st-secondary text-[18px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>
                    Custom Contact System &amp; CRM Integration
                  </span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-st-outline-variant/30">
              <RainbowLink className={`${stitchRainbow} w-full`} data-path="inquire" href="#contact-drawer">
                <span className="text-white font-semibold">
                  Select Scale Engine
                </span>
                <span className="material-symbols-outlined text-[16px] text-white">
                  arrow_forward
                </span>
              </RainbowLink>
            </div>
          </div>
          <div className="md:col-span-4 rounded-[0.5rem] bg-st-surface-container-high/60 backdrop-blur-xl border border-st-outline-variant/40 p-6 sm:p-8 flex flex-col justify-between group hover:border-st-tertiary/40 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-linear-to-r from-transparent via-st-tertiary/40 to-transparent"></div>
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-st-label-sm text-st-label-sm text-st-tertiary uppercase tracking-[0.16em]">
                  UNCOMPROMISING DIGITAL ART
                </span>
                <span className="w-2 h-2 rounded-[0.75rem] bg-st-tertiary/40 group-hover:bg-st-tertiary transition-colors"></span>
              </div>
              <h3 className="font-st-headline-sm text-[22px] sm:text-[24px] text-st-on-surface mb-2">
                Generational Enterprise
              </h3>
              <div className="py-4 border-y border-st-outline-variant/20 mb-6">
                <div className="font-st-headline-sm text-[24px] sm:text-[26px] text-st-on-surface font-semibold mb-1">
                  Custom Quote Only
                </div>
                <span className="font-st-label-sm text-st-label-sm text-st-outline uppercase tracking-[0.14em]">
                  Tailored Discovery &amp; Engagement
                </span>
              </div>
              <ul className="flex flex-col gap-3.5 mb-8">
                <li className="flex items-start gap-3 text-st-body-sm text-st-on-surface-variant">
                  <span className="material-symbols-outlined text-st-tertiary text-[18px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>
                    Complete Digital Transformation &amp; High-Ticket Positioning
                  </span>
                </li>
                <li className="flex items-start gap-3 text-st-body-sm text-st-on-surface-variant">
                  <span className="material-symbols-outlined text-st-tertiary text-[18px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>
                    Unlimited Scoped Page Architectures
                  </span>
                </li>
                <li className="flex items-start gap-3 text-st-body-sm text-st-on-surface-variant">
                  <span className="material-symbols-outlined text-st-tertiary text-[18px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>
                    Custom Interactive 3D WebGL Motion Elements
                  </span>
                </li>
                <li className="flex items-start gap-3 text-st-body-sm text-st-on-surface-variant">
                  <span className="material-symbols-outlined text-st-tertiary text-[18px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>
                    Full Technical API Integrations &amp; Advanced Custom Stacks
                  </span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-st-outline-variant/20">
              <a className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[0.75rem] bg-st-surface-container-low border border-st-outline-variant/40 text-st-on-surface hover:text-st-tertiary hover:border-st-tertiary/40 font-st-label-md text-st-label-md uppercase tracking-[0.12em] transition-all duration-200 group-hover:bg-st-surface-container" data-path="inquire" href="#contact-drawer">
                <span>
                  Initiate Discovery
                </span>
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-6 pt-4">
          <div className="flex items-center gap-3 px-4 py-2 rounded-[0.75rem] bg-st-surface-container-low border border-st-outline-variant/30 text-st-on-surface-variant">
            <span className="w-1.5 h-1.5 rounded-[0.75rem] bg-st-primary"></span>
            <span className="font-st-label-sm text-st-label-sm uppercase tracking-[0.12em]">
              GUARANTEE // FIXED PRICE &amp; TIMELINE MILESTONES
            </span>
          </div>
          <div className="flex items-center gap-4 text-st-outline font-st-label-sm text-st-label-sm uppercase tracking-[0.14em]">
            <span>
              SEC 05 // PRICING &amp; TIERS
            </span>
            <span className="w-1 h-1 rounded-[0.75rem] bg-st-outline"></span>
            <span>
              INDEX 03 TIERS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
