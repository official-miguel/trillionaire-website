import Image from "next/image";
import Link from "next/link";

type Proof = {
  label: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
};

export type ServicePageContent = {
  theme: "webdev" | "appdev" | "systems" | "ai" | "training";
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  heroImage: string;
  included: { title: string; description: string }[];
  proof: Proof;
  /** Optional JSON-LD structured data specific to this service page */
  jsonLd?: Record<string, unknown>;
  /** Breadcrumb items: [{ name, href }] */
  breadcrumbs?: { name: string; href: string }[];
};

const BASE_URL = "https://trillionairedesigns.co.ke";

export default function ServicePageTemplate({ content }: { content: ServicePageContent }) {
  const { theme, eyebrow, title, description, ctaLabel, heroImage, included, proof, jsonLd, breadcrumbs } = content;

  // Build BreadcrumbList schema
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: BASE_URL,
          },
          ...breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 2,
            name: crumb.name,
            item: `${BASE_URL}${crumb.href}`,
          })),
        ],
      }
    : null;

  return (
    <main data-theme={theme} className="bg-ink text-white">
      {/* Structured data */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}

      {/* Breadcrumb nav (visible) */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav aria-label="Breadcrumb" className="px-6 pt-28 pb-0">
          <div className="mx-auto max-w-7xl">
            <ol className="flex items-center gap-2 text-sm text-white/40">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  <span aria-hidden>/</span>
                  {i === breadcrumbs.length - 1 ? (
                    <span className="text-white/70" aria-current="page">{crumb.name}</span>
                  ) : (
                    <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.name}</Link>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </nav>
      )}

      {/* Hero */}
      <section className={`lg:min-h-[85vh] flex items-center px-6 ${breadcrumbs ? "pt-8 pb-16" : "pt-28 pb-16"}`}>
        <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <span className="font-mono text-sm text-accent">{eyebrow}</span>
            <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight leading-[0.95]">
              {title}
            </h1>
            <p className="mt-8 text-lg text-white/60 max-w-xl">{description}</p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold text-ink bg-accent"
            >
              {ctaLabel}
            </Link>
          </div>

          <div className="w-3/4 mx-auto lg:w-full lg:mx-0 rounded-2xl overflow-hidden border border-white/10 bg-black/40">
            <Image
              src={heroImage}
              alt={`${title} — Trillionaire Designs`}
              width={1200}
              height={750}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">What&apos;s included</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {included.map((item) => (
              <div key={item.title} className="border-t border-accent pt-4">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="mt-2 text-white/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <span className="font-mono text-sm text-accent">{proof.label}</span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight max-w-2xl">
            {proof.title}
          </h2>
          <p className="mt-6 text-white/60 text-lg max-w-2xl">{proof.description}</p>
          <Link
            href={proof.href}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent"
          >
            {proof.linkLabel} <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">
            Ready to start?
          </h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Tell us what you&apos;re building. We reply on WhatsApp, fast.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-full px-8 py-4 text-sm font-semibold text-ink bg-accent"
          >
            {ctaLabel}
          </Link>
        </div>
      </section>
    </main>
  );
}
