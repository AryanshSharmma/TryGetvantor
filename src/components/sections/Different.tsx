import { Reveal } from "@/components/ui/Reveal";

const rows = [
  ["Starts from a template or theme", "Starts from a blank page"],
  ["You pay, then hope you like it", "You see a preview first"],
  ["Words are filler until you write them", "Copy is written for your business"],
  ["Designed to look nice", "Designed so people act: call, book, buy"],
  ["Same layout as your competitor", "Nothing shared with anyone else's site"],
];

export function Different() {
  return (
    <section id="different" className="surface on-cream section">
      <div className="wrap">
        <Reveal className="max-w-3xl">
          <p className="label text-acc">How we&apos;re different</p>
          <h2 className="display h2 mt-5">
            Not a template with your logo on it. <em>A site made for you.</em>
          </h2>
        </Reveal>

        <Reveal className="mt-14 overflow-hidden rounded-[20px] border border-rule">
          <div className="grid grid-cols-2 text-[13px] font-medium uppercase tracking-[0.1em]">
            <p className="px-5 py-4 text-mute sm:px-8">Ordinary web design</p>
            <p className="bg-lagoon px-5 py-4 text-cream sm:px-8">GetVantor</p>
          </div>
          {rows.map(([a, b]) => (
            <div key={b} className="grid grid-cols-2 border-t border-rule">
              <p className="px-5 py-5 text-mute line-through decoration-mute/40 sm:px-8 sm:py-6">{a}</p>
              <p className="bg-lagoon/[0.06] px-5 py-5 font-medium sm:px-8 sm:py-6">{b}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-8 max-w-2xl">
          <p className="lede">
            The difference isn&apos;t polish. It&apos;s the order of work: we understand the business first, design
            for what it needs, and show you the result before you commit.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
