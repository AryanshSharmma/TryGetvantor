import { AdvisorySite, Browser } from "@/components/mock/ConceptSites";
import { Reveal } from "@/components/ui/Reveal";

const parts = [
  ["Strategy", "What the site must say, who it speaks to, and what visitors should do next."],
  ["Design", "Every page designed from a blank canvas: layout, type, colour, imagery and the words."],
  ["Development", "Hand-built, fast, accessible and flawless on phones, tablets and desktops."],
  ["Launch", "Tested across devices and published. Your site goes live and works."],
];

export function What() {
  return (
    <section id="what" className="surface on-sage section">
      <div className="wrap grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
        <Reveal delay={100} className="order-2 lg:order-1 lg:col-span-6">
          <Browser url="marlowadvisory.example · concept">
            <AdvisorySite />
          </Browser>
          <p className="mt-4 text-[13px] text-mute">A fictional advisory firm. Concept, not a client.</p>
        </Reveal>

        <Reveal className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
          <p className="label text-acc">What we sell</p>
          <h2 className="display h2 mt-5 max-w-[17ch]">
            One thing, done properly: <em>your website.</em>
          </h2>
          <p className="lede mt-6 max-w-lg">
            A complete, custom-designed website for your business or brand, from the first conversation to launch.
            Any kind of business. Not a template, not a subscription, not a page builder.
          </p>
          <dl className="mt-10 border-t border-rule">
            {parts.map(([t, d]) => (
              <div key={t} className="grid gap-1 border-b border-rule py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <dt className="font-medium">{t}</dt>
                <dd className="text-mute">{d}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
