"use client";

import { useContext, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { ContactDrawerContext } from "@/components/ContactDrawer";
import { ShinyButton } from "@/components/ui/shiny-button";

export function CtaButton({
  children,
  href = "#contact",
  className,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  const router = useRouter();
  const drawer = useContext(ContactDrawerContext);

  function handleClick() {
    if (href === "#contact") {
      drawer?.open();
      return;
    }
    if (href.startsWith("#")) {
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    router.push(href);
  }

  return (
    <ShinyButton onClick={handleClick} className={className}>
      {children}
    </ShinyButton>
  );
}
