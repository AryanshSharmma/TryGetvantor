import Link from "next/link";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Browser, concepts } from "@/components/mock/ConceptSites";
import { Arrow } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { DEMO_HREF } from "@/lib/site";

const story = [
  ["What was wrong", "It looked like every other roofing site. Eight menu items, a stock-photo carousel, a call button in four places. Nothing said why this company, or what to do first."],
  ["What changed", "One idea per screen. A headline that says what the business does for a person. One primary action, a phone number for the urgent case, and nothing competing with either."],
  ["Why it matters", "A homeowner with a leaking ceiling doesn't browse. They decide in seconds whether you look like someone who will turn up. Clarity reads as competence."],
  ["How it feels", "Quiet, warm, certain. A trade that is confident in its work and has no need to shout about it."],
];

export function Work() {
  return (
    <section id="work" className="surface on-lagoon section">
      <div className="wrap">
        <Reveal className="max-w-2xl">
          <p className="label text-acc">The work</p>
          <h2 className="display h2 mt-5">
            Four businesses that don&apos;t exist, to show what <em>any</em> business could be.
          </h2>
          <p className="lede mt-6">
            No two look alike, because no two businesses are alike. Each is a concept we made to show range. None
            is a client.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2">
          {concepts.map(({ key, name, kind, Site }, i) => (
            <Reveal key={key} delay={(i % 2) * 100}>
              <Browser url={`${key}.example · concept`}>
                <Site />
              </Browser>
              <p className="mt-4 flex items-baseline justify-between gap-4 text-[15px]">
                <span className="font-medium">{name}</span>
                <span className="text-mute">{kind} · concept</span>
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 border-t border-rule pt-20 sm:mt-32 sm:pt-28">
          <Reveal className="max-w-3xl">
            <p className="label text-acc">Case study · concept</p>
            <h3 className="display h2 mt-5">
              A roofing company that looked like <em>every other</em> roofing company.
            </h3>
          </Reveal>

          <Reveal className="mt-12">
            <BeforeAfter />
          </Reveal>

          <dl className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {story.map(([t, d], i) => (
              <Reveal key={t} delay={i * 80} className="border-t border-rule pt-5">
                <dt className="label text-acc">{t}</dt>
                <dd className="mt-4 text-[1rem] leading-relaxed text-fg/90">{d}</dd>
              </Reveal>
            ))}
          </dl>

          <div className="mt-12 flex flex-col justify-between gap-6 border-t border-rule pt-8 sm:flex-row sm:items-center">
            <p className="max-w-md text-sm leading-relaxed text-mute">
              Summit Ridge Roofing is a fictional company we invented to show our thinking. It is not a client, and
              nothing on it is a real result.
            </p>
            <Link href={DEMO_HREF} className="group inline-flex items-center gap-3">
              <span className="ul display text-[1.5rem]">Open the full concept</span>
              <Arrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
