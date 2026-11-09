import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const BASE_URL = "https://trillionairedesigns.co.ke";
const PAGE_URL = `${BASE_URL}/web-development`;

export const metadata: Metadata = {
  title: "Website Development — Professional Web Design & Development",
  description:
    "Professional website development company. Trillionaire Designs builds fast, modern, SEO-friendly websites and web platforms for businesses of any size.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Website Development | Trillionaire Designs",
    description:
      "Fast, modern websites built from scratch for growing businesses. No templates — custom design and development by a dedicated team.",
    url: PAGE_URL,
    type: "website",
  },
  keywords: [
    "website development",
    "web development company",
    "professional website design",
    "business website development",
    "web development services",
    "website designers",
    "e-commerce website",
    "landing page development",
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}/#service`,
  name: "Website Development",
  alternateName: "Web Development",
  description:
    "Professional website development services. We design and build fast, conversion-focused marketing sites, landing pages, e-commerce stores, and web platforms using modern technology.",
  provider: {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "Trillionaire Designs",
  },
  serviceType: "Web Development",
    url: PAGE_URL,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Website Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Website Design and Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-commerce Website Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landing Page Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "CMS Integration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Performance Optimisation" } },
    ],
  },
};

export default function WebDevelopmentPage() {
  return (
    <ServicePageTemplate
      content={{
        theme: "webdev",
        eyebrow: "Web development",
        title: "Websites that load fast and convert.",
        description:
          "Marketing sites, landing pages, and web platforms built with modern tooling for growing businesses. No bloated templates, no slow builders — custom design and code from scratch.",
        ctaLabel: "Start a web project",
        ctaHref: "/contact",
        heroImage: "/services/web-development.png",
        included: [
          {
            title: "Design and build",
            description:
              "A site designed and coded from scratch to match your brand and business goals, not a theme.",
          },
          {
            title: "Performance first",
            description:
              "Fast load times, clean semantic code, and SEO-friendly structure built to rank and convert.",
          },
          {
            title: "CMS when you need it",
            description:
              "Edit your own content without needing a developer for every update or blog post.",
          },
        ],
        proof: {
          label: "Proof of craft",
          title: "This site is the proof.",
          description:
            "Trillionaire Designs itself is built with the same rigour: modern stack, scroll-driven storytelling, and a custom design system — not a template.",
          href: "/work",
          linkLabel: "See more of our work",
        },
        jsonLd: serviceSchema,
        breadcrumbs: [{ name: "Web Development", href: "/web-development" }],
      }}
    />
  );
}
