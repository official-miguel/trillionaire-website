import Link from "next/link";

const explore = [
  { href: "/web-development", label: "Web development" },
  { href: "/app-development", label: "App development" },
  { href: "/systems", label: "Systems" },
  { href: "/ai", label: "AI" },
  { href: "/training", label: "AI training" },
  { href: "/work", label: "Work" },
];

const company = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/10 px-6 pt-16 pb-8">
      <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-3 gap-12">
        <div>
          <Link href="/" className="flex items-center gap-1.5">
            <span
              className="text-white text-lg leading-none"
              style={{ fontFamily: "var(--font-script), cursive" }}
            >
              Trillionaire Designs
            </span>
            <span className="font-mono text-sm font-semibold text-lime">{"</>"}</span>
          </Link>
          <p className="mt-4 text-white/50 text-sm max-w-xs">
            A Nairobi-based studio building websites, apps, custom systems, and AI,
            with the same rigor we used to build Bidii.
          </p>
        </div>

        <div>
          <span className="text-xs uppercase tracking-widest text-lime">Explore</span>
          <ul className="mt-4 flex flex-col gap-2">
            {explore.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-white/60 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="text-xs uppercase tracking-widest text-lime">Good to know</span>
          <ul className="mt-4 flex flex-col gap-2">
            {company.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-white/60 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-1 text-sm text-white/60">
            <a href="mailto:trillionairedesigns.ke@gmail.com" className="hover:text-white transition-colors">
              trillionairedesigns.ke@gmail.com
            </a>
            <a
              href="https://wa.me/254182319029"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              0182 319 029
            </a>
            <span>Nairobi, Kenya</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-12 pt-6 border-t border-white/10 text-xs text-white/40">
        <span>© {new Date().getFullYear()} Trillionaire Designs. Built with effort in Kenya.</span>
      </div>
    </footer>
  );
}
