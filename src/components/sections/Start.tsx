import { Composition3DLazy } from "@/components/Composition3DLazy";
import { PreviewForm } from "@/components/PreviewForm";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

function Body({ page, scene }: { page?: boolean; scene?: boolean }) {
  const H = page ? "h1" : "h2";
  return (
    <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
      <Reveal className="lg:col-span-6">
        <p className="label text-acc">Start here</p>
        <H className="display h1 mt-5 max-w-[14ch]">
          Show us the business. <em>We&apos;ll show you the site.</em>
        </H>
        <p className="lede mt-6 max-w-sm">
          Send a few details. We prepare a preview built for your business. Nothing to pay at this stage.
        </p>
        <p className="mt-8 text-mute">
          Or write directly:{" "}
          <a href={`mailto:${site.email}`} className="ul text-fg">{site.email}</a>
        </p>
        {scene && (
          <div className="mt-12 max-w-[34rem]">
            <Composition3DLazy />
          </div>
        )}
      </Reveal>
      <Reveal delay={100} className="lg:col-span-5 lg:col-start-8">
        <PreviewForm />
      </Reveal>
    </div>
  );
}

export function Start() {
  return (
    <section id="start" className="surface on-lagoon section">
      <div className="wrap"><Body scene /></div>
    </section>
  );
}

export function StartPage() {
  return (
    <section className="surface on-lagoon min-h-[100svh] pb-28 pt-36 sm:pt-44">
      <div className="wrap"><Body page /></div>
    </section>
  );
}
