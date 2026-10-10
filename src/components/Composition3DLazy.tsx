"use client";

import dynamic from "next/dynamic";

/** three.js is loaded only when this section is rendered, never in the main bundle. */
export const Composition3DLazy = dynamic(() => import("@/components/Composition3D").then((m) => m.Composition3D), {
  ssr: false,
  loading: () => <div className="aspect-[16/11] w-full" />,
});
