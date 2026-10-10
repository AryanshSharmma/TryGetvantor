import { Reveal } from "@/components/motion/Reveal";

const commitments = ["Pages and information structure", "Functionality", "Integrations", "Additional services"];

export function WhyWeExist() {
  return (
    <section
      id="why"
      aria-labelledby="why-title"
      className="mx-auto grid w-full max-w-[84rem] gap-14 px-6 py-28 lg:grid-cols-2 lg:gap-20 lg:px-18"
    >
      <Reveal x={-32} y={0}>
        <p className="text-xs font-medium tracking-[0.12em] text-body uppercase">01 / Why we exist</p>
        <h2 id="why-title" className="mt-5 font-display text-4xl leading-tight text-heading lg:text-5xl">
          A better way to bring your business online.
        </h2>
        <p className="mt-6 max-w-prose text-lg leading-relaxed">
          Every project is scoped around what the business actually needs. Before work begins, we define the pages,
          functionality, integrations, and any additional services included.
        </p>
      </Reveal>

      <Reveal
        x={32}
        y={0}
        delay={0.15}
        className="flex flex-col justify-center gap-8 self-center rounded-3xl border border-outline bg-surface/40 p-8 backdrop-blur-xl lg:p-12"
      >
        <h3 className="font-display text-2xl text-heading">Defined before work begins</h3>
        <ul className="flex flex-col divide-y divide-outline">
          {commitments.map((item, index) => (
            <Reveal as="li" key={item} y={12} delay={0.3 + index * 0.1} className="py-4 text-base text-heading">
              {item}
            </Reveal>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
