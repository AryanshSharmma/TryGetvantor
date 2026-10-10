"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

const TILT_DEGREES = 6;

export function SpotlightCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLElement>(null);

  function handleMove(event: PointerEvent<HTMLElement>) {
    const card = ref.current;
    if (!card || event.pointerType !== "mouse") return;
    const rect = card.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    card.style.setProperty("--mx", `${px * 100}%`);
    card.style.setProperty("--my", `${py * 100}%`);
    card.style.setProperty("--rx", `${(0.5 - py) * TILT_DEGREES}deg`);
    card.style.setProperty("--ry", `${(px - 0.5) * TILT_DEGREES}deg`);
  }

  function handleLeave() {
    const card = ref.current;
    if (!card) return;
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
  }

  return (
    <article
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative overflow-hidden transition-all duration-300 ease-in-out [transform:perspective(900px)_rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))] motion-reduce:transform-none ${className}`}
    >
      <span
        aria-hidden="true"
        className="spotlight-layer pointer-events-none absolute inset-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"
      />
      {children}
    </article>
  );
}
