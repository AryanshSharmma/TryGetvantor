const words = ["Web strategy", "Visual design", "Custom code", "Cross-device precision", "Launch"];

export function Marquee() {
  return (
    <div aria-hidden="true" className="overflow-hidden border-y border-outline py-6">
      <div className="marquee-track flex w-max">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center gap-12 pr-12">
            {words.map((word) => (
              <li key={word} className="flex items-center gap-12 font-display text-3xl text-heading/70 lg:text-4xl">
                {word}
                <span className="size-2 rounded-full bg-brand-gradient" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
