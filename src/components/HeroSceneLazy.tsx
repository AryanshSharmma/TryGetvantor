"use client";

import dynamic from "next/dynamic";

export const HeroSceneLazy = dynamic(() => import("@/components/HeroScene").then((m) => m.HeroScene), {
  ssr: false,
  loading: () => null,
});
