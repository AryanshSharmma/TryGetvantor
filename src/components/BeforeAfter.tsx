"use client";

import { useCallback, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { ComposedMock, TemplateMock } from "@/components/mock/RoofingMock";

/** Draggable comparison. The handle is a real slider: arrow keys, Home, End. */
export function BeforeAfter() {
  const box = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(56);
  const drag = useRef(false);

  const setFromX = useCallback((x: number) => {
    const r = box.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(Math.max(((x - r.left) / r.width) * 100, 3), 97));
  }, []);

  const down = (e: PointerEvent) => {
    drag.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    setFromX(e.clientX);
  };
  const move = (e: PointerEvent) => { if (drag.current) setFromX(e.clientX); };
  const up = () => { drag.current = false; };
  const key = (e: KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 3;
    if (e.key === "ArrowLeft") setPos((p) => Math.max(p - step, 3));
    else if (e.key === "ArrowRight") setPos((p) => Math.min(p + step, 97));
    else if (e.key === "Home") setPos(3);
    else if (e.key === "End") setPos(97);
    else return;
    e.preventDefault();
  };

  return (
    <figure>
      <div className="border border-rule bg-black/20 p-1.5 sm:p-2.5">
        <div className="mb-1.5 flex items-center gap-1.5 px-1 sm:mb-2.5">
          {[0, 1, 2].map((i) => <i key={i} className="size-1.5 rounded-full bg-fg/25" />)}
          <span className="label ml-3 hidden truncate text-mute sm:inline">summitridgeroofing.example — concept</span>
        </div>
        <div
          ref={box}
         
          onPointerDown={down}
          onPointerMove={move}
          onPointerUp={up}
          onPointerCancel={up}
          className="relative aspect-[4/3] w-full cursor-ew-resize touch-pan-y overflow-hidden sm:aspect-[16/10]"
        >
          <div className="absolute inset-0"><ComposedMock /></div>
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}><TemplateMock /></div>

          <span className="label pointer-events-none absolute left-2 top-2 bg-black px-2 py-1 text-white sm:left-3 sm:top-3">Before</span>
          <span className="label pointer-events-none absolute right-2 top-2 bg-[var(--hot)] px-2 py-1 text-[color:var(--hot-ink)] sm:right-3 sm:top-3">After</span>

          <div className="pointer-events-none absolute inset-y-0 w-px bg-[var(--hot)]" style={{ left: `${pos}%` }}>
            <div
              role="slider"
              tabIndex={0}
              aria-label="Compare before and after"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(pos)}
              onKeyDown={key}
              className="pointer-events-auto absolute left-1/2 top-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full bg-[var(--hot)] text-[color:var(--hot-ink)]"
            >
              <svg aria-hidden width="20" height="12" viewBox="0 0 20 12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 1 1 6l5 5M14 1l5 5-5 5" /></svg>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="label mt-3 flex justify-between gap-6 text-mute">
        <span>Before: a composite of common template patterns, not a real site.</span>
        <span className="hidden sm:inline">After: GetVantor concept.</span>
      </figcaption>
    </figure>
  );
}
