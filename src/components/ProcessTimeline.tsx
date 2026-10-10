import { Reveal } from "@/components/motion/Reveal";
import { TimelineTrack } from "@/components/motion/TimelineTrack";
import { CtaButton } from "@/components/ui/CtaButton";

const phases = [
  {
    timing: "Week 01",
    title: "Discovery and structural strategy",
    body: "We define the goals, map the user journeys, and organize your core messaging. No element is designed until the logic of the website makes complete sense.",
  },
  {
    timing: "Weeks 02–03",
    title: "High-fidelity visual direction",
    body: "We develop an identity specific to your business. You see precise layouts, typography, color pairings, and interaction concepts before anything is built.",
  },
  {
    timing: "Weeks 04–05",
    title: "Production-grade development",
    body: "The approved designs become clean, modular, high-performance code, built responsively and optimized for speed, safety, and stability across devices.",
  },
  {
    timing: "Week 06",
    title: "Quality testing and launch",
    body: "We test every link, check each responsive breakpoint, audit load performance, and move the project onto your live domain.",
  },
];

export function ProcessTimeline() {
  return (
    <section id="process" aria-labelledby="process-title" className="mx-auto w-full max-w-[84rem] px-6 py-28 lg:px-18">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-medium tracking-[0.12em] text-body uppercase">06 / The timeline</p>
        <h2 id="process-title" className="mt-5 font-display text-4xl leading-tight text-heading lg:text-5xl">
          The journey from concept to definitive outcome.
        </h2>
        <p className="mx-auto mt-6 max-w-prose text-lg leading-relaxed">
          We work in clear, sequential phases. No step begins until the previous one is approved.
        </p>
      </div>

      <div className="relative mt-20">
        <TimelineTrack />

        <ol className="flex flex-col gap-14 md:gap-20">
          {phases.map((phase, index) => {
            const onLeft = index % 2 === 0;
            return (
              <li key={phase.title} className="grid grid-cols-[2.5rem_1fr] gap-x-8 md:grid-cols-[1fr_4rem_1fr] md:gap-x-0">
                <Reveal
                  y={0}
                  scale={0.4}
                  className="col-start-1 row-start-1 flex size-10 items-center justify-center rounded-full border border-body/40 bg-canvas font-display text-lg text-heading md:col-start-2"
                >
                  {String(index + 1).padStart(2, "0")}
                </Reveal>

                <Reveal
                  as="article"
                  y={40}
                  className={`col-start-2 row-start-1 flex flex-col gap-4 rounded-3xl border border-outline bg-surface/40 p-8 backdrop-blur-xl transition-all duration-300 ease-in-out hover:border-brand-violet md:p-10 ${
                    onLeft ? "md:col-start-1 md:mr-12" : "md:col-start-3 md:ml-12"
                  }`}
                >
                  <p className="text-xs font-medium tracking-[0.12em] text-brand-rose uppercase">
                    Phase {String(index + 1).padStart(2, "0")} / 04 · {phase.timing}
                  </p>
                  <h3 className="font-display text-2xl leading-snug text-heading lg:text-3xl">{phase.title}</h3>
                  <p className="max-w-prose leading-relaxed">{phase.body}</p>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="mt-24 flex flex-col items-center gap-6 text-center">
        <p className="font-display text-2xl text-heading">Each phase has a sign-off before the next one begins.</p>
        <CtaButton>Initiate project</CtaButton>
      </div>
    </section>
  );
}
