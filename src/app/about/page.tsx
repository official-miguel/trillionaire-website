import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "A Kenyan studio building software worth running on — the team behind Bidii.",
};

export default function AboutPage() {
  return (
    <main className="bg-ink text-white min-h-screen">
      <section className="px-6 pt-32 pb-16">
        <div className="mx-auto max-w-7xl">
          <span className="font-mono text-sm text-lime">About</span>
          <h1 className="mt-4 text-5xl sm:text-7xl font-semibold tracking-tight max-w-3xl">
            A Kenyan studio building software worth running on.
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-white/60 max-w-2xl">
            Trillionaire Designs is a Nairobi-based team building websites, apps,
            custom systems, and AI — for businesses that need software to actually
            work, not just look good in a pitch.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl grid sm:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold">Why we exist</h2>
            <p className="mt-4 text-white/60">
              Too much software gets built and never used. We started Trillionaire
              Designs to build systems people actually depend on — starting with
              Bidii, our own school management system, now running in real schools.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">How we work</h2>
            <p className="mt-4 text-white/60">
              One team across design, engineering, and AI — no handoffs between
              agencies. We hold client work to the same standard as our own
              products.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24 text-center">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">
            Let&apos;s build something worth running on.
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-lime px-8 py-4 text-sm font-semibold text-ink"
          >
            Start a project
          </Link>
        </div>
      </section>
    </main>
  );
}
