import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://trillionairedesigns.co.ke";
const PAGE_URL = `${BASE_URL}/contact`;
const WHATSAPP_NUMBER = "254182319029";

export const metadata: Metadata = {
  title: "Contact Trillionaire Designs — Start a Software Project",
  description:
    "Contact Trillionaire Designs to start a website, app, software system, or AI project. Reach us on WhatsApp or email. Based — we reply fast.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Contact Trillionaire Designs | Start a Project",
    description:
      "Ready to build something? Contact our software team on WhatsApp or email. We reply quickly.",
    url: PAGE_URL,
    type: "website",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${PAGE_URL}/#contactpage`,
  url: PAGE_URL,
  name: "Contact Trillionaire Designs",
  description:
    "Contact Trillionaire Designs to discuss a software, website, app, or AI project. ",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Contact", item: PAGE_URL },
    ],
  },
  mainEntity: { "@id": `${BASE_URL}/#organization` },
};

export default function ContactPage() {
  const message = encodeURIComponent(
    "Hi Trillionaire Designs, I'd like to talk about a project."
  );
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <main className="bg-ink text-white min-h-screen flex flex-col justify-center px-6 py-32">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="sr-only">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li><span aria-current="page">Contact</span></li>
          </ol>
        </nav>

        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-sm text-lime">Contact</span>
          <h1 className="mt-4 text-5xl sm:text-7xl font-semibold tracking-tight">
            Let&apos;s talk.
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-white/60">
            Tell us what you&apos;re building. We reply on WhatsApp, fast.
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-lime px-8 py-4 text-base font-semibold text-ink"
          >
            Message us on WhatsApp
          </a>
          <p className="mt-6 text-sm text-white/40">
            Or email{" "}
            <a href="mailto:trillionairedesigns.ke@gmail.com" className="text-white/70 underline">
              trillionairedesigns.ke@gmail.com
            </a>
          </p>

          <div className="mt-16 border-t border-white/10 pt-10 grid sm:grid-cols-3 gap-8 text-left text-sm text-white/50">
            <div>
              <span className="block text-lime font-mono text-xs mb-2 uppercase tracking-widest">Location</span>
            </div>
            <div>
              <span className="block text-lime font-mono text-xs mb-2 uppercase tracking-widest">Phone / WhatsApp</span>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="hover:text-white transition-colors">
                +254 182 319 029
              </a>
            </div>
            <div>
              <span className="block text-lime font-mono text-xs mb-2 uppercase tracking-widest">Email</span>
              <a href="mailto:trillionairedesigns.ke@gmail.com" className="hover:text-white transition-colors">
                trillionairedesigns.ke@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8">
            <span className="text-xs text-white/30 uppercase tracking-widest">What can we help with?</span>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {[
                { href: "/web-development", label: "Website Development" },
                { href: "/app-development", label: "App Development" },
                { href: "/systems",         label: "Systems Development" },
                { href: "/ai",              label: "AI Solutions" },
                { href: "/training",        label: "Coding & AI Training" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-full border border-white/20 px-4 py-2 text-xs text-white/60 hover:border-lime hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
