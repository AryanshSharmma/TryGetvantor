"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

const RADIUS = 40;
const PULL = 0.3;
const MAX_SHIFT = 16;
const SPRING = { stiffness: 240, damping: 18, mass: 0.5 };
const REST_SHADOW = "0 10px 44px -3px rgba(168,85,247,0), 0 4px 72px -4px rgba(225,29,72,0)";
const GLOW_SHADOW = "0 12px 44px -3px rgba(168,85,247,0.55), 0 6px 72px -4px rgba(225,29,72,0.4)";

const clamp = (value: number) => Math.max(-MAX_SHIFT, Math.min(MAX_SHIFT, value));

function useMagnet<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const reduce = useReducedMotion();
  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);
  const x = useSpring(targetX, SPRING);
  const y = useSpring(targetY, SPRING);

  useEffect(() => {
    if (reduce) return;

    function handleMove(event: PointerEvent) {
      const element = ref.current;
      if (!element || event.pointerType !== "mouse") return;

      const rect = element.getBoundingClientRect();
      const left = rect.left - x.get();
      const top = rect.top - y.get();
      const right = left + rect.width;
      const bottom = top + rect.height;
      const gapX = Math.max(left - event.clientX, 0, event.clientX - right);
      const gapY = Math.max(top - event.clientY, 0, event.clientY - bottom);

      if (Math.hypot(gapX, gapY) <= RADIUS) {
        targetX.set(clamp((event.clientX - (left + rect.width / 2)) * PULL));
        targetY.set(clamp((event.clientY - (top + rect.height / 2)) * PULL));
      } else {
        targetX.set(0);
        targetY.set(0);
      }
    }

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, [reduce, targetX, targetY, x, y]);

  return { ref, x, y, reduce };
}

const hoverTransition = { type: "spring", stiffness: 260, damping: 20 } as const;

export function MagneticButton({
  className,
  children,
  targetId,
}: {
  className?: string;
  children: ReactNode;
  targetId: string;
}) {
  const { ref, x, y, reduce } = useMagnet<HTMLButtonElement>();

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={() => document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" })}
      className={className}
      style={{ x, y }}
      initial={false}
      animate={{ boxShadow: REST_SHADOW }}
      whileHover={reduce ? undefined : { scale: 1.05, boxShadow: GLOW_SHADOW }}
      whileTap={{ scale: 0.98 }}
      transition={hoverTransition}
    >
      {children}
    </motion.button>
  );
}

export function MagneticLink({ className, children, href }: { className?: string; children: ReactNode; href: string }) {
  const { ref, x, y, reduce } = useMagnet<HTMLAnchorElement>();

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      style={{ x, y }}
      initial={false}
      animate={{ boxShadow: REST_SHADOW }}
      whileHover={reduce ? undefined : { scale: 1.05, boxShadow: GLOW_SHADOW }}
      whileTap={{ scale: 0.98 }}
      transition={hoverTransition}
    >
      {children}
    </motion.a>
  );
}
