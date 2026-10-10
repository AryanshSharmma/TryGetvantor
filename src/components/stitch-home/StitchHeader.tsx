 

export function StitchHeader() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-st-surface-container-lowest/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 w-full px-st-margin lg:px-st-margin-desktop flex items-center justify-between">
        <div className="flex items-center gap-st-space-md">
          <a className="flex items-center gap-3 group" data-path="work" href="#section-selected-concepts">
            <div className="w-7 h-7 rounded-[0.125rem] bg-st-surface-container flex items-center justify-center relative p-[1px]">
              <div className="w-full h-full rounded-[0.125rem] bg-st-surface-container-lowest flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-[0.125rem] bg-st-primary transform rotate-45 group-hover:scale-110 transition-transform duration-300"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-st-label-md text-st-label-md uppercase tracking-[0.18em] text-st-on-surface">
                GetVantor
              </span>
            </div>
          </a>
        </div>
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8" data-active-classes="text-primary font-semibold">
          <a className="font-st-label-md text-st-label-md uppercase text-st-on-surface-variant hover:text-st-on-surface transition-colors duration-200" data-path="work" href="#section-selected-concepts">
            Work
          </a>
          <a className="font-st-label-md text-st-label-md uppercase text-st-on-surface-variant hover:text-st-on-surface transition-colors duration-200" data-path="why-we-exist" href="#why-we-exist">
            Why We Exist
          </a>
          <a className="font-st-label-md text-st-label-md uppercase text-st-on-surface-variant hover:text-st-on-surface transition-colors duration-200" data-path="capabilities" href="#section-what-we-do">
            Capabilities
          </a>
          <a className="font-st-label-md text-st-label-md uppercase text-st-on-surface-variant hover:text-st-on-surface transition-colors duration-200" data-path="approach" href="#section-the-difference">
            Approach
          </a>
          <a className="font-st-label-md text-st-label-md uppercase text-st-on-surface-variant hover:text-st-on-surface transition-colors duration-200" data-path="pricing" href="#section-pricing">
            Pricing
          </a>
          <a className="font-st-label-md text-st-label-md uppercase text-st-on-surface-variant hover:text-st-on-surface transition-colors duration-200" data-path="process" href="#section-timeline">
            Process
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <a className="relative group inline-flex items-center justify-center px-6 py-2.5 rounded-[0.125rem] bg-st-surface-container text-st-on-surface font-st-label-md text-st-label-md uppercase tracking-[0.12em] hover:bg-st-surface-container-high hover:text-st-on-surface transition-all duration-300" data-path="inquire" href="#contact-drawer">
            <span className="relative z-10 flex items-center gap-2">
              <span>
                Inquire
              </span>
              <span className="material-symbols-outlined text-[14px]">
                arrow_outward
              </span>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
