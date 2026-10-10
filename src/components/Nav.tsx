import Link from "next/link";
import { Logo } from "@/components/Logo";
import { nav, PREVIEW_HREF } from "@/lib/site";

export function Nav() {
  return (
    <header className="on-cream fixed inset-x-0 top-0 z-50 border-b border-rule bg-cream/90 text-fg backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between">
        <Link href="/" aria-label="GetVantor, home">
          <Logo />
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-7">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="ul hidden text-[15px] lg:inline">
              {n.label}
            </Link>
          ))}
          <Link
            href={PREVIEW_HREF}
            className="inline-flex min-h-10 items-center rounded-full bg-lagoon px-5 text-[15px] font-medium text-cream transition-colors hover:bg-ink"
          >
            Free preview
          </Link>
        </nav>
      </div>
    </header>
  );
}
