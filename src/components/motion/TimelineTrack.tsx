"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function TimelineTrack() {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <span
      ref={ref}
      aria-hidden="true"
      className="absolute inset-y-0 left-5 w-px bg-outline md:left-1/2 md:-translate-x-1/2"
    >
      <motion.span
        style={{ scaleY: reduce ? 1 : scaleY }}
        className="absolute inset-0 origin-top bg-linear-to-b from-brand-violet to-brand-rose"
      />
    </span>
  );
}
