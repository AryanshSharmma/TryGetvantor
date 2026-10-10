import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PREVIEW_HREF } from "@/lib/site";

const ladder = [
  ["1", "The preview", "Free", "Tell us about the business. We prepare a preview of your site. No payment, no obligation."],
  ["2", "The quote", "In writing", "If you like it, you get one clear price for the whole project. No hourly billing, no surprises."],
  ["3", "The build", "Fixed price", "You approve the quote, we build and launch. The price doesn't move."],
];

const drivers = ["Number of pages", "Custom features: booking, shop, member areas", "Writing and content", "Integrations with tools you already use"];

export function Pricing() {
  return (
    <section id="pricing" className="surface on-sun section">
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-5">
          <p className="label text-acc">Pricing</p>
          <h2 className="display h2 mt-5">
            Priced per project. <em>Quoted after you&apos;ve seen the site.</em>
          </h2>
          <p className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-fg/85">
            Every business needs something different, so we don&apos;t publish a price list. We&apos;d rather quote
            the exact job than guess. You see the preview first, then the number.
          </p>
          <div className="mt-8">
            <Button href={PREVIEW_HREF}>Start with the free preview</Button>
          </div>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-6 lg:col-start-7">
          <ol className="border-t border-fg/30">
            {ladder.map(([n, t, tag, d]) => (
              <li key={t} className="grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 border-b border-fg/30 py-6">
                <span className="display text-3xl text-fg">{n}</span>
                <div>
                  <p className="display h3">{t}</p>
                  <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-fg/80">{d}</p>
                </div>
                <span className="rounded-full bg-fg px-3.5 py-1.5 text-[13px] font-medium text-bg">{tag}</span>
              </li>
            ))}
          </ol>
          <p className="label mt-8 text-fg/70">What shapes the price</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {drivers.map((x) => (
              <li key={x} className="rounded-full border border-fg/40 px-4 py-2 text-[14px]">{x}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
