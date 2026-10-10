"use client";

import { useState, type FormEvent } from "react";
import { Arrow } from "@/components/ui/Button";
import { cta, site } from "@/lib/site";

const field =
  "mt-1 block min-h-12 w-full border-0 border-b border-fg/30 bg-transparent px-0 text-lg normal-case tracking-normal text-fg placeholder:text-mute/60 transition-colors focus:border-acc focus:outline-none";
const label = "label block text-mute";

/**
 * Submitting opens the visitor's email app with the details pre-filled and
 * addressed to us. There is no server-side storage, and the copy says so.
 */
export function PreviewForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const body = [
      `Name: ${d.name}`,
      `Business: ${d.business}`,
      `Email: ${d.email}`,
      `Phone: ${d.phone || "—"}`,
      "",
      d.notes || "",
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Free website preview request — ${d.business}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-7">
      <label className={label}>Your name
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className={label}>Business
        <input name="business" required autoComplete="organization" className={field} />
      </label>
      <div className="grid gap-7 sm:grid-cols-2">
        <label className={label}>Email
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
        <label className={label}>Phone <span className="opacity-60">(optional)</span>
          <input name="phone" type="tel" autoComplete="tel" className={field} />
        </label>
      </div>
      <label className={label}>Current website, or anything we should know
        <textarea name="notes" rows={3} className={`${field} resize-none py-2`} />
      </label>
      <button
        type="submit"
        className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-btn-bg px-8 text-base font-medium text-btn-fg transition-[background-color,color,transform] duration-300 hover:bg-fg hover:text-bg active:scale-[0.98] sm:w-fit"
      >
        {cta.submit}
        <Arrow />
      </button>
      <p role="status" className="text-sm leading-relaxed text-mute">
        {sent
          ? `Your email app should now open with these details filled in. Press send and we'll reply with next steps. If nothing opened, write to ${site.email}.`
          : "Submitting opens an email to us with these details pre-filled. Press send in your email app and we'll take it from there."}
      </p>
    </form>
  );
}
