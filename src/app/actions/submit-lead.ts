"use server";

import { site } from "@/lib/site";

export type LeadState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const LIMITS = { name: 120, email: 254, business: 160, message: 4000 } as const;

function singleLine(value: FormDataEntryValue | null, max: number) {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001f\u007f]+/g, " ").trim().slice(0, max);
}

function multiLine(value: FormDataEntryValue | null, max: number) {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]+/g, "").trim().slice(0, max);
}

export async function submitLead(_previous: LeadState, formData: FormData): Promise<LeadState> {
  if (formData.get("website")) {
    return { status: "success", message: "Thanks. We've received your brief and will reply soon." };
  }

  const name = singleLine(formData.get("name"), LIMITS.name);
  const email = singleLine(formData.get("email"), LIMITS.email);
  const business = singleLine(formData.get("business"), LIMITS.business);
  const message = multiLine(formData.get("message"), LIMITS.message);

  if (!name || !business || !message || !EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Please check the highlighted details and try again." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      status: "error",
      message: `Sending isn't configured on this server yet. Please email ${site.email} directly.`,
    };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.LEAD_FROM_EMAIL ?? `${site.name} <onboarding@resend.dev>`,
        to: [site.email],
        reply_to: email,
        subject: `New project brief: ${business}`,
        text: [`Name: ${name}`, `Email: ${email}`, `Business: ${business}`, "", message].join("\n"),
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      console.error("Lead delivery failed", response.status);
      return { status: "error", message: `We couldn't send that just now. Please email ${site.email} directly.` };
    }
  } catch (error) {
    console.error("Lead delivery error", error instanceof Error ? error.name : "unknown");
    return { status: "error", message: `We couldn't send that just now. Please email ${site.email} directly.` };
  }

  return { status: "success", message: "Thanks. We've received your brief and will reply soon." };
}
