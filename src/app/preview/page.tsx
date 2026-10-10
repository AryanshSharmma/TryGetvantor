import type { Metadata } from "next";
import { ContactDrawerProvider } from "@/components/ContactDrawer";
import { FloatingDock } from "@/components/FloatingDock";
import { MegaMenu } from "@/components/MegaMenu";
import { Footer } from "@/components/Footer";
import { StartPage } from "@/components/sections/Start";

export const metadata: Metadata = {
  title: "Get a Free Website Preview",
  description: "Tell us about your business and see a tailored preview of your new website before you commit.",
  alternates: { canonical: "/preview" },
};

export default function Page() {
  return (
    <ContactDrawerProvider>
      <MegaMenu />
      <FloatingDock />
      <main id="main" className="pt-28">
        <StartPage />
      </main>
      <Footer />
    </ContactDrawerProvider>
  );
}
