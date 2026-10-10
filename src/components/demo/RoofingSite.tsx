"use client";

import Link from "next/link";
import { useState, type CSSProperties, type FormEvent, type ReactNode } from "react";
import { RoofArt } from "@/components/mock/RoofingMock";
import { PREVIEW_HREF, roofingConceptBrand as b } from "@/lib/site";

const services = [
  ["Roof repair", "Leaks, missing shingles and failed flashing, fixed properly."],
  ["Roof replacement", "A full tear-off and new roof, quoted in writing and itemised."],
  ["Storm damage", "Inspection and photo documentation to support an insurance claim."],
  ["Inspections", "A clear report on your roof's condition, with photos."],
] as const;

const steps = [
  ["Request an estimate", "Three fields, under a minute."],
  ["We inspect", "We look at the roof and photograph any problems."],
  ["You get it in writing", "An itemised quote you can compare and keep."],
  ["Work is scheduled", "You pick a date that suits you."],
];

const faqs = [
  ["How much does a new roof cost?", "It depends on the size, pitch, materials and condition of the decking. We don't guess over the phone. After an inspection you get an itemised written estimate."],
  ["Do I need to be home for the inspection?", "Not for an exterior inspection. Tell us when you request the estimate and we'll arrange it around you."],
  ["Can you help with an insurance claim?", "For storm damage we document the roof with photos and a written report you can send to your insurer."],
  ["What happens after I send the form?", "We call you to confirm the address and book the inspection. Nothing is signed or charged at this stage."],
];

const notes = {
  header: "The header button stays on screen as the page scrolls, so the decision to enquire never depends on how far someone read.",
  hero: "Service, city and next step appear before any scrolling. Two routes sit side by side: a form for people comparing quotes, a phone number for people with an urgent leak.",
  trust: "Trust comes before the form, because 'can I rely on these people?' is the first question a homeowner asks. A real site would show a licence number, insurance details and genuine reviews here.",
  services: "Each card matches something a visitor is already searching for. Choosing one pre-fills the form, so their intent carries through instead of being asked twice.",
  process: "The biggest worry before submitting a form is what happens next. Showing the four steps, and that nothing is charged, lowers the cost of trying.",
  faq: "The questions that stop people enquiring are answered on the page, so they don't have to leave to look for answers.",
  form: "Name, phone and address are the minimum needed to book an inspection. Fewer fields means less effort at the moment of decision. The confirmation states exactly what happens next.",
  bar: "On phones, call and quote are pinned to the bottom of the screen where thumbs rest, so acting never means scrolling back up.",
};

function Note({ show, n, children }: { show: boolean; n: number; children: ReactNode }) {
  if (!show) return null;
  return (
    <aside className="mx-auto mb-8 flex w-full max-w-[1140px] gap-3 px-5 sm:px-8">
      <div className="flex w-full gap-4 rounded-[2px] border border-[#cd2a3e]/50 bg-[#0f3a2d] p-4 text-[#f3f0ea]">
        <span className="flex size-6 shrink-0 items-center justify-center rounded-[3px] bg-[#cd2a3e] text-xs font-semibold text-[#fff1e6]">{n}</span>
        <div>
          <p className="text-[11px] font-medium uppercase tracking-widest text-[#f6b0ba]">Why this converts</p>
          <p className="mt-1 text-[14px] leading-relaxed text-[#d8d5cf]">{children}</p>
        </div>
      </div>
    </aside>
  );
}

const input =
  "mt-1.5 block min-h-12 w-full rounded-lg border border-black/25 bg-white px-4 text-base text-[#1d1c1a] focus:border-[var(--brand)] focus:outline-none";

