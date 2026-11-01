import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://trillionairedesigns.co.ke";
const SLUG = "how-to-choose-website-development-company-kenya";
const PAGE_URL = `${BASE_URL}/blog/${SLUG}`;

export const metadata: Metadata = {
  title: "How to Choose a Website Development Company in Kenya",
  description:
    "What to look for, what to avoid, and the right questions to ask before hiring a web development company in Kenya. A practical guide from a Nairobi-based development team.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "How to Choose a Website Development Company in Kenya | Trillionaire Designs",
    description:
      "A practical guide to picking the right web development partner in Kenya — what matters, what doesn't, and what questions to ask.",
    url: PAGE_URL,
    type: "article",
  },
  keywords: [
    "website development company Kenya",
    "how to choose web developer Kenya",
    "web design company Nairobi",
    "best web development company Kenya",
    "hiring web developer Kenya",
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${PAGE_URL}/#article`,
  headline: "How to Choose a Website Development Company in Kenya",
  description:
    "What to look for, what to avoid, and the right questions to ask before hiring a web development company in Kenya.",
  url: PAGE_URL,
  datePublished: "2024-11-01",
  dateModified: "2024-11-01",
  author: {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "Trillionaire Designs",
  },
  publisher: { "@id": `${BASE_URL}/#organization` },
  inLanguage: "en-KE",
  about: [
    { "@type": "Thing", name: "Web Development" },
    { "@type": "Thing", name: "Website Design Kenya" },
  ],
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",  item: BASE_URL               },
      { "@type": "ListItem", position: 2, name: "Blog",  item: `${BASE_URL}/blog`     },
      { "@type": "ListItem", position: 3, name: "How to Choose a Website Development Company in Kenya", item: PAGE_URL },
    ],
  },
};

export default function ArticlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="bg-ink text-white min-h-screen">
        <article className="px-6 pt-32 pb-24">
          <div className="mx-auto max-w-3xl">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-10">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-white/40">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="flex items-center gap-2"><span aria-hidden>/</span><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li className="flex items-center gap-2"><span aria-hidden>/</span><span className="text-white/70" aria-current="page">This article</span></li>
              </ol>
            </nav>

            <span className="font-mono text-sm text-lime">Web Development</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
              How to Choose a Website Development Company in Kenya
            </h1>
            <div className="mt-6 flex items-center gap-4 text-sm text-white/40">
              <time dateTime="2024-11-01">1 November 2024</time>
              <span>·</span>
              <span>6 min read</span>
              <span>·</span>
              <span>Trillionaire Designs</span>
            </div>
            <p className="mt-8 text-lg text-white/70 leading-relaxed">
              Choosing a web development company in Kenya is harder than it looks. There
              are hundreds of agencies, freelancers, and studios offering similar-sounding
              services — and without the right questions, it&apos;s easy to end up with a
              website that looks fine in a demo but breaks in production.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed">
              This guide covers the things that actually matter when evaluating a web
              development partner in Kenya — whether you need a simple marketing site, an
              e-commerce store, or a full web application.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">1. Look at work that&apos;s actually live</h2>
            <p className="mt-4 text-white/60 leading-relaxed">
              Ask for links to websites they&apos;ve built, not screenshots. A portfolio
              screenshot is easy to fake or selectively crop. A live URL tells you whether
              the site actually loads, how fast it is, how it behaves on mobile, and whether
              it still works after handover.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed">
              If a company struggles to provide live work, that&apos;s worth noting. Good
              development teams have shipped work they&apos;re proud to link to.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">2. Understand what you&apos;re buying</h2>
            <p className="mt-4 text-white/60 leading-relaxed">
              Website development in Kenya covers a wide range: some companies use
              WordPress templates, others build on page builders, and others write custom
              code from scratch. All of these can be appropriate depending on your needs —
              but you should know which you&apos;re getting and why.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed">
              Ask specifically: will this be custom-built or template-based? Who will own
              the code after launch? Can you update the content yourself, or do you need
              to call the developer for every change?
            </p>

            <h2 className="mt-12 text-2xl font-semibold">3. Ask about performance and SEO</h2>
            <p className="mt-4 text-white/60 leading-relaxed">
              A website that looks great but loads slowly will hurt your business. Google
              uses page speed as a ranking factor, and most Kenyan users are on mobile
              connections. Ask whether the site will score well on Google&apos;s Core Web
              Vitals — and ask the developer to explain what those are.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed">
              Basic SEO — proper page titles, meta descriptions, semantic HTML, and
              structured data — should be included by default, not an add-on.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">4. Think beyond the launch date</h2>
            <p className="mt-4 text-white/60 leading-relaxed">
              Who maintains the site after launch? What happens when something breaks?
              Will you need to pay for every small update? A good development partner
              will have a clear answer about ongoing support, hosting, and what happens
              when you need to make changes.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">5. Check that they understand your business context</h2>
            <p className="mt-4 text-white/60 leading-relaxed">
              A web development company that&apos;s built sites for Kenyan businesses
              understands local context: M-Pesa integration, local SEO for Nairobi
              searches, mobile-first design for Kenyan users, and realistic timelines.
              Ask whether they&apos;ve built for businesses similar to yours.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Questions to ask before you hire</h2>
            <ul className="mt-4 text-white/60 leading-relaxed space-y-2 list-disc list-inside">
              <li>Can you show me three live websites you&apos;ve built in the last year?</li>
              <li>Will this site be custom-built or template-based?</li>
              <li>What tech stack will you use, and why?</li>
              <li>How will the site perform on mobile and slow connections?</li>
              <li>What&apos;s included after launch — maintenance, hosting, updates?</li>
              <li>Who owns the code and the domain after handover?</li>
              <li>How do you handle SEO — is it included or extra?</li>
            </ul>

            <div className="mt-16 border-t border-white/10 pt-10">
              <p className="text-white/50 text-sm">
                Trillionaire Designs builds custom websites for businesses in Kenya.
                We&apos;re happy to answer any of these questions about our own work.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center rounded-full bg-lime px-6 py-3 text-sm font-semibold text-ink"
              >
                Talk to us about your website
              </Link>
            </div>

            <div className="mt-12 border-t border-white/10 pt-8">
              <span className="text-xs text-white/30 uppercase tracking-widest">Related</span>
              <div className="mt-4 flex flex-wrap gap-4">
                <Link href="/web-development" className="text-sm text-lime hover:text-white transition-colors">
                  Web Development Services →
                </Link>
                <Link href="/work/bidii" className="text-sm text-lime hover:text-white transition-colors">
                  See Our Work — Bidii →
                </Link>
                <Link href="/blog/custom-software-vs-off-the-shelf-kenya" className="text-sm text-lime hover:text-white transition-colors">
                  Custom vs Off-the-Shelf Software →
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
