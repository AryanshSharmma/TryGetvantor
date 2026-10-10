"use client";

import { useContext, useState, type ReactNode } from "react";
import { Activity, FileText, Mail } from "lucide-react";
import { ContactDrawerContext } from "@/components/ContactDrawer";
import { site } from "@/lib/site";

const itemClass =
  "group relative flex size-12 items-center justify-center rounded-full text-body transition-all duration-300 ease-in-out hover:bg-heading/5 hover:text-heading focus-visible:text-heading focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-violet";

const tipClass =
  "pointer-events-none absolute bottom-full mb-3 translate-y-1 rounded-full border border-outline bg-canvas px-3 py-1.5 text-xs whitespace-nowrap text-heading opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100";

function Tip({ children }: { children: ReactNode }) {
  return (
    <span aria-hidden="true" className={tipClass}>
      {children}
    </span>
  );
}

export function FloatingDock() {
  const drawer = useContext(ContactDrawerContext);
  const [status, setStatus] = useState("");
  const [checking, setChecking] = useState(false);

  async function checkStatus() {
    setChecking(true);
    setStatus("Checking site status...");
    const started = performance.now();
    try {
      const response = await fetch("/robots.txt", { method: "HEAD", cache: "no-store" });
      const ms = Math.round(performance.now() - started);
      setStatus(response.ok ? `Site is responding (${ms} ms).` : `Site returned an error (${response.status}).`);
    } catch {
      setStatus("Could not reach the site. Check your connection.");
    } finally {
      setChecking(false);
    }
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex flex-col items-center gap-2 px-4">
      <p
        role="status"
        aria-live="polite"
        className={`rounded-full border border-outline bg-canvas px-4 py-1.5 text-xs text-heading transition-all duration-300 ease-in-out ${
          status ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
        }`}
      >
        {status}
      </p>
      <nav
        aria-label="Quick actions"
        className="pointer-events-auto flex items-center gap-1 rounded-full border border-outline bg-surface/40 p-1.5 backdrop-blur-xl"
      >
        <a href={`mailto:${site.email}`} aria-label="Direct contact by email" className={itemClass}>
          <Mail aria-hidden="true" className="size-5" />
          <Tip>Direct contact</Tip>
        </a>
        <button type="button" aria-label="Request a project brief" onClick={() => drawer?.open()} className={itemClass}>
          <FileText aria-hidden="true" className="size-5" />
          <Tip>Request project brief</Tip>
        </button>
        <button
          type="button"
          aria-label="Check live system status"
          aria-busy={checking}
          onClick={checkStatus}
          className={itemClass}
        >
          <Activity aria-hidden="true" className="size-5" />
          <Tip>System status</Tip>
        </button>
      </nav>
    </div>
  );
}
