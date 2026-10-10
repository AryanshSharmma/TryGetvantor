"use client";

import { useRef } from "react";
import { Browser, CeramicsSite, RestaurantSite, TrainingSite } from "@/components/mock/ConceptSites";

/** Three concept sites over a sun disc. Tilts a few degrees toward the pointer. */
export function HeroStage() {
  const stage = useRef<HTMLDivElement>(null);

  const move = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = stage.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `rotateY(${x * 7}deg) rotateX(${-y * 6}deg)`;
  };
  const leave = () => {
    if (stage.current) stage.current.style.transform = "";
  };

  return (
    <div onPointerMove={move} onPointerLeave={leave} className="relative [perspective:1400px]">
      <div
        ref={stage}
        className="relative aspect-[1/0.92] w-full transition-transform duration-500 ease-out [transform-style:preserve-3d]"
      >
        <div className="absolute right-[2%] top-[4%] aspect-square w-[78%] rounded-full bg-sun" />

        <div className="float absolute left-0 top-[8%] w-[68%]" style={{ "--d": "0s" } as React.CSSProperties}>
          <Browser><CeramicsSite /></Browser>
        </div>
        <div className="float absolute right-0 top-[36%] w-[58%]" style={{ "--d": "-3s" } as React.CSSProperties}>
          <Browser><RestaurantSite /></Browser>
        </div>
        <div className="float absolute bottom-0 left-[10%] w-[52%]" style={{ "--d": "-6s" } as React.CSSProperties}>
          <Browser><TrainingSite /></Browser>
        </div>
      </div>
    </div>
  );
}
