import Image from "next/image";
import Link from "next/link";
import ServicesScroll from "@/components/ServicesScroll";
import TechStrip from "@/components/TechStrip";

export default function Home() {
  return (
    <main className="bg-ink text-white">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center px-6 pt-24 overflow-hidden">
        <div className="relative mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-1">
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-semibold tracking-tight leading-[0.95]">
              We build the software your business{" "}
              <span className="text-lime">actually runs on.</span>
            </h1>
            <p className="mt-8 text-lg text-white/60 max-w-md">
              Websites, apps, custom systems, and AI — built by the team behind Bidii,
              a school management system running in real schools today.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-lime px-6 py-3 text-sm font-semibold text-ink"
              >
                Start a project
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white"
              >
                See our work
              </Link>
            </div>
          </div>

          <div className="order-2 flex justify-center lg:justify-end">
            <Image
              src="/brand/logo-laptop.webp"
              alt="Trillionaire Designs"
              width={1680}
              height={945}
              priority
              className="w-full max-w-xl h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <TechStrip />

      {/* Services — pinned scroll story */}
      <ServicesScroll />

      {/* Flagship work — Bidii */}
      <section className="bg-ink border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <span className="font-mono text-sm text-lime">Flagship work</span>
          <h2 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight max-w-3xl">
            Bidii — a full school management system, built and running.
          </h2>
          <p className="mt-6 text-white/60 text-lg max-w-2xl">
            Timetabling, assessments, accommodation, and communication for real
            schools — proof we don&apos;t just design software, we ship systems
            people depend on every day.
          </p>
          <Link
            href="/work/bidii"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-lime"
          >
            Read the case study <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-white text-ink px-6 py-32">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12">
          <h2 className="text-4xl font-semibold tracking-tight lg:col-span-1">
            Why work with us
          </h2>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-10">
            <div>
              <h3 className="font-semibold text-lg">We ship products, not mockups</h3>
              <p className="mt-2 text-ink/60">
                Bidii is our own system, in production. We hold our client work to
                the same standard.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Kenyan team, global craft</h3>
              <p className="mt-2 text-ink/60">
                Built in Nairobi, designed to compete with anything you&apos;d find
                abroad.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">One team, every layer</h3>
              <p className="mt-2 text-ink/60">
                Design, engineering, and AI under one roof — no handoffs between
                agencies.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">AI-native, not AI-washed</h3>
              <p className="mt-2 text-ink/60">
                We build real AI features and train real teams to use them well.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink px-6 py-32 border-t border-white/10">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight">
            Let&apos;s build something worth running on.
          </h2>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center rounded-full bg-lime px-8 py-4 text-sm font-semibold text-ink"
          >
            Start a project
          </Link>
        </div>
      </section>
    </main>
  );
}
