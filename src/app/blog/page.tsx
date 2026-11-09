import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://www.trillionairedesigns.co.ke";
const PAGE_URL = `${BASE_URL}/blog`;

export const metadata: Metadata = {
  title: "Blog — Software, AI & Web Development Insights",
  description:
    "Practical guides, insights, and resources on software development, AI, web development, and tech for businesses. Written by the team at Trillionaire Designs.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Blog | Trillionaire Designs",
    description:
      "Software development, AI, and web development insights for businesses. Practical guides from the team that built Bidii.",
    url: PAGE_URL,
    type: "website",
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${PAGE_URL}/#blog`,
  url: PAGE_URL,
  name: "Trillionaire Designs Blog",
  description:
    "Software development, AI, and web development insights for businesses.",
  publisher: { "@id": `${BASE_URL}/#organization` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: PAGE_URL },
    ],
  },
};

// Published articles — add new entries here as you publish
export const articles = [
  {
    slug: "how-to-choose-website-development-company",
    title: "How to Choose a Website Development Company",
    description:
      "What to look for, what to avoid, and the right questions to ask before hiring a web development company.",
    date: "2024-11-01",
    readTime: "6 min read",
    category: "Web Development",
  },
  {
    slug: "ai-automation-small-businesses",
    title: "How AI Automation Can Help Small Businesses",
    description:
      "Practical ways small and medium businesses are using AI to save time, reduce errors, and compete with larger companies.",
    date: "2024-11-15",
    readTime: "7 min read",
    category: "AI",
  },
  {
    slug: "custom-software-vs-off-the-shelf",
    title: "Custom Software vs Off-the-Shelf: What Makes Sense for Your Business?",
    description:
      "A practical comparison of building custom software versus buying ready-made solutions — and how to decide which is right for your business.",
    date: "2024-12-01",
    readTime: "8 min read",
    category: "Software Development",
  },
];

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <main className="bg-ink text-white min-h-screen">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="px-6 pt-28 pb-0">
          <div className="mx-auto max-w-7xl">
            <ol className="flex items-center gap-2 text-sm text-white/40">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="flex items-center gap-2"><span aria-hidden>/</span><span className="text-white/70" aria-current="page">Blog</span></li>
            </ol>
          </div>
        </nav>

        <section className="px-6 pt-10 pb-16">
          <div className="mx-auto max-w-7xl">
            <span className="font-mono text-sm text-lime">Resources</span>
            <h1 className="mt-4 text-5xl sm:text-7xl font-semibold tracking-tight max-w-3xl">
              Practical guides for building with software.
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-xl">
              Insights on web development, software systems, AI, and technology
              for businesses — written by the team that builds these things daily.
            </p>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group block rounded-2xl border border-white/10 p-8 hover:border-lime transition-colors"
                >
                  <span className="font-mono text-xs text-lime">{article.category}</span>
                  <h2 className="mt-3 text-xl font-semibold leading-snug group-hover:text-lime transition-colors">
                    {article.title}
                  </h2>
                  <p className="mt-3 text-sm text-white/50 leading-relaxed">{article.description}</p>
                  <div className="mt-6 flex items-center gap-3 text-xs text-white/30">
                    <time dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString("en", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/10 px-6 py-24">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Ready to build something?
            </h2>
            <p className="mt-4 text-white/60 max-w-md mx-auto">
              We don&apos;t just write about software — we build it. Tell us about your project.
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
