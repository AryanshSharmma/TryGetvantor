import { Browser } from "@/components/mock/ConceptSites";
import { TemplateMock } from "@/components/mock/RoofingMock";
import { Reveal } from "@/components/ui/Reveal";

const problems = [
  ["It's the first thing people see.", "Before they call, visit or buy, they look you up. The website decides whether they carry on."],
  ["It's the last thing anyone fixes.", "Most sites are built once, in a hurry, from a template, by whoever was cheapest."],
  ["So good businesses look ordinary.", "The work is excellent. The website says nothing about it."],
];

export function Why() {
  return (
    <section id="why" className="surface on-cream section">
      <div className="wrap grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-6">
          <p className="label text-acc">Why we exist</p>
          <h2 className="display h2 mt-5 max-w-[16ch]">
            Most businesses are <em>better</em> than their websites.
          </h2>
          <p className="lede mt-6 max-w-lg">
            We exist to close that gap. A business should look online the way it is in person: capable, considered
            and worth the call.
          </p>
          <ol className="mt-10 border-t border-rule">
            {problems.map(([t, d]) => (
              <li key={t} className="grid gap-1 border-b border-rule py-5 sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-8">
                <p className="font-medium">{t}</p>
                <p className="text-mute">{d}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-6">
          <div className="relative">
            <div aria-hidden className="absolute -inset-4 -z-0 rounded-[28px] bg-sage sm:-inset-8" />
            <Browser className="relative z-10 [&_*]:saturate-[0.55]" url="a typical template site">
              <TemplateMock />
            </Browser>
          </div>
          <p className="mt-8 text-center text-[13px] text-mute sm:mt-12 lg:text-right">
            What most websites look like. A composite of common template patterns, not a real site.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
