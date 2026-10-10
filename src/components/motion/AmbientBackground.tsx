export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="orb absolute -top-1/4 -left-1/4 size-[60vw] rounded-full bg-brand-violet/15 blur-3xl" />
      <div className="orb absolute -right-1/4 bottom-0 size-[50vw] rounded-full bg-brand-rose/10 blur-3xl [animation-delay:-8s]" />
    </div>
  );
}
