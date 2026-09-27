import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description: "Software we've built and shipped — real products, in production, used every day.",
};

const projects = [
  {
    title: "Bidii",
    tag: "Systems · App · AI",
    description:
      "A full school management system — timetabling, assessments, accommodation, communication, and an embedded AI assistant. Running in real schools today.",
    href: "/work/bidii",
    featured: true,
  },
];

export default function WorkPage() {
  return (
    <main className="bg-ink text-white min-h-screen">
      <section className="px-6 pt-32 pb-16">
        <div className="mx-auto max-w-7xl">
          <span className="font-mono text-sm text-lime">Work</span>
          <h1 className="mt-4 text-5xl sm:text-7xl font-semibold tracking-tight max-w-3xl">
            Software we&apos;ve built and shipped.
          </h1>
          <p className="mt-6 text-lg text-white/60 max-w-xl">
            Real products, in production, used by real people every day.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16">
        <div className="mx-auto max-w-7xl flex flex-col gap-6">
          {projects.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className={`group block rounded-2xl border border-white/10 p-10 transition-colors hover:border-lime ${
                p.featured ? "bg-white/[0.03]" : ""
              }`}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight group-hover:text-lime transition-colors">
                  {p.title}
                </h2>
                <span className="font-mono text-sm text-white/40">{p.tag}</span>
              </div>
              <p className="mt-4 text-white/60 max-w-2xl">{p.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-lime">
                Read the case study <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
