"use client";

import {
  createContext,
  useActionState,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import { X } from "lucide-react";
import { submitLead, type LeadState } from "@/app/actions/submit-lead";
import { ShinyButton } from "@/components/ui/shiny-button";
import { site } from "@/lib/site";

type ContactDrawerValue = { open: () => void };

export const ContactDrawerContext = createContext<ContactDrawerValue | null>(null);

const initialState: LeadState = { status: "idle", message: "" };

const fieldClass =
  "mt-2 w-full rounded-lg border border-outline bg-canvas px-4 py-3 text-base text-heading placeholder:text-body/60 transition-all duration-300 ease-in-out focus:border-brand-violet focus:outline-none focus:ring-1 focus:ring-brand-violet";

export function ContactDrawerProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [value] = useState<ContactDrawerValue>(() => ({
    open: () => dialogRef.current?.showModal(),
  }));

  return (
    <ContactDrawerContext.Provider value={value}>
      {children}
      <ContactDrawer ref={dialogRef} />
    </ContactDrawerContext.Provider>
  );
}

function ContactDrawer({ ref }: { ref: RefObject<HTMLDialogElement | null> }) {
  const [state, formAction, pending] = useActionState(submitLead, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state.status]);

  return (
    <dialog
      ref={ref}
      aria-labelledby="contact-title"
      className="m-0 ml-auto h-dvh max-h-none w-full max-w-md border-l border-outline bg-surface p-0 text-body backdrop:bg-black/60 backdrop:backdrop-blur-sm open:flex"
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
    >
      <div className="flex w-full flex-col gap-8 overflow-y-auto p-8">
        <header className="flex items-start justify-between gap-4">
          <div>
            <h2 id="contact-title" className="font-display text-3xl text-heading">
              Tell us what you&apos;re building
            </h2>
            <p className="mt-3 text-base leading-relaxed">
              Tell us about the business and what the site needs to do. We&apos;ll reply with next steps.
            </p>
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={() => ref.current?.close()}
            className="rounded-full border border-outline p-2 text-heading transition-all duration-300 ease-in-out hover:border-brand-rose hover:text-brand-rose"
          >
            <X aria-hidden="true" className="size-5" />
          </button>
        </header>

        <form ref={formRef} action={formAction} className="flex flex-col gap-6">
          <label className="text-sm font-medium text-heading">
            Full name
            <input name="name" required autoComplete="name" maxLength={120} className={fieldClass} />
          </label>
          <label className="text-sm font-medium text-heading">
            Business email
            <input name="email" type="email" required autoComplete="email" maxLength={254} className={fieldClass} />
          </label>
          <label className="text-sm font-medium text-heading">
            Business or brand
            <input name="business" required autoComplete="organization" maxLength={160} className={fieldClass} />
          </label>
          <label className="text-sm font-medium text-heading">
            What should the website do?
            <textarea name="message" required rows={5} maxLength={4000} className={`${fieldClass} resize-none`} />
          </label>

          {/* Honeypot: hidden from people, filled in by most bots. */}
          <div aria-hidden="true" className="sr-only">
            <label>
              Leave this field empty
              <input name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <div className="flex flex-col gap-4">
            <ShinyButton className={pending ? "opacity-60" : ""}>
              {pending ? "Sending..." : "Send my project brief"}
            </ShinyButton>
            <p role="status" aria-live="polite" className={`text-sm leading-relaxed ${state.status === "error" ? "text-brand-rose" : ""}`}>
              {state.message || `Or email us directly at ${site.email}.`}
            </p>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export function useContactDrawer() {
  return useContext(ContactDrawerContext);
}
