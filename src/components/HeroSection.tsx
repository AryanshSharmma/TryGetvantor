import { HeroSceneLazy } from "@/components/HeroSceneLazy";
import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";

const hudDeck = ["Thoughtful design", "Purposeful development", "Built around your business"];
const telemetry = ["** ENV // STANDBY", "SYS.CANVAS: ACTIVE", "12-COL ASYMMETRIC GRID"];

export function HeroSection() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="absolute size-[min(90vw,60rem)] rounded-full bg-[radial-gradient(circle,#A855F7_0%,#E11D48_45%,transparent_70%)] opacity-25 blur-3xl" />
        {/* Mount point for the 3D scene; absolutely placed so it never shifts layout. */}
        <div id="hero-spline" className="relative aspect-square w-[min(100vw,54rem)] opacity-35 lg:opacity-50">
          <HeroSceneLazy />
        </div>
      </div>

      <div className="mx-auto flex min-h-svh w-full max-w-[84rem] flex-col items-center px-6 pt-36 pb-28 text-center lg:px-18">
        <div className="flex flex-1 flex-col items-center justify-center">
          <Reveal
            as="p"
            className="rounded-full border border-brand-violet/60 bg-surface/40 px-5 py-2 font-mono text-xs tracking-[0.12em] text-heading shadow-[0_0_24px_-4px_rgb(168_85_247/0.55)] backdrop-blur-xl"
          >
            • INDEPENDENT DIGITAL STUDIO · DESIGN × DEVELOPMENT •
          </Reveal>

          <Reveal
            as="h1"
            id="hero-title"
            delay={0.1}
            className="mt-10 max-w-[18ch] font-display text-6xl leading-[0.98] tracking-[-0.035em] text-balance text-heading sm:text-7xl lg:text-8xl xl:text-9xl"
          >
            Websites that make your business{" "}
            <em className="bg-brand-gradient bg-clip-text pr-[0.08em] font-normal text-transparent">
              impossible to overlook.
            </em>
          </Reveal>

          <Reveal as="p" delay={0.25} className="mt-8 max-w-[65ch] text-lg leading-relaxed">
            We design and build custom websites around your business, your audience, and what you need your website to
            accomplish.
          </Reveal>

          <Reveal delay={0.4} className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-6">
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute inset-x-6 -bottom-3 h-10 rounded-full bg-brand-gradient opacity-70 blur-2xl"
              />
              <CtaButton href="#contact" className="relative px-12! py-5! text-base! tracking-[0.12em]! uppercase!">
                Discuss Your Project →
              </CtaButton>
            </div>
            <a
              href="#work"
              className="rounded-full border border-outline px-8 py-4 text-sm font-medium tracking-[0.12em] text-heading uppercase transition-all duration-300 ease-in-out hover:border-brand-violet hover:bg-heading/5"
            >
              Explore Our Work ↗
            </a>
          </Reveal>
        </div>

        <Reveal eager delay={0.6} className="mt-16 flex w-full flex-col items-center gap-6">
          <ul className="flex flex-col items-center gap-3 font-mono text-xs tracking-[0.12em] text-body uppercase sm:flex-row sm:gap-10">
            {hudDeck.map((item, index) => (
              <li key={item} className="flex items-center gap-3">
                {index === 0 ? <span aria-hidden="true">•</span> : null}
                {item}
                {index === hudDeck.length - 1 ? <span aria-hidden="true">•</span> : null}
              </li>
            ))}
          </ul>
          <ul
            aria-hidden="true"
            className="flex w-full flex-wrap justify-center gap-x-10 gap-y-2 border-t border-outline pt-6 font-mono text-[0.7rem] tracking-[0.12em] text-body/70 sm:justify-between"
          >
            {telemetry.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
