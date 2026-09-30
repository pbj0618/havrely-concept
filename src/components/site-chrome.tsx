import Link from "next/link";
import { OatMark } from "./oat-mark";

/**
 * The concept notice sits above everything, on every page. Havrely is not a
 * real brand, and a visitor who lands here from a search or a shared link
 * should know that before reading a single product claim.
 */
export function ConceptBar() {
  return (
    <div className="bg-forest-deep px-4 py-2 text-center text-[12px] leading-snug text-oat">
      Concept project by{" "}
      <a href="https://www.brandorystudio.com" className="underline underline-offset-2 hover:no-underline">
        Brandory Studio
      </a>
      . Havrely is a fictional brand.
    </div>
  );
}

const NAV = [
  { href: "/for-cafes", label: "For cafés" },
  { href: "/our-oats", label: "Our oats" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 md:px-8">
        <Link href="/" className="flex items-center gap-2 text-forest" aria-label="Havrely, home">
          <OatMark className="hidden h-9 w-auto sm:block" />
          {/* The carton’s wordmark: classic serif capitals, widely spaced. */}
          <span className="font-serif text-lg tracking-[0.2em] sm:text-xl md:text-2xl md:tracking-[0.22em]">HAVRELY</span>
        </Link>
        <nav aria-label="Main">
          <ul className="flex gap-4 whitespace-nowrap text-[14px] sm:gap-5 sm:text-[15px] md:gap-8">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink transition-colors hover:text-forest">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-kraft/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr] md:px-8">
        <div>
          <p className="font-serif text-2xl tracking-[0.22em] text-forest">HAVRELY</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            Oat drink from Copenhagen. Four ingredients, made for the cup.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-col gap-2 text-sm">
            <li><Link href="/" className="hover:text-forest">Home</Link></li>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-forest">{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-sm leading-relaxed text-muted">
          <p className="font-medium text-ink">About this site</p>
          <p className="mt-2">
            Havrely is a fictional brand. This site is a concept project, designed and built by{" "}
            <a href="https://www.brandorystudio.com" className="text-forest underline underline-offset-2">
              Brandory Studio
            </a>{" "}
            to show its work. Product details are invented and the photography is AI-generated.
          </p>
          <a
            href="https://www.brandorystudio.com/work/havrely"
            className="mt-3 inline-block text-forest underline underline-offset-2"
          >
            Read the Korea entry concept study →
          </a>
        </div>
      </div>
    </footer>
  );
}
