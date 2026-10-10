 

export function StitchFooter() {
  return (
    <footer className="w-full bg-[#080B0F] border-t border-white/10 py-16 text-[#E0E2EA]">
      <div className="max-w-7xl mx-auto px-st-margin lg:px-st-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-[0.125rem] bg-[#1C2025] flex items-center justify-center border border-white/10">
                <div className="w-2.5 h-2.5 rounded-[0.125rem] bg-[#8B5CF6] transform rotate-45"></div>
              </div>
              <span className="font-st-label-md text-st-label-md uppercase tracking-[0.18em] text-white font-semibold">
                GetVantor
              </span>
            </div>
            <p className="font-st-body-sm text-st-body-sm text-[#CBC3D7] leading-relaxed max-w-sm">
              Independent Digital Studio · Design × Development
            </p>
            <div className="pt-4">
              <span className="font-st-label-sm text-st-label-sm text-[#CBC3D7]/60 tracking-[0.08em]">
                © 2026 GetVantor. All rights reserved.
              </span>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-4">
            <span className="font-st-label-sm text-st-label-sm uppercase tracking-[0.18em] text-[#8B5CF6] font-semibold">
              NAVIGATION
            </span>
            <nav className="flex flex-col gap-2.5 font-st-body-sm text-st-body-sm">
              <a className="text-[#CBC3D7] hover:text-[#8B5CF6] transition-colors duration-200" href="#section-selected-concepts">
                Selected Concepts
              </a>
              <a className="text-[#CBC3D7] hover:text-[#8B5CF6] transition-colors duration-200" href="#section-what-we-do">
                What We Do
              </a>
              <a className="text-[#CBC3D7] hover:text-[#8B5CF6] transition-colors duration-200" href="#why-we-exist">
                Core Philosophy
              </a>
              <a className="text-[#CBC3D7] hover:text-[#8B5CF6] transition-colors duration-200" href="#section-timeline">
                The Timeline
              </a>
              <a className="text-[#CBC3D7] hover:text-[#8B5CF6] transition-colors duration-200" href="#section-pricing">
                Fixed Pricing
              </a>
            </nav>
          </div>
          <div className="md:col-span-4 flex flex-col gap-4">
            <span className="font-st-label-sm text-st-label-sm uppercase tracking-[0.18em] text-[#FFB8A7] font-semibold">
              STUDIO CHANNELS
            </span>
            <div className="flex flex-col gap-3 font-st-body-sm text-st-body-sm">
              <a className="text-white hover:text-[#8B5CF6] transition-colors duration-200 flex items-center gap-2 group" href="mailto:aryansh@trygetvantor.com">
                <span className="material-symbols-outlined text-[16px] text-[#8B5CF6]">
                  mail
                </span>
                <span>
                  aryansh@trygetvantor.com
                </span>
                <span className="material-symbols-outlined text-[14px] text-st-outline group-hover:translate-x-0.5 transition-transform">
                  arrow_outward
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-st-label-sm text-st-label-sm text-[#CBC3D7]/70">
          <span className="tracking-[0.12em] uppercase">
            GETVANTOR
          </span>
          <div className="flex items-center gap-6">
            <a className="hover:text-white transition-colors uppercase tracking-[0.12em]" href="#">
              Privacy
            </a>
            <span className="text-white/20">
              ·
            </span>
            <a className="hover:text-white transition-colors uppercase tracking-[0.12em]" href="#">
              Terms
            </a>
            <span className="text-white/20">
              ·
            </span>
            <a className="hover:text-white transition-colors uppercase tracking-[0.12em]" href="#">
              Colophon
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
