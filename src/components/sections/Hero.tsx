import type { CSSProperties } from "react";
import { HeroStage } from "@/components/HeroStage";
import { Button } from "@/components/ui/Button";
import { PREVIEW_HREF } from "@/lib/site";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const promises = ["Designed from scratch", "Built for every screen", "Preview before you pay"];

export function Hero() {
  return (
    <section className="surface on-cream relative overflow-hidden pt-16">
      <div className="wrap grid items-center gap-10 pb-14 pt-8 sm:pt-16 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-12 lg:gap-8 lg:pb-12 lg:pt-8">
        <div className="lg:col-span-6">
          <h1 className="display h1 rise" style={d(80)}>
            Websites that make a business look <em>as good as it is.</em>
          </h1>
          <p className="lede rise mt-6 max-w-[34rem]" style={d(220)}>
            GetVantor is a web studio for businesses and brands of every kind. We design and build each site from
            scratch, and you see it before you pay.
          </p>
          <div className="rise mt-7 grid gap-3 min-[420px]:flex min-[420px]:flex-wrap" style={d(340)}>
            <Button href={PREVIEW_HREF}>Get a free preview</Button>
            <Button href="/#process" variant="line">How it works</Button>
          </div>
          <ul className="rise mt-10 hidden flex-wrap sm:flex gap-x-7 gap-y-2 text-[15px]" style={d(460)}>
            {promises.map((p) => (
              <li key={p} className="flex items-center gap-2.5">
                <span aria-hidden className="size-1.5 rounded-full bg-lagoon" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="rise lg:col-span-6" style={d(300)}>
          <HeroStage />
          <p className="mt-4 text-center text-[13px] text-mute lg:text-right">
            Three of our concept sites. Fictional businesses, shown to demonstrate range.
          </p>
        </div>
      </div>
    </section>
  );
}
