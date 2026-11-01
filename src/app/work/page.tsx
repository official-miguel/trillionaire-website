import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://trillionairedesigns.co.ke";
const PAGE_URL = `${BASE_URL}/work`;

export const metadata: Metadata = {
  title: "Our Work — Software Projects by Trillionaire Designs in Kenya",
  description:
    "See the software Trillionaire Designs has built and shipped. Real products in production, including Bidii — a full school management system running in Kenyan schools today.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Our Work | Trillionaire Designs",
    description:
      "Real software projects built and shipped by Trillionaire Designs. See Bidii — our school management system running in real schools in Kenya.",
    url: PAGE_URL,
    type: "website",
  },
};

const worksSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${PAGE_URL}/#collectionpage`,
  url: PAGE_URL,
  name: "Work — Software Built by Trillionaire Designs",
  description: "Portfolio of software products built and shipped by Trillionaire Designs in Kenya.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Work", item: PAGE_URL },
    ],
  },
  publisher: { "@id": `${BASE_URL}/#organization` },
};

const projects = [
  {
    title: "Bidii",
    tag: "Systems · App · AI",
    description:
      "A full school management system covering timetabling, assessments, accommodation, and communication — with an embedded AI assistant. Running in real schools in Kenya today.",
    href: "/work/bidii",
    featured: true,
  },
];

export default function WorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(worksSchema) }}
      />
      <main className="bg-ink text-white min-h-screen">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="px-6 pt-28 pb-0">
          <div className="mx-auto max-w-7xl">
            <ol className="flex items-center gap-2 text-sm text-white/40">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="flex items-center gap-2"><span aria-hidden>/</span><span className="text-white/70" aria-current="page">Work</span></li>
            </ol>
          </div>
        </nav>

        <section className="px-6 pt-8 pb-16">
          <div className="mx-auto max-w-7xl">
            <span className="font-mono text-sm text-lime">Work</span>
            <h1 className="mt-4 text-5xl sm:text-7xl font-semibold tracking-tight max-w-3xl">
              Software we&apos;ve built and shipped.
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-xl">
              Real products, in production, used by real people every day — not mockups,
              not demos.
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

        {/* CTA */}
        <section className="border-t border-white/10 px-6 py-24">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">
              Want software built like this?
            </h2>
            <p className="mt-4 text-white/60 max-w-md mx-auto">
              Tell us what you&apos;re building. We reply on WhatsApp, fast.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center rounded-full bg-lime px-8 py-4 text-sm font-semibold text-ink"
            >
              Start a project
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
