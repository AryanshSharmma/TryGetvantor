import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";

type Tier = {
  name: string;
  label: string;
  summary: string;
  price: string;
  features: string[];
  cta: string;
  flagship?: boolean;
};

const tiers: Tier[] = [
  {
    name: "The Core Build",
    label: "Standard web presence",
    summary: "A complete, responsive website with a considered identity and a clear structure.",
    price: "Fixed fee, quoted after your preview",
    features: [
      "Custom strategy and architecture",
      "Bespoke visual identity, up to 5 pages",
      "Fully responsive development",
      "Performance optimization and core SEO setup",
    ],
    cta: "Select core structure",
  },
  {
    name: "Dynamic Growth System",
    label: "Most popular",
    summary: "For businesses that need more pages, richer interaction, and a site they can grow with.",
    price: "Fixed fee, quoted after your preview",
    features: [
      "Everything in the Core Build",
      "Expanded layout system, up to 12 custom pages",
      "Custom micro-interactions and motion",
      "Dynamic CMS for posts, portfolios, and resources",
      "Custom contact system and CRM integration",
    ],
    cta: "Select growth system",
    flagship: true,
  },
  {
    name: "Generational Enterprise",
    label: "Custom quote only",
    summary: "Complex digital programs with advanced integrations and bespoke technical requirements.",
    price: "Tailored discovery and engagement",
    features: [
      "Unlimited scoped page architecture",
      "Custom interactive 3D WebGL motion",
      "Full technical API integrations",
      "Advanced custom stacks",
    ],
    cta: "Initiate discovery",
  },
];

export function RevenueTiers() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="mx-auto w-full max-w-[84rem] px-6 py-28 lg:px-18">
      <div className="max-w-3xl">
        <p className="text-xs font-medium tracking-[0.12em] text-body uppercase">05 / Pricing and tiers</p>
        <h2 id="pricing-title" className="mt-5 font-display text-4xl leading-tight text-heading lg:text-5xl">
          Transparent investment. Defined scopes.
        </h2>
        <p className="mt-6 max-w-prose text-lg leading-relaxed">
          We don&apos;t deal in hidden fees. Every project is scoped in detail before we write a line of code. Choose the
          structure that fits your current stage of growth.
        </p>
      </div>

      <ul className="mt-16 grid items-stretch gap-6 md:grid-cols-3">
        {tiers.map((tier, index) => (
          <Reveal as="li" key={tier.name} delay={index * 0.12} y={40} className={tier.flagship ? "md:-translate-y-6" : ""}>
            <article
              className={`flex h-full flex-col gap-8 rounded-3xl p-8 lg:p-10 ${
                tier.flagship
                  ? "glow-border"
                  : "border border-outline bg-surface/40 backdrop-blur-xl transition-all duration-300 ease-in-out hover:border-brand-violet"
              }`}
            >
              <header className="flex flex-col gap-3">
                <p className={`text-xs font-medium tracking-[0.12em] uppercase ${tier.flagship ? "text-brand-rose" : "text-body"}`}>
                  {tier.label}
                </p>
                <h3 className="font-display text-3xl leading-tight text-heading">{tier.name}</h3>
                <p className="leading-relaxed">{tier.summary}</p>
              </header>

              <p className="border-y border-outline py-4 text-sm text-heading">{tier.price}</p>

              <ul className="flex flex-1 flex-col gap-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-[0.95rem] leading-snug text-heading">
                    <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-rose" />
                    {feature}
                  </li>
                ))}
              </ul>

              <CtaButton className="w-full">{tier.cta}</CtaButton>
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
