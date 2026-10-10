import { Reveal } from "@/components/ui/Reveal";

const results = [
  "Visitors understand what you do within seconds.",
  "Your site looks as good as the work behind it.",
  "It's easy to get in touch, book or buy.",
];

const included = [
  "A custom-designed website",
  "Copy written for your business",
  "Mobile-first, fast on every device",
  "Clear calls to action on every page",
  "Secure deployment and launch",
  "Basic analytics, so you can see what happens",
];

export function Outcome() {
  return (
    <section id="outcome" className="surface on-sage section">
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-6">
          <p className="label text-acc">What you walk away with</p>
          <h2 className="display h2 mt-5 max-w-[15ch]">
            A website that <em>works as hard</em> as you do.
          </h2>
          <ul className="mt-10 space-y-5">
            {results.map((r) => (
              <li key={r} className="display flex gap-4 text-[clamp(1.25rem,2vw,1.6rem)] leading-snug">
                <span aria-hidden className="mt-[0.55em] size-2 shrink-0 rounded-full bg-lagoon" />
                {r}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-5 lg:col-start-8">
          <div className="rounded-[20px] bg-cream p-7 sm:p-9">
            <p className="label text-acc">Included in every build</p>
            <ul className="mt-5 divide-y divide-rule">
              {included.map((i) => (
                <li key={i} className="flex items-center gap-3 py-3.5">
                  <svg aria-hidden width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 text-lagoon"><path d="m3 9.5 4 4 8-9" stroke="currentColor" strokeWidth="1.6" /></svg>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
