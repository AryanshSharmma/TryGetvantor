"use client";

import dynamic from "next/dynamic";

export const HeroBackdropLazy = dynamic(() => import("./HeroBackdrop").then((m) => m.HeroBackdrop), {
  ssr: false,
  loading: () => null,
});
