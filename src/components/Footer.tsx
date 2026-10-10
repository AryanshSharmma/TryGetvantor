import { CtaButton } from "@/components/ui/CtaButton";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-outline pb-24">
      <section
        aria-labelledby="closing-title"
        className="mx-auto flex w-full max-w-[84rem] flex-col items-start gap-10 px-6 py-28 lg:flex-row lg:items-end lg:justify-between lg:px-18"
      >
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-[0.12em] text-body uppercase">07 / Start a conversation</p>
          <h2 id="closing-title" className="mt-5 font-display text-4xl leading-tight text-heading lg:text-6xl">
            Let&apos;s build something <em className="bg-brand-gradient bg-clip-text text-transparent">impossible to overlook.</em>
          </h2>
        </div>
        <CtaButton>Start your project</CtaButton>
      </section>

      <div className="mx-auto flex w-full max-w-[84rem] flex-col gap-6 border-t border-outline px-6 py-10 text-sm md:flex-row md:items-center md:justify-between lg:px-18">
        <p className="font-display text-xl text-heading">{site.name}</p>
        <p>Independent digital studio · Design × Development</p>
        <a
          href={`mailto:${site.email}`}
          className="font-medium text-heading underline underline-offset-4 transition-all duration-300 ease-in-out hover:text-brand-rose"
        >
          {site.email}
        </a>
        <p className="text-body">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
