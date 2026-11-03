import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServicesScroll from "@/components/ServicesScroll";
import TechStrip from "@/components/TechStrip";

const BASE_URL = "https://trillionairedesigns.co.ke";

export const metadata: Metadata = {
  title: "Trillionaire Designs — Kenyan Software Development Company",
  description:
    "Trillionaire Designs is a Kenyan software development and technology company based in Nairobi. We build websites, mobile apps, custom software systems, and AI solutions for businesses in Kenya and East Africa.",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Trillionaire Designs — Kenyan Software Development Company",
    description:
      "Technology and software development company based in Nairobi, Kenya. We build websites, mobile apps, custom software systems, and AI solutions for businesses across Kenya and East Africa.",
    url: BASE_URL,
    type: "website",
    images: [
      {
        url: "/brand/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Trillionaire Designs — Kenyan Software Development Company",
      },
    ],
  },
};

// Homepage-specific JSON-LD: Connects to main Organization
const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE_URL}/#webpage`,
  url: BASE_URL,
  name: "Trillionaire Designs — Kenyan Software Development Company",
  description:
    "Trillionaire Designs is a Kenyan software development and technology company based in Nairobi. We build websites, mobile apps, custom software systems, and AI solutions for businesses in Kenya and East Africa.",
  isPartOf: {
    "@id": `${BASE_URL}/#website`,
  },
  about: {
    "@id": `${BASE_URL}/#organization`,
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <main className="bg-ink text-white">
        {/* Hero */}
        <section className="relative min-h-screen flex items-center px-6 pt-24 overflow-hidden">
          <div className="relative mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-1">
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-semibold tracking-tight leading-[0.95]">
                Kenyan software development company building{" "}
                <span className="text-lime">software that works.</span>
              </h1>
              <p className="mt-8 text-lg text-white/60 max-w-md">
                Trillionaire Designs is a technology company based in Nairobi, Kenya. 
                We build websites, mobile apps, custom software systems, and AI solutions 
                for businesses across Kenya and East Africa.
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
                alt="Trillionaire Designs — software development studio in Nairobi, Kenya"
                width={1680}
                height={945}
                priority
                className="w-full max-w-xl h-auto object-contain"
              />
            </div>
          </div>
        </section>

        <TechStrip />

        {/* Services: pinned scroll story */}
        <ServicesScroll />

        {/* Flagship work: Bidii */}
        <section className="bg-ink border-t border-white/10 px-6 py-32">
          <div className="mx-auto max-w-7xl">
            <span className="font-mono text-sm text-lime">Flagship work</span>
            <h2 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight max-w-3xl">
              Bidii is a full school management system, built and running.
            </h2>
            <p className="mt-6 text-white/60 text-lg max-w-2xl">
              Timetabling, assessments, accommodation, and communication for real
              schools. Proof we don&apos;t just design software — we ship systems
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
                  Design, engineering, and AI under one roof — no handoffs
                  between agencies.
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

        {/* Services quick links */}
        <section className="bg-ink border-t border-white/10 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <span className="font-mono text-sm text-lime">What we build</span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight max-w-2xl">
              Every layer of your digital product, under one roof.
            </h2>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { href: "/web-development",  label: "Web Development",     desc: "Fast, modern websites built to convert."                          },
                { href: "/app-development",  label: "App Development",     desc: "Cross-platform apps from first screen to store launch."           },
                { href: "/systems",          label: "Systems Development",  desc: "Custom software built around how your organisation works."        },
                { href: "/ai",               label: "AI Solutions",         desc: "Practical AI features shipped into real products."                },
                { href: "/training",         label: "AI & Coding Training", desc: "Hands-on training taught by people who build with AI daily."      },
                { href: "/work",             label: "Our Work",             desc: "See the products we've built and shipped."                        },
              ].map(({ href, label, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="group block rounded-2xl border border-white/10 p-6 hover:border-lime transition-colors"
                >
                  <h3 className="font-semibold text-white group-hover:text-lime transition-colors">
                    {label}
                  </h3>
                  <p className="mt-2 text-sm text-white/50">{desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-lime">
                    Learn more <span aria-hidden>→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-ink px-6 py-32 border-t border-white/10">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight">
              Let&apos;s build something worth running on.
            </h2>
            <p className="mt-6 text-lg text-white/60 max-w-xl mx-auto">
              Tell us what you&apos;re building. We reply on WhatsApp, fast.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center rounded-full bg-lime px-8 py-4 text-sm font-semibold text-ink"
            >
              Start a project
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
