import Image from "next/image";
import { ParallaxFrame } from "@/components/motion/ParallaxFrame";
import { Reveal } from "@/components/motion/Reveal";

type Project = {
  name: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  span: string;
  aspect: string;
};

const projects: Project[] = [
  {
    name: "Aether Real Estate",
    category: "Digital flagship concept",
    description:
      "An exploration of refined property presentation, architectural imagery, and a considered digital experience for a premium real estate brand.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    alt: "Modern glass and concrete residential tower against a clear sky",
    span: "md:col-span-7",
    aspect: "aspect-[4/3]",
  },
  {
    name: "Kinetics Capital",
    category: "Institutional website concept",
    description:
      "An exploration of disciplined typography, clear information hierarchy, and a confident digital presence for a financial-services brand.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80",
    alt: "Bright open-plan office with long desks and clean lines",
    span: "md:col-span-5",
    aspect: "aspect-[4/5]",
  },
  {
    name: "Verdant Architecture",
    category: "Portfolio website concept",
    description:
      "An exploration of architectural storytelling, material-led imagery, and an editorial layout for a specialized architecture practice.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
    alt: "Contemporary house with timber cladding and large windows",
    span: "md:col-span-5",
    aspect: "aspect-[4/5]",
  },
  {
    name: "Stratos Automation",
    category: "Product website concept",
    description:
      "An exploration of clear product storytelling, technical credibility, and a restrained interface for an automation software company.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",
    alt: "Rows of server racks lit in cool blue light",
    span: "md:col-span-7",
    aspect: "aspect-[4/3]",
  },
];

export function PortfolioGrid() {
  return (
    <section id="work" aria-labelledby="work-title" className="mx-auto w-full max-w-[84rem] px-6 py-28 lg:px-18">
      <div className="max-w-3xl">
        <p className="text-xs font-medium tracking-[0.12em] text-body uppercase">04 / Selected concepts</p>
        <h2 id="work-title" className="mt-5 font-display text-4xl leading-tight text-heading lg:text-5xl">
          Different businesses. Different visual thinking.
        </h2>
        <p className="mt-6 max-w-prose text-lg leading-relaxed">
          A strong website doesn&apos;t follow one visual formula. Its design should grow from the business, the
          audience, and the story it needs to tell.
        </p>
      </div>

      <ul className="mt-16 grid gap-6 md:grid-cols-12">
        {projects.map((project, index) => (
          <Reveal
            as="li"
            key={project.name}
            delay={(index % 2) * 0.12}
            className={`group flex flex-col overflow-hidden rounded-3xl border border-outline bg-surface/40 backdrop-blur-xl transition-all duration-300 ease-in-out hover:border-brand-violet ${project.span}`}
          >
            <ParallaxFrame className={`relative w-full overflow-hidden ${project.aspect}`}>
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </ParallaxFrame>
            <div className="flex flex-1 flex-col gap-4 p-8">
              <p className="text-xs font-medium tracking-[0.12em] text-body uppercase">{project.category}</p>
              <h3 className="font-display text-3xl text-heading">{project.name}</h3>
              <p className="max-w-prose leading-relaxed">{project.description}</p>
              <p className="mt-auto pt-4 text-xs tracking-[0.08em] text-body uppercase">Concept project, not client work</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
