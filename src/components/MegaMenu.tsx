"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CtaButton } from "@/components/ui/CtaButton";
import { nav, site } from "@/lib/site";

const linkClass =
  "relative rounded-full px-4 py-2 text-sm text-body transition-all duration-300 ease-in-out hover:text-heading after:absolute after:inset-x-4 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-brand-gradient after:transition-all after:duration-300 after:ease-in-out hover:after:scale-x-100 focus-visible:text-heading focus-visible:after:scale-x-100";

export function MegaMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      triggerRef.current?.focus();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        aria-label="Primary"
        className="pointer-events-auto relative flex w-full max-w-5xl items-center gap-3 rounded-full border border-outline bg-surface/40 py-2 pr-2 pl-6 backdrop-blur-xl transition-all duration-300 ease-in-out"
      >
        <a href="#top" aria-label={`${site.name} home`} className="font-display text-xl tracking-[0.04em] text-heading">
          {site.name}
        </a>

        <ul className="ml-auto hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className={linkClass}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2 md:ml-2">
          <ThemeToggle />
          <button
            ref={triggerRef}
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-outline bg-surface/40 text-heading backdrop-blur-xl transition-all duration-300 ease-in-out hover:border-brand-violet md:hidden"
          >
            {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
          </button>
        </div>

        <div
          id={panelId}
          className={`absolute inset-x-0 top-full mt-3 origin-top rounded-3xl border border-outline bg-canvas p-6 shadow-xl transition-all duration-300 ease-in-out md:hidden ${
            open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
          }`}
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-outline last:border-b-0">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between gap-4 py-4 transition-all duration-300 ease-in-out hover:text-brand-rose"
                >
                  <span className="font-display text-2xl text-heading">{item.label}</span>
                  <span className="text-sm text-body">{item.description}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <CtaButton>Discuss Your Project →</CtaButton>
          </div>
        </div>
      </nav>
    </header>
  );
}
