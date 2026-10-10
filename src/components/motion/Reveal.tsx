"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

const tags = {
  div: motion.div,
  li: motion.li,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  article: motion.article,
  blockquote: motion.blockquote,
} as const;

type RevealProps = {
  as?: keyof typeof tags;
  id?: string;
  children: ReactNode;
  className?: string;
  delay?: number;
  x?: number;
  y?: number;
  scale?: number;
  eager?: boolean;
};

export function Reveal({ as = "div", id, children, className, delay = 0, x = 0, y = 28, scale = 1, eager = false }: RevealProps) {
  const reduce = useReducedMotion();
  const Tag = tags[as] as typeof motion.div;

  return (
    <Tag
      id={id}
      className={className}
      initial={reduce ? false : { opacity: 0, x, y, scale }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: eager ? "0px" : "0px 0px -12% 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  );
}