export function RoofingSite() {
  const [showNotes, setShowNotes] = useState(false);
  const [service, setService] = useState("Roof repair");
  const [sent, setSent] = useState(false);
  const wrap = "mx-auto w-full max-w-[1140px] px-5 sm:px-8";

  function choose(s: string) {
    setService(s);
    setSent(false);
  }
  function submit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div style={{ "--brand": b.primaryColor } as CSSProperties} className="min-h-screen bg-[#f7f4ee] pb-20 text-[#1d1c1a] md:pb-0">
      <div className="z-50 bg-[#0f3a2d] px-4 py-2.5 text-[13px] text-[#f3f0ea] md:sticky md:top-0 md:flex md:h-14 md:items-center md:py-0">
        <div className="mx-auto flex w-full max-w-[1140px] flex-wrap items-center justify-between gap-x-6 gap-y-2">
          <p>
            <b className="text-[#f6b0ba]">Concept demo.</b> {b.companyName} is a fictional business GetVantor invented to show its thinking. Not a client.
          </p>
          <button
            type="button"
            role="switch"
            aria-checked={showNotes}
            onClick={() => setShowNotes((v) => !v)}
            className="inline-flex min-h-9 items-center gap-2.5 rounded-[3px] border border-white/20 px-3.5 font-medium"
          >
            <span aria-hidden className={`relative h-4 w-7 rounded-[3px] transition-colors ${showNotes ? "bg-[#f6b0ba]" : "bg-white/25"}`}>
              <span className={`absolute top-0.5 size-3 rounded-[3px] bg-white transition-[left] ${showNotes ? "left-3.5" : "left-0.5"}`} />
            </span>
            Show conversion notes
          </button>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-black/10 bg-[#f7f4ee]/95 backdrop-blur md:top-14">
        <div className={`${wrap} flex items-center justify-between py-4`}>
          <b className="text-lg tracking-tight">{b.companyName}</b>
          <a href="#quote" className="rounded-[3px] bg-[var(--brand)] px-5 py-2.5 text-sm font-medium text-white">Free inspection</a>
        </div>
      </header>
      <div className="pt-6" />
      <Note show={showNotes} n={1}>{notes.header}</Note>

      <main>
        <section className={`${wrap} grid items-center gap-10 pb-16 pt-6 md:grid-cols-[1.1fr_1fr] md:pt-12`}>
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand)]">{b.city}, {b.state} roofing</p>
            <h1 className="text-[clamp(2.4rem,6.5vw,4.6rem)] font-semibold leading-[1] tracking-[-0.035em]">A roof you never have to think about.</h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-[#5c5a55]">
              Repairs, replacements and storm damage. Request a written estimate in under a minute.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#quote" className="inline-flex min-h-13 items-center justify-center rounded-[3px] bg-[var(--brand)] px-7 font-medium text-white">Get my free quote</a>
              <a href={`tel:${b.phone.replace(/\D/g, "")}`} className="inline-flex min-h-13 items-center justify-center rounded-[3px] border border-black/25 px-7 font-medium">Call {b.phone}</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl"><RoofArt color={b.primaryColor} className="block w-full" /></div>
        </section>
        <Note show={showNotes} n={2}>{notes.hero}</Note>

        <section className="border-y border-black/10 bg-white py-8">
          <ul className={`${wrap} grid gap-6 text-[15px] sm:grid-cols-3`}>
            {[
              ["Written, itemised estimates", "You see what each part of the job costs."],
              ["Photo inspection report", "Problems are shown, not just described."],
              ["No charge to enquire", "Nothing is signed at the first step."],
            ].map(([t, d]) => (
              <li key={t}><b className="block font-semibold">{t}</b><span className="text-[#5c5a55]">{d}</span></li>
            ))}
          </ul>
        </section>
        <div className="pt-8" />
        <Note show={showNotes} n={3}>{notes.trust}</Note>

        <section className="py-16">
          <div className={wrap}>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">What we do</h2>
            <ul className="mt-10 grid gap-px overflow-hidden rounded-[2px] border border-black/10 bg-black/10 sm:grid-cols-2">
              {services.map(([t, d]) => (
                <li key={t} className="flex flex-col items-start bg-white p-7">
                  <h3 className="text-xl font-medium">{t}</h3>
                  <p className="mt-2 flex-1 text-[#5c5a55]">{d}</p>
                  <a href="#quote" onClick={() => choose(t)} className="mt-5 inline-flex min-h-11 items-center text-[15px] font-medium text-[var(--brand)] underline underline-offset-4">
                    Get a quote for this →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <Note show={showNotes} n={4}>{notes.services}</Note>

        <section className="bg-white py-16">
          <div className={wrap}>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">From first request to finished roof</h2>
            <ol className="mt-10 grid gap-8 sm:grid-cols-4">
              {steps.map(([s, d], i) => (
                <li key={s}>
                  <p className="text-4xl font-light text-[var(--brand)]">0{i + 1}</p>
                  <p className="mt-3 font-medium">{s}</p>
                  <p className="mt-1 text-[15px] text-[#5c5a55]">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <div className="pt-8" />
        <Note show={showNotes} n={5}>{notes.process}</Note>

        <section className="pb-8 pt-8">
          <div className={`${wrap} grid gap-10 md:grid-cols-[1fr_1.4fr]`}>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Questions homeowners ask first</h2>
            <div className="divide-y divide-black/10 border-y border-black/10">
              {faqs.map(([q, a]) => (
                <details key={q} className="group py-5">
                  <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium">
                    {q}
                    <span aria-hidden className="text-2xl text-[var(--brand)] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-2 max-w-xl leading-relaxed text-[#5c5a55]">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <div className="pt-8" />
        <Note show={showNotes} n={6}>{notes.faq}</Note>

        <section id="quote" className="scroll-mt-32 bg-[#1d1c1a] py-20 text-[#f7f4ee]">
          <div className={`${wrap} grid gap-10 md:grid-cols-2`}>
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">Request your free estimate</h2>
              <p className="mt-4 max-w-sm text-white/70">Three fields. That&apos;s all we need to book your inspection.</p>
            </div>
            {sent ? (
              <div role="status" className="rounded-2xl bg-[#f7f4ee] p-7 text-[#1d1c1a]">
                <p className="text-2xl font-semibold tracking-tight">Request received.</p>
                <p className="mt-3 text-[#5c5a55]">
                  We&apos;ll call to confirm your address and book the inspection. Nothing is signed or charged at this stage.
                </p>
                <p className="mt-5 rounded-lg bg-black/5 p-3 text-sm">
                  Demo only. This form isn&apos;t connected, so nothing was sent or stored.
                </p>
                <button type="button" onClick={() => setSent(false)} className="mt-5 min-h-11 text-sm font-medium underline underline-offset-4">Try again</button>
              </div>
            ) : (
              <form onSubmit={submit} className="grid gap-4 rounded-2xl bg-[#f7f4ee] p-6 text-[#1d1c1a]">
                <label className="text-sm">Name<input required autoComplete="name" className={input} /></label>
                <label className="text-sm">Phone<input required type="tel" autoComplete="tel" className={input} /></label>
                <label className="text-sm">Property address<input required autoComplete="street-address" className={input} /></label>
                <label className="text-sm">What do you need?
                  <select value={service} onChange={(e) => setService(e.target.value)} className={input}>
                    {services.map(([t]) => <option key={t}>{t}</option>)}
                  </select>
                </label>
                <button type="submit" className="min-h-13 rounded-[3px] bg-[var(--brand)] font-medium text-white">Send request</button>
                <p className="text-xs text-[#5c5a55]">Demo only. Nothing you type here is sent anywhere.</p>
              </form>
            )}
          </div>
        </section>
        <div className="pt-8" />
        <Note show={showNotes} n={7}>{notes.form}</Note>
        {showNotes && <div className="md:hidden"><Note show n={8}>{notes.bar}</Note></div>}
      </main>

      <footer className="bg-[#0f3a2d] px-5 py-12 text-center text-[#f3f0ea]">
        <p className="text-sm text-[#a3a29e]">This concept was designed and built by GetVantor. Not a real business.</p>
        <p className="mx-auto mt-3 max-w-md text-lg">Want a website built around your own customers?</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href={PREVIEW_HREF} className="inline-flex min-h-12 items-center rounded-[3px] bg-[#cd2a3e] px-6 font-medium text-[#fff1e6]">Get a Free Preview</Link>
          <Link href="/" className="inline-flex min-h-12 items-center rounded-[3px] border border-white/20 px-6">Back to GetVantor</Link>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-black/10 bg-white p-3 md:hidden">
        <a href={`tel:${b.phone.replace(/\D/g, "")}`} className="inline-flex min-h-12 flex-1 items-center justify-center rounded-[3px] border border-black/25 font-medium">Call</a>
        <a href="#quote" className="inline-flex min-h-12 flex-[1.6] items-center justify-center rounded-[3px] bg-[var(--brand)] font-medium text-white">Free quote</a>
      </div>
    </div>
  );
}
