import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://trillionairedesigns.co.ke";
const PAGE_URL = `${BASE_URL}/about`;

export const metadata: Metadata = {
  title: "About Trillionaire Designs — Software Development Company in Nairobi, Kenya",
  description:
    "Trillionaire Designs is a Nairobi-based software development company building websites, apps, custom systems, and AI solutions for businesses in Kenya. Meet the team behind Bidii.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "About Trillionaire Designs | Software Development in Kenya",
    description:
      "A Nairobi-based team building software worth running on. Learn about Trillionaire Designs — the company behind Bidii, a school management system in production in Kenya.",
    url: PAGE_URL,
    type: "website",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${PAGE_URL}/#aboutpage`,
  url: PAGE_URL,
  name: "About Trillionaire Designs",
  description:
    "Trillionaire Designs is a Nairobi-based software studio building websites, mobile apps, custom systems, and AI solutions for businesses in Kenya.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "About", item: PAGE_URL },
    ],
  },
  mainEntity: { "@id": `${BASE_URL}/#organization` },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <main className="bg-ink text-white min-h-screen">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="px-6 pt-28 pb-0">
          <div className="mx-auto max-w-7xl">
            <ol className="flex items-center gap-2 text-sm text-white/40">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="flex items-center gap-2"><span aria-hidden>/</span><span className="text-white/70" aria-current="page">About</span></li>
            </ol>
          </div>
        </nav>

        <section className="px-6 pt-10 pb-16">
          <div className="mx-auto max-w-7xl">
            <span className="font-mono text-sm text-lime">About</span>
            <h1 className="mt-4 text-5xl sm:text-7xl font-semibold tracking-tight max-w-3xl">
              Kenyan software development company building digital solutions.
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-white/60 max-w-2xl">
              <strong>Trillionaire Designs</strong> is a technology and software development 
              company based in Nairobi, Kenya. We specialize in website development, mobile 
              applications, custom software systems, AI-powered solutions, and digital innovation 
              for businesses across Kenya and East Africa.
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
                Bidii, our own school management system, now running in real schools
                across Kenya.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">How we work</h2>
              <p className="mt-4 text-white/60">
                One team across design, engineering, and AI — no handoffs between
                agencies. We hold client work to the same standard as our own products,
                because we know what it takes to ship software that stays in production.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-semibold mb-8">Company Information</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-sm">
              <div>
                <h3 className="font-semibold text-lime mb-2">Company Name</h3>
                <p className="text-white/70">Trillionaire Designs</p>
              </div>
              <div>
                <h3 className="font-semibold text-lime mb-2">Location</h3>
                <p className="text-white/70">Nairobi, Kenya</p>
              </div>
              <div>
                <h3 className="font-semibold text-lime mb-2">Industry</h3>
                <p className="text-white/70">Software Development &amp; Technology</p>
              </div>
              <div>
                <h3 className="font-semibold text-lime mb-2">Website</h3>
                <a href="https://trillionairedesigns.co.ke" className="text-white/70 hover:text-lime transition-colors">
                  trillionairedesigns.co.ke
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-lime mb-2">Email</h3>
                <a href="mailto:trillionairedesigns.ke@gmail.com" className="text-white/70 hover:text-lime transition-colors">
                  trillionairedesigns.ke@gmail.com
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-lime mb-2">Phone</h3>
                <a href="tel:+254182319029" className="text-white/70 hover:text-lime transition-colors">
                  +254 182 319 029
                </a>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="font-semibold text-lime mb-4">Core Services</h3>
              <ul className="grid sm:grid-cols-2 gap-3 text-white/70">
                <li>• Website Development</li>
                <li>• Mobile App Development</li>
                <li>• Custom Software Systems</li>
                <li>• AI Solutions &amp; Automation</li>
                <li>• Business Process Automation</li>
                <li>• Coding &amp; AI Training</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-semibold mb-8">What we build</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { href: "/web-development",  label: "Website Development",    desc: "Fast, modern websites built to convert."                    },
                { href: "/app-development",  label: "App Development",        desc: "Cross-platform iOS and Android apps, end to end."           },
                { href: "/systems",          label: "Systems Development",     desc: "Custom business and management systems."                    },
                { href: "/ai",               label: "AI Solutions",            desc: "AI automation, chatbots, and AI features in real products." },
                { href: "/training",         label: "Coding & AI Training",    desc: "Practical training for individuals and teams."              },
              ].map(({ href, label, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="group block rounded-2xl border border-white/10 p-6 hover:border-lime transition-colors"
                >
                  <h3 className="font-semibold text-white group-hover:text-lime transition-colors">{label}</h3>
                  <p className="mt-2 text-sm text-white/50">{desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-24 text-center">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">
              Let&apos;s build something worth running on.
            </h2>
            <p className="mt-4 text-white/60 max-w-md mx-auto">
              Tell us what you&apos;re building and we&apos;ll tell you how we&apos;d approach it.
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
