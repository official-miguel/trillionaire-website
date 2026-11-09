import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://www.trillionairedesigns.co.ke";
const SLUG = "custom-software-vs-off-the-shelf";
const PAGE_URL = `${BASE_URL}/blog/${SLUG}`;

export const metadata: Metadata = {
  title: "Custom Software vs Off-the-Shelf: What Makes Sense for Your Business?",
  description:
    "A practical comparison of building custom software versus buying ready-made solutions for businesses — costs, trade-offs, and how to decide which is right for your situation.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Custom Software vs Off-the-Shelf for Businesses | Trillionaire Designs",
    description:
      "When does custom software make sense for a business? When is off-the-shelf better? A practical, honest comparison.",
    url: PAGE_URL,
    type: "article",
  },
  keywords: [
    "custom software development",
    "off-the-shelf software",
    "bespoke software",
    "business software",
    "SaaS vs custom software",
    "software development company",
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${PAGE_URL}/#article`,
  headline: "Custom Software vs Off-the-Shelf: What Makes Sense for Your Business?",
  description:
    "A practical comparison of building custom software versus buying ready-made solutions for businesses — costs, trade-offs, and how to decide.",
  url: PAGE_URL,
  datePublished: "2024-12-01",
  dateModified: "2024-12-01",
  author: {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "Trillionaire Designs",
  },
  publisher: { "@id": `${BASE_URL}/#organization` },
  inLanguage: "en",
  about: [
    { "@type": "Thing", name: "Custom Software Development" },
    { "@type": "Thing", name: "Business Software" },
  ],
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: "Custom Software vs Off-the-Shelf", item: PAGE_URL },
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

            <span className="font-mono text-sm text-lime">Software Development</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
              Custom Software vs Off-the-Shelf: What Makes Sense for Your Business?
            </h1>
            <div className="mt-6 flex items-center gap-4 text-sm text-white/40">
              <time dateTime="2024-12-01">1 December 2024</time>
              <span>·</span>
              <span>8 min read</span>
              <span>·</span>
              <span>Trillionaire Designs</span>
            </div>
            <p className="mt-8 text-lg text-white/70 leading-relaxed">
              One of the most common questions we hear from businesses is
              whether they should buy existing software or build something custom. The
              honest answer is: it depends — and the right answer isn&apos;t always
              &quot;build custom.&quot;
            </p>
            <p className="mt-4 text-white/60 leading-relaxed">
              This guide breaks down the trade-offs clearly so you can make a decision
              based on your actual situation, not on what&apos;s easier to sell you.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">What is off-the-shelf software?</h2>
            <p className="mt-4 text-white/60 leading-relaxed">
              Off-the-shelf software is built for a broad audience and sold as a product
              — think QuickBooks for accounting, Shopify for e-commerce, or Salesforce
              for CRM. You pay a subscription (or a licence fee), configure it for your
              business, and use it as-is.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed">
              Most established categories of business software have good off-the-shelf
              options. If your needs fit within what the product was designed for,
              this is usually the faster and cheaper starting point.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">When off-the-shelf makes sense</h2>
            <ul className="mt-4 text-white/60 leading-relaxed space-y-3 list-disc list-inside">
              <li>Your workflow is standard and your business doesn&apos;t have unusual processes.</li>
              <li>A popular product already exists for your category (accounting, HR, CRM, e-commerce).</li>
              <li>You&apos;re early-stage and need something working quickly with minimal upfront cost.</li>
              <li>You have the technical capacity to configure and integrate the product.</li>
              <li>The total subscription cost over 2-3 years is lower than a custom build.</li>
            </ul>

            <h2 className="mt-12 text-2xl font-semibold">What is custom software?</h2>
            <p className="mt-4 text-white/60 leading-relaxed">
              Custom software is built specifically for your business. It&apos;s designed
              around how your organisation actually works, rather than you adapting your
              workflow to fit a generic product.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed">
              Bidii is a good example. There are school management systems available as
              off-the-shelf products — but none of them were built around a specific
              curriculum, school structures, and the specific way schools
              manage boarding. Building Bidii from scratch meant it could handle
              everything a school actually needs.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">When custom software makes sense</h2>
            <ul className="mt-4 text-white/60 leading-relaxed space-y-3 list-disc list-inside">
              <li>Your workflow is genuinely different from what generic software handles.</li>
              <li>You need integration with local systems — mobile money, local banks, government databases.</li>
              <li>Off-the-shelf options don&apos;t exist for your category, or the existing ones don&apos;t fit the local context.</li>
              <li>You want to own the software and avoid ongoing subscription costs at scale.</li>
              <li>The software is a core competitive advantage for your business.</li>
              <li>You need specific compliance or data residency requirements (keeping data).</li>
            </ul>

            <h2 className="mt-12 text-2xl font-semibold">The cost question — honestly</h2>
            <p className="mt-4 text-white/60 leading-relaxed">
              Custom software has a higher upfront cost than most off-the-shelf products.
              A well-built custom system for a business typically involves several
              months of development, and that has a real price.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed">
              However, compare that to the total cost of an off-the-shelf product over
              three to five years — subscription fees, implementation costs, training,
              and the cost of working around its limitations. For many businesses, custom
              software becomes cost-effective within two to three years, and you own the
              asset.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">A practical decision framework</h2>
            <div className="mt-6 border border-white/10 rounded-xl overflow-hidden">
              <div className="grid grid-cols-2 text-sm">
                <div className="p-4 bg-white/5 font-semibold border-b border-r border-white/10">Choose off-the-shelf if…</div>
                <div className="p-4 bg-white/5 font-semibold border-b border-white/10">Consider custom if…</div>
                <div className="p-4 text-white/60 border-b border-r border-white/10">A good product exists for your category</div>
                <div className="p-4 text-white/60 border-b border-white/10">No product fits your specific workflow</div>
                <div className="p-4 text-white/60 border-b border-r border-white/10">You need to start immediately</div>
                <div className="p-4 text-white/60 border-b border-white/10">You have time to build the right system</div>
                <div className="p-4 text-white/60 border-b border-r border-white/10">Your workflow is standard</div>
                <div className="p-4 text-white/60 border-b border-white/10">Your workflow is genuinely unique</div>
                <div className="p-4 text-white/60 border-r border-white/10">Budget is tight in year one</div>
                <div className="p-4 text-white/60">The long-term cost of subscriptions is high</div>
              </div>
            </div>

            <div className="mt-16 border-t border-white/10 pt-10">
              <p className="text-white/50 text-sm">
                Trillionaire Designs builds custom software and systems for businesses
                and organisations. We&apos;re honest about when custom is and
                isn&apos;t the right choice for your situation.
              </p>
              <Link
                href="/systems"
                className="mt-4 inline-flex items-center rounded-full bg-lime px-6 py-3 text-sm font-semibold text-ink"
              >
                Learn about custom systems
              </Link>
            </div>

            <div className="mt-12 border-t border-white/10 pt-8">
              <span className="text-xs text-white/30 uppercase tracking-widest">Related</span>
              <div className="mt-4 flex flex-wrap gap-4">
                <Link href="/systems" className="text-sm text-lime hover:text-white transition-colors">
                  Systems Development →
                </Link>
                <Link href="/work/bidii" className="text-sm text-lime hover:text-white transition-colors">
                  Bidii Case Study →
                </Link>
                <Link href="/blog/how-to-choose-website-development-company" className="text-sm text-lime hover:text-white transition-colors">
                  Choosing a Web Development Company →
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
