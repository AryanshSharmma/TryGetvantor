import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-5 text-[15px] font-medium transition sm:px-6-[background-color,color,border-color,transform] duration-300 active:scale-[0.98]";
const variants = {
  solid: "bg-btn-bg text-btn-fg hover:bg-fg hover:text-bg",
  line: "border border-fg/40 text-fg hover:border-fg hover:bg-fg hover:text-bg",
};

export function Arrow() {
  return (
    <svg aria-hidden width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
      <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function Button({
  href,
  variant = "solid",
  children,
  className = "",
}: {
  href: string;
  variant?: keyof typeof variants;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      <Arrow />
    </Link>
  );
}
