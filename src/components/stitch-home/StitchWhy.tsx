import { RainbowLink } from "@/components/ui/rainbow-button";
import { stitchRainbow } from "./rainbow";
 
import { Clock } from "./Clock";

export function StitchWhy() {
  return (
    <div className="flex flex-col w-full relative overflow-hidden select-none" id="why-we-exist">
      <div className="absolute -top-40 left-1/4 w-[750px] h-[550px] bg-st-secondary-container/10 rounded-[0.75rem] blur-[140px] pointer-events-none transform -translate-x-1/2"></div>
      <div className="absolute top-1/3 -right-24 w-[650px] h-[650px] bg-st-tertiary-container/10 rounded-[0.75rem] blur-[160px] pointer-events-none"></div>
      <div className="absolute -bottom-32 left-1/3 w-[800px] h-[500px] bg-st-primary/5 rounded-[0.75rem] blur-[150px] pointer-events-none"></div>
      <div className="w-full px-st-margin lg:px-st-margin-desktop py-st-space-lg lg:py-st-space-xl flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]">
        <div className="w-full max-w-7xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-st-space-sm">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-[0.125rem] bg-st-surface-container-high/60 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-[0.75rem] bg-st-primary animate-pulse"></span>
              <span className="w-1.5 h-1.5 rounded-[0.75rem] bg-st-tertiary"></span>
              <span className="font-st-label-sm text-st-label-sm uppercase tracking-[0.16em] text-st-on-surface-variant text-[10px]">
                ENV // STANDBY
              </span>
            </div>
            <span className="font-st-label-sm text-st-label-sm text-st-outline uppercase tracking-[0.18em] hidden md:inline-block">
              SYS.CANVAS: ACTIVE
            </span>
          </div>
          <div className="flex items-center gap-6 text-st-on-surface-variant">
            <span className="font-st-label-sm text-st-label-sm uppercase tracking-[0.14em]">
              12-COL ASYMMETRIC GRID
            </span>
            <span className="font-st-label-sm text-st-label-sm text-st-outline uppercase tracking-[0.14em] hidden sm:inline-block">
              COMMITTED DOSSIER
            </span>
          </div>
        </div>
        <div className="relative w-full max-w-7xl rounded-[0.5rem] bg-st-surface-container-lowest/80 backdrop-blur-2xl shadow-2xl p-6 sm:p-10 lg:p-14 overflow-hidden group">
          <div className="absolute inset-x-0 top-0 h-[1px] bg-linear-to-r from-transparent via-st-primary/30 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-[1px] bg-linear-to-r from-transparent via-st-tertiary/20 to-transparent"></div>
          <div className="absolute top-4 left-4 w-4 h-4 flex items-center justify-center text-st-outline-variant pointer-events-none">
            <span className="font-st-label-sm text-st-label-sm text-st-primary/40">
              +
            </span>
          </div>
          <div className="absolute top-4 right-4 w-4 h-4 flex items-center justify-center text-st-outline-variant pointer-events-none">
            <span className="font-st-label-sm text-st-label-sm text-st-primary/40">
              +
            </span>
          </div>
          <div className="absolute bottom-4 left-4 w-4 h-4 flex items-center justify-center text-st-outline-variant pointer-events-none">
            <span className="font-st-label-sm text-st-label-sm text-st-tertiary/40">
              +
            </span>
          </div>
          <div className="absolute bottom-4 right-4 w-4 h-4 flex items-center justify-center text-st-outline-variant pointer-events-none">
            <span className="font-st-label-sm text-st-label-sm text-st-tertiary/40">
              +
            </span>
          </div>
          <div className="relative w-full min-h-[580px] rounded-[0.25rem] bg-st-surface-container-low/40 flex flex-col justify-between p-6 sm:p-12 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <svg className="w-full h-full stroke-st-on-surface-variant/20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern height="64" id="arch-grid" patternUnits="userSpaceOnUse" width="64">
                    <path d="M 64 0 L 0 0 0 64" fill="none" stroke="currentColor" strokeDasharray="2 4" strokeWidth="0.75"></path>
                  </pattern>
                </defs>
                <rect fill="url(#arch-grid)" height="100%" width="100%"></rect>
              </svg>
            </div>
            <div className="relative z-10 w-full flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-st-label-sm text-st-label-sm text-st-primary tracking-[0.2em] uppercase">
                  SEC 01 // WHY WE EXIST
                </span>
                <span className="w-8 h-[1px] bg-st-outline-variant/60 hidden sm:block"></span>
                <span className="font-st-label-sm text-st-label-sm text-st-on-surface-variant/60 uppercase tracking-[0.12em] hidden sm:inline-block">
                  LAYOUT ANCHOR [0,0]
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-st-label-sm text-st-label-sm text-st-on-surface-variant/70 uppercase tracking-[0.14em]">
                  INDEX RATIO
                </span>
                <span className="px-2 py-0.5 rounded-[0.125rem] bg-st-surface-container-high font-st-label-sm text-st-label-sm text-st-secondary tracking-[0.14em]">
                  16:9 NATIVE
                </span>
              </div>
            </div>
            <div className="relative z-10 my-auto py-8 lg:py-12 flex flex-col items-start w-full max-w-5xl mx-auto text-left">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-[0.75rem] bg-st-surface-container-highest/60 backdrop-blur-md mb-6 border border-st-outline-variant/30 shadow-md">
                <span className="w-1.5 h-1.5 rounded-[0.75rem] bg-st-primary animate-pulse"></span>
                <span className="font-st-label-sm text-st-label-sm uppercase tracking-[0.18em] text-st-on-surface">
                  01 / WHY WE EXIST
                </span>
                <span className="w-1.5 h-1.5 rounded-[0.75rem] bg-st-tertiary"></span>
                <span className="font-st-label-sm text-st-label-sm uppercase tracking-[0.14em] text-st-tertiary">
                  CORE MANIFESTO
                </span>
              </div>
              <h1 className="font-st-headline-lg text-[38px] sm:text-[48px] lg:text-[56px] leading-[1.1] text-st-on-surface tracking-tight mb-8 max-w-4xl">
                Your website should do
                {" "}
                <span className="bg-linear-to-r from-st-primary via-st-secondary to-st-tertiary bg-clip-text text-transparent">
                  more than exist.
                </span>
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full mb-10">
                <div className="flex flex-col">
                  <div className="w-8 h-[1px] bg-st-primary/40 mb-4"></div>
                  <p className="font-st-body-lg text-st-body-lg text-st-on-surface-variant leading-relaxed">
                    Your website is often one of the first places people go to understand your business. In a few moments, they are trying to work out what you do, whether they can trust you, and whether you are the right choice for them.
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="w-8 h-[1px] bg-st-tertiary/40 mb-4"></div>
                  <p className="font-st-body-md text-st-body-md text-st-on-surface-variant/90 leading-relaxed">
                    When a website feels confusing, generic, outdated, or disconnected from the quality of the business behind it, that message becomes harder to communicate. GetVantor exists to close that gap. We bring thoughtful design, clear communication, and careful development together to create websites that represent businesses with intention.
                  </p>
                </div>
              </div>
              <div className="relative w-full rounded-[0.5rem] bg-st-surface-container-high/60 backdrop-blur-xl border border-st-outline-variant/40 p-6 sm:p-8 mb-10 overflow-hidden shadow-xl">
                <div className="absolute inset-x-0 top-0 h-[1px] bg-linear-to-r from-transparent via-st-primary/50 to-transparent"></div>
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-st-tertiary/10 rounded-[0.75rem] blur-2xl pointer-events-none"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-[0.125rem] bg-st-surface-container-highest flex items-center justify-center shrink-0 mt-0.5 border border-st-outline-variant/30">
                      <span className="material-symbols-outlined text-st-primary text-[16px]">
                        auto_awesome
                      </span>
                    </div>
                    <p className="font-st-headline-sm text-[20px] sm:text-[24px] leading-snug text-st-on-surface italic tracking-normal">
                      “Because the quality of your online presence should reflect the value of your business.”
                    </p>
                  </div>
                  <span className="font-st-label-sm text-st-label-sm text-st-tertiary uppercase tracking-[0.16em] shrink-0 self-start sm:self-center px-3 py-1 rounded-[0.125rem] bg-st-surface-container-low/80 border border-st-tertiary/20">
                    PRINCIPLE 01
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-5">
                <RainbowLink className={`${stitchRainbow}`} data-path="approach" href="#">
                  <span className="text-white font-semibold">
                    Discover Our Approach
                  </span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform duration-200 text-white">
                    arrow_forward
                  </span>
                </RainbowLink>
                <div className="flex items-center gap-3 px-4 py-2 rounded-[0.75rem] bg-st-surface-container-low border border-st-outline-variant/30 text-st-on-surface-variant">
                  <span className="w-1.5 h-1.5 rounded-[0.75rem] bg-st-primary"></span>
                  <span className="font-st-label-sm text-st-label-sm uppercase tracking-[0.12em]">
                    PARADIGM // INTENTIONAL DESIGN
                  </span>
                </div>
              </div>
            </div>
            <div className="relative z-10 w-full pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="font-st-label-sm text-st-label-sm text-st-on-surface-variant uppercase tracking-[0.14em]">
                  01 / 01 ARCHITECTURE
                </span>
                <span className="w-1 h-1 rounded-[0.75rem] bg-st-outline"></span>
                <span className="font-st-label-sm text-st-label-sm text-st-outline uppercase tracking-[0.14em]">
                  COMMITTED DOSSIER
                </span>
              </div>
              <div className="flex items-center gap-3 font-st-label-sm text-st-label-sm uppercase tracking-[0.16em] text-st-on-surface-variant/80">
                <span>
                  CLOCK
                </span>
                <Clock className="text-st-on-surface font-semibold" />
              </div>
            </div>
          </div>
          <div className="hidden xl:flex absolute -left-10 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 items-center gap-3 text-st-outline-variant font-st-label-sm text-st-label-sm tracking-[0.2em] pointer-events-none">
            <span>
              MASTER_CONTAINER_VIEWPORT_X
            </span>
            <span className="w-6 h-[1px] bg-st-outline-variant"></span>
          </div>
          <div className="hidden xl:flex absolute -right-10 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] items-center gap-3 text-st-outline-variant font-st-label-sm text-st-label-sm tracking-[0.2em] pointer-events-none">
            <span>
              SCALE_AUTO_CONSTRAIN
            </span>
            <span className="w-6 h-[1px] bg-st-outline-variant"></span>
          </div>
        </div>
        <div className="w-full max-w-7xl pt-st-space-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-st-on-surface-variant">
          <p className="font-st-body-sm text-st-body-sm text-st-on-surface-variant/70">
            Haute couture modular shell initialized. All child modules will automatically inherit Swiss editorial spacing ratios.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-st-label-sm text-st-label-sm text-st-outline uppercase tracking-[0.14em]">
              COMMITTED DOSSIER
            </span>
            <span className="w-1.5 h-1.5 rounded-[0.75rem] bg-st-primary/60"></span>
            <span className="font-st-label-sm text-st-label-sm text-st-primary uppercase tracking-[0.14em]">
              GETVANTOR CORE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
