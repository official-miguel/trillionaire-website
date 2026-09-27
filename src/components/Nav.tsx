"use client";

import Link from "next/link";
import { useState } from "react";

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 8 5 12l4 4M15 8l4 4-4 4" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <line x1="11" y1="18" x2="13" y2="18" />
    </svg>
  );
}
function HubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2.5" />
      <circle cx="4" cy="6" r="1.6" />
      <circle cx="20" cy="6" r="1.6" />
      <circle cx="4" cy="18" r="1.6" />
      <circle cx="20" cy="18" r="1.6" />
      <path d="M10 10.5 5.3 7M14 10.5 18.7 7M10 13.5 5.3 17M14 13.5 18.7 17" />
    </svg>
  );
}
function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
    </svg>
  );
}
function CapIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5 2 9l10 4 10-4-10-4z" />
      <path d="M6 11v4c0 1.5 2.5 3 6 3s6-1.5 6-3v-4" />
    </svg>
  );
}
function FolderIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
    </svg>
  );
}
function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5 20c1.2-3.5 4-5 7-5s5.8 1.5 7 5" />
    </svg>
  );
}

const links = [
  { href: "/web-development", label: "Web dev", Icon: CodeIcon },
  { href: "/app-development", label: "App dev", Icon: PhoneIcon },
  { href: "/systems", label: "Systems", Icon: HubIcon },
  { href: "/ai", label: "AI", Icon: SparkleIcon },
  { href: "/training", label: "Training", Icon: CapIcon },
  { href: "/work", label: "Work", Icon: FolderIcon },
  { href: "/about", label: "About", Icon: UserIcon },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4">
      <div className="mx-auto max-w-6xl rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] px-3 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1.5 shrink-0 pl-3">
          <span
            className="text-ink text-base leading-none"
            style={{ fontFamily: "var(--font-script), cursive" }}
          >
            Trillionaire Designs
          </span>
          <span className="font-mono text-xs font-semibold" style={{ color: "#28a428" }}>
            {"</>"}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="flex items-center gap-1.5 text-[13px] text-ink/70 hover:text-ink transition-colors"
            >
              <l.Icon />
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden lg:inline-flex items-center rounded-full bg-lime px-5 py-2.5 text-[13px] font-semibold text-ink hover:brightness-95 transition"
        >
          Start a project
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-ink text-sm pr-3"
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="lg:hidden mt-2 mx-auto max-w-6xl rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-sm text-ink/80"
            >
              <l.Icon />
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-lime px-4 py-2 text-sm font-semibold text-ink"
          >
            Start a project
          </Link>
        </div>
      )}
    </header>
  );
}
