import { Reveal } from "@/components/ui/Reveal";

const steps = [
  ["Conversation", "You tell us about the business, the customers and what the site must achieve. We tell you honestly whether we can help.", "A shared brief"],
  ["Strategy", "We decide what the site says, who it speaks to, and what visitors should do next.", "A clear plan"],
  ["Design", "We design your site from a blank page. Layout, type, colour, imagery and words.", "Your preview"],
  ["Development", "We build it by hand: fast, accessible and flawless on every screen.", "A working site"],
  ["Launch", "We test across devices, publish, and check every important path works.", "A live site"],
];

export function Process() {
  return (
    <section id="process" className="surface on-cream section">
      <div className="wrap">
        <Reveal className="max-w-3xl">
          <p className="label text-acc">How it works</p>
          <h2 className="display h2 mt-5">
            Five steps. <em>You decide before the build begins.</em>
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-x-6 gap-y-10 lg:grid-cols-5">
          {steps.map(([t, d, out], i) => (
            <Reveal as="li" key={t} delay={i * 70} className="relative">
              <div aria-hidden className="mb-6 flex items-center gap-3">
                <span className={`grid size-10 shrink-0 place-items-center rounded-full text-[15px] font-medium ${i === 2 ? "bg-sun text-hot-ink" : "bg-lagoon text-cream"}`}>{i + 1}</span>
                <span className="h-px flex-1 bg-rule lg:block" />
              </div>
              <h3 className="display h3">{t}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-mute">{d}</p>
              <p className="mt-4 text-[14px] font-medium text-acc">→ {out}</p>
              {i === 2 && (
                <p className="mt-5 rounded-xl bg-sun px-4 py-3 text-[14px] text-hot-ink leading-snug">
                  <b className="font-medium">Your decision point.</b> You&apos;ve paid nothing so far.
                </p>
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
