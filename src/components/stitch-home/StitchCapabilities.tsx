import { RainbowLink } from "@/components/ui/rainbow-button";
import { stitchRainbow } from "./rainbow";
/* eslint-disable react/no-unescaped-entities */

export function StitchCapabilities() {
  return (
    <section className="relative w-full py-st-space-xl px-st-margin lg:px-st-margin-desktop overflow-hidden border-t border-st-outline-variant/30 bg-st-surface-container-lowest" id="section-what-we-do">
      <div className="absolute top-1/4 -left-10 w-[650px] h-[500px] bg-st-secondary-container/10 rounded-[0.75rem] blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[450px] bg-st-tertiary-container/10 rounded-[0.75rem] blur-[160px] pointer-events-none"></div>
      <div className="relative max-w-7xl mx-auto flex flex-col z-10">
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-[0.75rem] bg-st-surface-container-highest/60 backdrop-blur-md mb-6 border border-st-outline-variant/30 shadow-md">
            <span className="w-1.5 h-1.5 rounded-[0.75rem] bg-st-tertiary animate-pulse"></span>
            <span className="font-st-label-sm text-st-label-sm uppercase tracking-[0.18em] text-st-on-surface">
              02 / WHAT WE DO
            </span>
            <span className="w-1 h-1 rounded-[0.75rem] bg-st-outline"></span>
            <span className="font-st-label-sm text-st-label-sm uppercase tracking-[0.14em] text-st-tertiary">
              CORE DISCIPLINES
            </span>
          </div>
          <h2 className="font-st-headline-lg text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.1] text-st-on-surface tracking-tight mb-6 max-w-4xl">
            A better way to bring your
            {" "}
            <span className="bg-linear-to-r from-st-primary via-st-secondary to-st-tertiary bg-clip-text text-transparent italic">
              business online.
            </span>
          </h2>
          <p className="font-st-body-lg text-st-body-lg text-st-on-surface-variant max-w-3xl leading-relaxed">
            We design and build custom websites around your business, your audience, and what you need your website to accomplish. Every project is scoped around what the business actually needs. The pages, functionality, integrations, and additional services included are defined before work begins.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
          <div className="md:col-span-6 rounded-[0.5rem] bg-st-surface-container-high/60 backdrop-blur-xl border border-st-outline-variant/40 p-6 sm:p-8 flex flex-col justify-between group hover:border-st-primary/40 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-linear-to-r from-transparent via-st-primary/40 to-transparent"></div>
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="font-st-label-sm text-st-label-sm text-st-primary uppercase tracking-[0.16em]">
                  02.1 / WEBSITE STRATEGY &amp; STRUCTURE
                </span>
                <span className="w-2 h-2 rounded-[0.75rem] bg-st-primary/40 group-hover:bg-st-primary transition-colors"></span>
              </div>
              <h3 className="font-st-headline-sm text-[22px] sm:text-[26px] text-st-on-surface mb-3">
                A clear plan for your website.
              </h3>
              <p className="font-st-body-md text-st-body-md text-st-on-surface-variant leading-relaxed">
                We organize your pages, information, and key messages so visitors can understand your business without having to work for it.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-st-outline-variant/20 flex items-center justify-between">
              <span className="font-st-label-sm text-st-label-sm text-st-outline uppercase tracking-[0.12em]">
                ARCHITECTURE &amp; IA
              </span>
              <span className="material-symbols-outlined text-st-outline text-[18px] group-hover:text-st-primary transition-colors">
                hub
              </span>
            </div>
          </div>
          <div className="md:col-span-6 rounded-[0.5rem] bg-st-surface-container-high/60 backdrop-blur-xl border border-st-outline-variant/40 p-6 sm:p-8 flex flex-col justify-between group hover:border-st-tertiary/40 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-linear-to-r from-transparent via-st-tertiary/40 to-transparent"></div>
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="font-st-label-sm text-st-label-sm text-st-tertiary uppercase tracking-[0.16em]">
                  02.2 / VISUAL DESIGN
                </span>
                <span className="w-2 h-2 rounded-[0.75rem] bg-st-tertiary/40 group-hover:bg-st-tertiary transition-colors"></span>
              </div>
              <h3 className="font-st-headline-sm text-[22px] sm:text-[26px] text-st-on-surface mb-3">
                A digital identity with intention.
              </h3>
              <p className="font-st-body-md text-st-body-md text-st-on-surface-variant leading-relaxed">
                We develop a distinctive visual direction using typography, color, imagery, layout, and interaction to create a website that feels considered rather than interchangeable.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-st-outline-variant/20 flex items-center justify-between">
              <span className="font-st-label-sm text-st-label-sm text-st-outline uppercase tracking-[0.12em]">
                ATELIER STYLING
              </span>
              <span className="material-symbols-outlined text-st-outline text-[18px] group-hover:text-st-tertiary transition-colors">
                palette
              </span>
            </div>
          </div>
          <div className="md:col-span-4 rounded-[0.5rem] bg-st-surface-container-high/60 backdrop-blur-xl border border-st-outline-variant/40 p-6 sm:p-8 flex flex-col justify-between group hover:border-st-primary/40 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-linear-to-r from-transparent via-st-primary/30 to-transparent"></div>
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="font-st-label-sm text-st-label-sm text-st-primary uppercase tracking-[0.16em]">
                  02.3 / WEBSITE DEVELOPMENT
                </span>
                <span className="w-2 h-2 rounded-[0.75rem] bg-st-primary/40 group-hover:bg-st-primary transition-colors"></span>
              </div>
              <h3 className="font-st-headline-sm text-[20px] text-st-on-surface mb-3">
                Design brought to life.
              </h3>
              <p className="font-st-body-md text-st-body-md text-st-on-surface-variant leading-relaxed">
                We turn the approved design into a working website, with responsive layouts and the agreed functionality implemented for the project.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-st-outline-variant/20 flex items-center justify-between">
              <span className="font-st-label-sm text-st-label-sm text-st-outline uppercase tracking-[0.12em]">
                ENGINEERING
              </span>
              <span className="material-symbols-outlined text-st-outline text-[18px] group-hover:text-st-primary transition-colors">
                code
              </span>
            </div>
          </div>
          <div className="md:col-span-4 rounded-[0.5rem] bg-st-surface-container-high/60 backdrop-blur-xl border border-st-outline-variant/40 p-6 sm:p-8 flex flex-col justify-between group hover:border-st-secondary/40 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-linear-to-r from-transparent via-st-secondary/30 to-transparent"></div>
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="font-st-label-sm text-st-label-sm text-st-secondary uppercase tracking-[0.16em]">
                  02.4 / RESPONSIVE EXPERIENCE
                </span>
                <span className="w-2 h-2 rounded-[0.75rem] bg-st-secondary/40 group-hover:bg-st-secondary transition-colors"></span>
              </div>
              <h3 className="font-st-headline-sm text-[20px] text-st-on-surface mb-3">
                Considered across screen sizes.
              </h3>
              <p className="font-st-body-md text-st-body-md text-st-on-surface-variant leading-relaxed">
                Your website should remain clear, usable, and visually coherent across desktop, tablet, and mobile devices.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-st-outline-variant/20 flex items-center justify-between">
              <span className="font-st-label-sm text-st-label-sm text-st-outline uppercase tracking-[0.12em]">
                ADAPTIVE VIEWPORT
              </span>
              <span className="material-symbols-outlined text-st-outline text-[18px] group-hover:text-st-secondary transition-colors">
                devices
              </span>
            </div>
          </div>
          <div className="md:col-span-4 rounded-[0.5rem] bg-st-surface-container-high/60 backdrop-blur-xl border border-st-outline-variant/40 p-6 sm:p-8 flex flex-col justify-between group hover:border-st-tertiary/40 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-linear-to-r from-transparent via-st-tertiary/30 to-transparent"></div>
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="font-st-label-sm text-st-label-sm text-st-tertiary uppercase tracking-[0.16em]">
                  02.5 / LAUNCH PREPARATION
                </span>
                <span className="w-2 h-2 rounded-[0.75rem] bg-st-tertiary/40 group-hover:bg-st-tertiary transition-colors"></span>
              </div>
              <h3 className="font-st-headline-sm text-[20px] text-st-on-surface mb-3">
                Ready for the next step.
              </h3>
              <p className="font-st-body-md text-st-body-md text-st-on-surface-variant leading-relaxed">
                We test the agreed functionality, review responsive behavior, and prepare the website for launch according to the project scope.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-st-outline-variant/20 flex items-center justify-between">
              <span className="font-st-label-sm text-st-label-sm text-st-outline uppercase tracking-[0.12em]">
                DEPLOYMENT QA
              </span>
              <span className="material-symbols-outlined text-st-outline text-[18px] group-hover:text-st-tertiary transition-colors">
                rocket_launch
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-6 pt-4">
          <RainbowLink className={`${stitchRainbow}`} data-path="inquire" href="#contact-drawer">
            <span className="text-white font-semibold">
              Tell Us What You're Building
            </span>
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform duration-200 text-white">
              arrow_forward
            </span>
          </RainbowLink>
          <div className="flex items-center gap-4 text-st-outline font-st-label-sm text-st-label-sm uppercase tracking-[0.14em]">
            <span>
              SEC 02 // GETVANTOR WORK SCOPE
            </span>
            <span className="w-1 h-1 rounded-[0.75rem] bg-st-outline"></span>
            <span>
              INDEX 05 NODES
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
