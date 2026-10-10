/**
 * Central brand configuration. Business-critical values live here so they are
 * never scattered through components.
 */
export const site = {
  name: "GetVantor",
  url: "https://getvantor.com",
  title: "GetVantor — Websites that make a business look as good as it is",
  description:
    "GetVantor is a web studio for businesses and brands of every kind. Custom websites designed and built from scratch, with a free preview before you pay.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "aryansh@trygetvantor.com",
  /** Only add profiles that exist. Empty means none are shown. */
  social: [] as { label: string; href: string }[],
};

export const nav = [
  { label: "Work", href: "#work", description: "Selected concepts" },
  { label: "What We Do", href: "#services", description: "Strategy to launch" },
  { label: "Why GetVantor", href: "#difference", description: "How we think" },
  { label: "Process", href: "#process", description: "Four phases" },
  { label: "Pricing", href: "#pricing", description: "Scoped, not guessed" },
];

export const PREVIEW_HREF = "/#start";
export const PREVIEW_PAGE = "/preview";
export const DEMO_HREF = "/work/service-business-concept";

export const cta = {
  submit: "Request my free preview",
};

/**
 * Brand variables for a generated site. The concept project renders from this
 * shape so future personalised previews only need to swap the values.
 */
export type SiteBrand = {
  companyName: string;
  city: string;
  state: string;
  phone: string;
  primaryColor: string;
};

/** Fictional. Invented by GetVantor to demonstrate its thinking. Not a client. */
export const roofingConceptBrand: SiteBrand = {
  companyName: "Summit Ridge Roofing",
  city: "Denver",
  state: "CO",
  phone: "(555) 010-0142",
  primaryColor: "#b4421f",
};
