import { RainbowLink } from "@/components/ui/rainbow-button";
import { stitchRainbow } from "./rainbow";
/* eslint-disable react/no-unescaped-entities */

export function StitchConcepts() {
  return (
    <section className="relative w-full py-st-space-xl px-st-margin lg:px-st-margin-desktop overflow-hidden border-t border-st-outline-variant/30 bg-st-surface-container-lowest" id="section-selected-concepts">
      <div className="absolute top-1/4 -right-10 w-[650px] h-[500px] bg-st-secondary-container/10 rounded-[0.75rem] blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/4 w-[550px] h-[450px] bg-st-tertiary-container/10 rounded-[0.75rem] blur-[160px] pointer-events-none"></div>
      <div className="relative max-w-7xl mx-auto flex flex-col z-10">
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-[0.75rem] bg-st-surface-container-highest/60 backdrop-blur-md mb-6 border border-st-outline-variant/30 shadow-md">
            <span className="w-1.5 h-1.5 rounded-[0.75rem] bg-st-primary animate-pulse"></span>
            <span className="font-st-label-sm text-st-label-sm uppercase tracking-[0.18em] text-st-on-surface">
              04 / SELECTED CONCEPTS
            </span>
            <span className="w-1 h-1 rounded-[0.75rem] bg-st-outline"></span>
            <span className="font-st-label-sm text-st-label-sm uppercase tracking-[0.14em] text-st-tertiary">
              REPERTOIRE // CASE EXPLORATIONS
            </span>
          </div>
          <h2 className="font-st-headline-lg text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.1] text-st-on-surface tracking-tight mb-6 max-w-4xl">
            Different businesses.
            {" "}
            <span className="bg-linear-to-r from-st-primary via-st-secondary to-st-tertiary bg-clip-text text-transparent italic">
              Different visual thinking.
            </span>
          </h2>
          <p className="font-st-body-lg text-st-body-lg text-st-on-surface-variant max-w-3xl leading-relaxed">
            A strong website doesn't follow one visual formula. Its design should grow from the business, the audience, and the story it needs to communicate.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
          <div className="md:col-span-4 rounded-[0.5rem] bg-st-surface-container-high/60 backdrop-blur-xl border border-st-outline-variant/40 p-6 flex flex-col justify-between group hover:border-st-primary/40 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-linear-to-r from-transparent via-st-primary/40 to-transparent"></div>
            <div>
              <div className="relative w-full h-40 rounded-[0.25rem] bg-st-surface-container-low/80 border border-st-outline-variant/30 mb-6 overflow-hidden flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-linear-to-br from-st-primary/10 via-transparent to-st-secondary/10"></div>
                <div className="relative z-10 flex flex-col items-center justify-center text-center gap-2">
                  <div className="w-8 h-8 rounded-[0.125rem] bg-st-surface-container flex items-center justify-center border border-st-outline-variant/30">
                    <span className="material-symbols-outlined text-st-primary text-[18px]">
                      apartment
                    </span>
                  </div>
                  <span className="font-st-label-sm text-st-label-sm text-st-on-surface-variant uppercase tracking-[0.16em]">
                    AETHER // RESIDENCE
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-st-label-sm text-st-label-sm text-st-primary uppercase tracking-[0.16em]">
                  Digital Flagship Concept
                </span>
                <span className="w-2 h-2 rounded-[0.75rem] bg-st-primary/40 group-hover:bg-st-primary transition-colors"></span>
              </div>
              <h3 className="font-st-headline-sm text-[20px] sm:text-[22px] text-st-on-surface mb-3">
                AETHER REAL ESTATE
              </h3>
              <p className="font-st-body-md text-st-body-md text-st-on-surface-variant leading-relaxed mb-6">
                An exploration of refined property presentation, architectural imagery, and a considered digital experience for a premium real estate brand.
              </p>
            </div>
            <div className="pt-4 border-t border-st-outline-variant/20 flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-[0.75rem] bg-st-surface-container-lowest/80 border border-st-outline-variant/30 font-st-label-sm text-[10px] text-st-on-surface-variant uppercase tracking-[0.12em]">
                CONCEPT PROJECT — NOT CLIENT WORK
              </span>
              <span className="material-symbols-outlined text-st-outline text-[18px] group-hover:text-st-primary transition-colors">
                arrow_outward
              </span>
            </div>
          </div>
          <div className="md:col-span-4 rounded-[0.5rem] bg-st-surface-container-high/60 backdrop-blur-xl border border-st-outline-variant/40 p-6 flex flex-col justify-between group hover:border-st-secondary/40 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-linear-to-r from-transparent via-st-secondary/40 to-transparent"></div>
            <div>
              <div className="relative w-full h-40 rounded-[0.25rem] bg-st-surface-container-low/80 border border-st-outline-variant/30 mb-6 overflow-hidden flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-linear-to-br from-st-secondary/10 via-transparent to-st-primary/10"></div>
                <div className="relative z-10 flex flex-col items-center justify-center text-center gap-2">
                  <div className="w-8 h-8 rounded-[0.125rem] bg-st-surface-container flex items-center justify-center border border-st-outline-variant/30">
                    <span className="material-symbols-outlined text-st-secondary text-[18px]">
                      show_chart
                    </span>
                  </div>
                  <span className="font-st-label-sm text-st-label-sm text-st-on-surface-variant uppercase tracking-[0.16em]">
                    KINETICS // INSTITUTION
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-st-label-sm text-st-label-sm text-st-secondary uppercase tracking-[0.16em]">
                  Institutional Website Concept
                </span>
                <span className="w-2 h-2 rounded-[0.75rem] bg-st-secondary/40 group-hover:bg-st-secondary transition-colors"></span>
              </div>
              <h3 className="font-st-headline-sm text-[20px] sm:text-[22px] text-st-on-surface mb-3">
                KINETICS CAPITAL
              </h3>
              <p className="font-st-body-md text-st-body-md text-st-on-surface-variant leading-relaxed mb-6">
                An exploration of disciplined typography, clear information hierarchy, and a confident digital presence for a financial-services brand.
              </p>
            </div>
            <div className="pt-4 border-t border-st-outline-variant/20 flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-[0.75rem] bg-st-surface-container-lowest/80 border border-st-outline-variant/30 font-st-label-sm text-[10px] text-st-on-surface-variant uppercase tracking-[0.12em]">
                CONCEPT PROJECT — NOT CLIENT WORK
              </span>
              <span className="material-symbols-outlined text-st-outline text-[18px] group-hover:text-st-secondary transition-colors">
                arrow_outward
              </span>
            </div>
          </div>
          <div className="md:col-span-4 rounded-[0.5rem] bg-st-surface-container-high/60 backdrop-blur-xl border border-st-outline-variant/40 p-6 flex flex-col justify-between group hover:border-st-tertiary/40 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-linear-to-r from-transparent via-st-tertiary/40 to-transparent"></div>
            <div>
              <div className="relative w-full h-40 rounded-[0.25rem] bg-st-surface-container-low/80 border border-st-outline-variant/30 mb-6 overflow-hidden flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-linear-to-br from-st-tertiary/10 via-transparent to-st-primary/10"></div>
                <div className="relative z-10 flex flex-col items-center justify-center text-center gap-2">
                  <div className="w-8 h-8 rounded-[0.125rem] bg-st-surface-container flex items-center justify-center border border-st-outline-variant/30">
                    <span className="material-symbols-outlined text-st-tertiary text-[18px]">
                      nature_people
                    </span>
                  </div>
                  <span className="font-st-label-sm text-st-label-sm text-st-on-surface-variant uppercase tracking-[0.16em]">
                    VERDANT // ATELIER
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-st-label-sm text-st-label-sm text-st-tertiary uppercase tracking-[0.16em]">
                  Portfolio Website Concept
                </span>
                <span className="w-2 h-2 rounded-[0.75rem] bg-st-tertiary/40 group-hover:bg-st-tertiary transition-colors"></span>
              </div>
              <h3 className="font-st-headline-sm text-[20px] sm:text-[22px] text-st-on-surface mb-3">
                VERDANT ARCHITECTURE
              </h3>
              <p className="font-st-body-md text-st-body-md text-st-on-surface-variant leading-relaxed mb-6">
                An exploration of architectural storytelling, material-led imagery, and an editorial layout for a specialized architecture practice.
              </p>
            </div>
            <div className="pt-4 border-t border-st-outline-variant/20 flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-[0.75rem] bg-st-surface-container-lowest/80 border border-st-outline-variant/30 font-st-label-sm text-[10px] text-st-on-surface-variant uppercase tracking-[0.12em]">
                CONCEPT PROJECT — NOT CLIENT WORK
              </span>
              <span className="material-symbols-outlined text-st-outline text-[18px] group-hover:text-st-tertiary transition-colors">
                arrow_outward
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-6 pt-4">
          <RainbowLink className={`${stitchRainbow}`} data-path="work" href="#">
            <span className="text-white font-semibold">
              View Full Concept Archive
            </span>
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform duration-200 text-white">
              arrow_forward
            </span>
          </RainbowLink>
          <div className="flex items-center gap-4 text-st-outline font-st-label-sm text-st-label-sm uppercase tracking-[0.14em]">
            <span>
              SEC 04 // SELECTED CONCEPTS
            </span>
            <span className="w-1 h-1 rounded-[0.75rem] bg-st-outline"></span>
            <span>
              INDEX 03 SPECIMENS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
