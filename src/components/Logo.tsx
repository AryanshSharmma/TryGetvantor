export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg aria-hidden width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="13" fill="var(--hot)" />
        <path d="M6.5 8.5 13 19.5l6.5-11" stroke="var(--hot-ink)" strokeWidth="1.8" />
      </svg>
      <span className="display text-[1.4rem] font-normal tracking-[-0.01em]">GetVantor</span>
    </span>
  );
}
