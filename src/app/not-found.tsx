import type { Metadata } from "next";
import { ContactDrawerProvider } from "@/components/ContactDrawer";
import { FloatingDock } from "@/components/FloatingDock";
import { MegaMenu } from "@/components/MegaMenu";
import { Footer } from "@/components/Footer";
import { CtaButton } from "@/components/ui/CtaButton";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <ContactDrawerProvider>
      <MegaMenu />
      <FloatingDock />
      <main id="main" className="mx-auto flex min-h-svh w-full max-w-[84rem] flex-col justify-center gap-10 px-6 pt-36 pb-28 lg:px-18">
        <p className="text-xs font-medium tracking-[0.12em] text-body uppercase">404 / Page not found</p>
        <h1 className="font-display text-5xl leading-[1.05] tracking-[-0.02em] text-balance text-heading sm:text-6xl lg:text-7xl">
          This page isn&apos;t <em className="bg-brand-gradient bg-clip-text text-transparent">here.</em>
        </h1>
        <p className="max-w-prose text-lg leading-relaxed">
          The address may be mistyped, or the page may have moved. The homepage has everything we do.
        </p>
        <div>
          <CtaButton href="/">Back to homepage</CtaButton>
        </div>
      </main>
      <Footer />
    </ContactDrawerProvider>
  );
}
