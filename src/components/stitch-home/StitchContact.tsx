"use client";

import { RainbowButton } from "@/components/ui/rainbow-button";
import { stitchRainbow } from "./rainbow";

/* eslint-disable react/no-unescaped-entities */
import { useActionState } from "react";
import { submitLead, type LeadState } from "@/app/actions/submit-lead";

const initialState: LeadState = { status: "idle", message: "" };

export function StitchContact() {
  const [state, formAction, pending] = useActionState(submitLead, initialState);
  return (
    <section className="relative w-full py-st-space-xl px-st-margin lg:px-st-margin-desktop overflow-hidden border-t border-st-outline-variant/30 bg-[#0B0F14]" id="contact-drawer">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-st-secondary-container/15 rounded-[0.75rem] blur-[170px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[500px] bg-st-tertiary-container/10 rounded-[0.75rem] blur-[160px] pointer-events-none"></div>
      <div className="relative max-w-7xl mx-auto flex flex-col z-10">
        <div className="relative w-full rounded-2xl bg-[#0D0E12]/90 backdrop-blur-2xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.65)] p-8 sm:p-12 lg:p-16 overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[1px] bg-linear-to-r from-transparent via-[#8B5CF6]/60 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-[1px] bg-linear-to-r from-transparent via-[#FFB8A7]/40 to-transparent"></div>
          <div className="absolute -top-24 right-1/4 w-80 h-80 bg-[#8B5CF6]/15 rounded-[0.75rem] blur-3xl pointer-events-none"></div>
          <div className="flex flex-col items-start max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-[0.75rem] bg-[#181C21]/80 backdrop-blur-md mb-6 border border-white/10 shadow-md">
              <span className="w-2 h-2 rounded-[0.75rem] bg-[#8B5CF6] animate-pulse"></span>
              <span className="font-st-label-sm text-st-label-sm uppercase tracking-[0.18em] text-[#E0E2EA]">
                07 / INITIATION · DIRECT ENGAGEMENT
              </span>
            </div>
            <h2 className="font-st-headline-lg text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.08] text-[#E0E2EA] tracking-tight mb-5">
              Let's build something
              {" "}
              <span className="bg-linear-to-r from-[#8B5CF6] via-[#CEBDFF] to-[#FFB8A7] bg-clip-text text-transparent italic">
                impossible to overlook.
              </span>
            </h2>
            <p className="font-st-body-lg text-st-body-lg text-[#CBC3D7] leading-relaxed">
              Ready to elevate your digital presence? Tell us about your project, your timeline, and what you need your website to accomplish.
            </p>
          </div>
          <form action={formAction} className="w-full flex flex-col gap-6">
            <input type="hidden" name="business" value="Homepage inquiry" />
            <div aria-hidden="true" className="sr-only">
              <label>
                Leave this field empty
                <input name="website" tabIndex={-1} autoComplete="off" />
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-st-label-sm text-st-label-sm uppercase tracking-[0.14em] text-[#CBC3D7]" htmlFor="contact-name">
                  Full Name
                </label>
                <input className="w-full px-5 py-4 rounded-[0.5rem] bg-[#0B0F14]/90 border border-white/10 text-st-on-surface placeholder:text-st-outline text-st-body-md focus:outline-hidden focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all" id="contact-name" name="name" placeholder="Alexander Wright" required type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                  <label className="font-st-label-sm text-st-label-sm uppercase tracking-[0.14em] text-[#CBC3D7]" htmlFor="contact-email">
                    Business Email
                  </label>
                  <span className="font-st-label-sm text-[10px] uppercase tracking-[0.12em] px-2 py-0.5 rounded-[0.125rem] bg-[#1C2025] border border-white/10 text-[#FFB8A7]">
                    Inbound Target: aryansh@trygetvantor.com
                  </span>
                </div>
                <input className="w-full px-5 py-4 rounded-[0.5rem] bg-[#0B0F14]/90 border border-white/10 text-st-on-surface placeholder:text-st-outline text-st-body-md focus:outline-hidden focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all" id="contact-email" name="email" placeholder="alexander@domain.com" required type="email" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-st-label-sm text-st-label-sm uppercase tracking-[0.14em] text-[#CBC3D7]" htmlFor="contact-scope">
                Project Scope Overview
              </label>
              <textarea className="w-full min-h-[140px] px-5 py-4 rounded-[0.5rem] bg-[#0B0F14]/90 border border-white/10 text-st-on-surface placeholder:text-st-outline text-st-body-md focus:outline-hidden focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all resize-y" id="contact-scope" name="message" placeholder="Project Scope Overview — describe your vision, scope, and target launch window..." required />
            </div>
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
              <RainbowButton className={stitchRainbow} type="submit" disabled={pending}>
                <span className="text-white font-bold">
                  Submit Project Brief →
                </span>
              </RainbowButton>
              <div className="flex items-center gap-2.5 text-[#CBC3D7]/80 font-st-label-sm text-st-label-sm">
                <span className="w-2 h-2 rounded-[0.75rem] bg-[#8B5CF6]"></span>
                <span className="uppercase tracking-[0.12em]">
                  Routed to Principal Dossier Desk
                </span>
              </div>
            </div>
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[#CBC3D7] font-st-body-sm text-[12px]">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#8B5CF6] text-[16px]">
                  schedule
                </span>
                Direct Studio Principal Review within 24–48 Hours
              </span>
              <span className="text-white/20 hidden sm:inline">
                ·
              </span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#8B5CF6] text-[16px]">
                  verified
                </span>
                Fixed-Scope Guarantee
              </span>
              <span className="text-white/20 hidden sm:inline">
                ·
              </span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#FFB8A7] text-[16px]">
                  lock
                </span>
                Mutual NDA on Request
              </span>
            </div>
            <p role="status" aria-live="polite" className={`font-st-body-sm text-st-body-sm ${state.status === "error" ? "text-st-error" : "text-st-on-surface-variant"}`}>
              {state.message}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
