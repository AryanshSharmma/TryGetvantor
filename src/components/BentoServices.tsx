import { Code2, Compass, PenTool, Rocket, Smartphone, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SpotlightCard } from "@/components/motion/SpotlightCard";

type Service = {
  icon: LucideIcon;
  tag: string;
  title: string;
  body: string;
  span: string;
};

const services: Service[] = [
  {
    icon: Compass,
    tag: "Architecture & IA",
    title: "A clear plan for your website.",
    body: "We organize your pages, information, and key messages so visitors can understand your business without having to work for it.",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    icon: PenTool,
    tag: "Visual design",
    title: "A digital identity with intention.",
    body: "We develop a distinctive visual direction using typography, color, imagery, layout, and interaction, so the site feels considered rather than interchangeable.",
    span: "",
  },
  {
    icon: Code2,
    tag: "Engineering",
    title: "Design brought to life.",
    body: "We turn the approved design into a working website, with responsive layouts and the agreed functionality built in.",
    span: "",
  },
  {
    icon: Smartphone,
    tag: "Adaptive viewport",
    title: "Considered across screen sizes.",
    body: "Your site stays clear, usable, and visually coherent on desktop, tablet, and mobile.",
    span: "",
  },
  {
    icon: Rocket,
    tag: "Deployment QA",
    title: "Ready for the next step.",
    body: "We test the agreed functionality, review responsive behavior, and prepare the site for launch within the project scope.",
    span: "md:col-span-2",
  },
];

export function BentoServices() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="mx-auto w-full max-w-[84rem] px-6 py-28 lg:px-18"
    >
      <div className="max-w-3xl">
        <p className="text-xs font-medium tracking-[0.12em] text-body uppercase">02 / What we do</p>
        <h2 id="services-title" className="mt-5 font-display text-4xl leading-tight text-heading lg:text-5xl">
          Your website should do more than exist.
        </h2>
      </div>

      <ul className="mt-16 grid gap-6 md:grid-cols-3 md:auto-rows-fr">
        {services.map(({ icon: Icon, tag, title, body, span }, index) => (
          <Reveal as="li" key={title} delay={index * 0.08} className={span}>
            <SpotlightCard className="group flex h-full flex-col gap-6 rounded-3xl border border-outline bg-surface/40 p-8 backdrop-blur-xl hover:border-brand-violet lg:p-10">
              <span className="relative inline-flex size-12 items-center justify-center rounded-full border border-outline text-heading transition-all duration-300 ease-in-out group-hover:border-transparent group-hover:bg-brand-gradient group-hover:text-white">
                <Icon aria-hidden="true" className="size-5" />
              </span>
              <p className="relative text-xs font-medium tracking-[0.12em] text-body uppercase">{tag}</p>
              <h3 className="relative font-display text-2xl leading-snug text-heading lg:text-3xl">{title}</h3>
              <p className="relative max-w-prose leading-relaxed">{body}</p>
            </SpotlightCard>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
