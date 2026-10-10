import { Reveal } from "@/components/motion/Reveal";

const principles = [
  {
    title: "Intentional design",
    body: "Every decision has a reason. From the first headline to the final interaction, structure and visual direction serve a purpose, so the site feels coherent and easy to understand.",
  },
  {
    title: "Clarity before complexity",
    body: "Visitors shouldn't have to decode your website to understand what you offer. We prioritize clear messaging, logical structure, and meaningful next steps.",
  },
  {
    title: "Craft over shortcuts",
    body: "We aim for a visual experience suited to your business, not a template with the colors and logo swapped out.",
  },
  {
    title: "Design that connects to purpose",
    body: "Visual impact matters, but it should work alongside usability and the needs of the customer, not compete with them.",
  },
];

export function ParallaxDifference() {
  return (
    <section
      id="difference"
      aria-labelledby="difference-title"
      className="relative mx-auto grid w-full max-w-[84rem] gap-12 px-6 py-28 lg:grid-cols-12 lg:gap-0 lg:px-18"
    >
      <div className="flex flex-col justify-center gap-8 lg:sticky lg:top-0 lg:col-span-5 lg:row-start-1 lg:h-svh">
        <p className="text-xs font-medium tracking-[0.12em] text-body uppercase">03 / The GetVantor difference</p>
        <h2 id="difference-title" className="font-display text-4xl leading-tight text-heading lg:text-5xl">
          Designed around your business. Not another template.
        </h2>
        <blockquote className="max-w-prose border-l-2 border-brand-rose pl-6 font-display text-2xl leading-snug text-heading italic">
          The goal isn&apos;t to make your website look like everyone else&apos;s idea of premium. It&apos;s to create a
          digital presence that makes sense for your business.
        </blockquote>
      </div>

      <ol className="flex flex-col gap-8 lg:relative lg:z-10 lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:py-[20vh]">
        {principles.map((principle, index) => (
          <Reveal
            as="li"
            key={principle.title}
            y={48}
            className="flex min-h-[60dvh] flex-col justify-center gap-6 rounded-3xl border border-outline bg-surface/90 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl lg:sticky lg:top-24 lg:p-14"
          >
            <p className="font-display text-6xl leading-none text-transparent bg-brand-gradient bg-clip-text">
              0{index + 1}
            </p>
            <h3 className="font-display text-3xl leading-snug text-heading">{principle.title}</h3>
            <p className="max-w-prose text-lg leading-relaxed">{principle.body}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
