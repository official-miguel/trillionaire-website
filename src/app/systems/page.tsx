import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const BASE_URL = "https://trillionairedesigns.co.ke";
const PAGE_URL = `${BASE_URL}/systems`;

export const metadata: Metadata = {
  title: "Custom Software & System Development in Kenya — Business Management Systems",
  description:
    "Custom software and business system development company in Kenya. Trillionaire Designs builds school management systems, business management systems, and tailored digital systems for organisations in Nairobi and Kenya.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Custom System Development in Kenya | Trillionaire Designs",
    description:
      "Bespoke business software and management systems built around how your organisation actually runs. From school systems to business platforms — Nairobi-based development team.",
    url: PAGE_URL,
    type: "website",
  },
  keywords: [
    "custom software development Kenya",
    "system development company Kenya",
    "business management system Kenya",
    "school management system Kenya",
    "custom business software Nairobi",
    "ERP development Kenya",
    "web application development Kenya",
    "software development company Nairobi",
    "bespoke software Kenya",
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}/#service`,
  name: "Custom Software and System Development",
  alternateName: "Business System Development Kenya",
  description:
    "Custom software and business system development in Kenya. We build school management systems, business management platforms, and enterprise software tailored to how your organisation actually works.",
  provider: {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "Trillionaire Designs",
  },
  serviceType: "Custom Software Development",
  areaServed: [
    { "@type": "Country", name: "Kenya" },
    { "@type": "AdministrativeArea", name: "Nairobi" },
  ],
  url: PAGE_URL,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "System Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "School Management System Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Management System Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom ERP Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Role-based Access Control Systems" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Database Design" } },
    ],
  },
};

export default function SystemsPage() {
  return (
    <ServicePageTemplate
      content={{
        theme: "systems",
        eyebrow: "Systems development",
        title: "Custom software for how your organisation actually runs.",
        description:
          "Not off-the-shelf. Business management systems, school systems, and enterprise software built around your real workflows — the same approach we used to build Bidii.",
        ctaLabel: "Start a systems project",
        ctaHref: "/contact",
        heroImage: "/services/systems.png",
        included: [
          {
            title: "Built around your workflow",
            description:
              "We map how your team actually works before writing a single line of code.",
          },
          {
            title: "Role-based access",
            description:
              "Every user sees exactly what they need — whether admin, staff, or end user.",
          },
          {
            title: "Long-term support",
            description:
              "Systems that keep running and keep evolving after launch, not abandoned after handover.",
          },
        ],
        proof: {
          label: "Flagship system",
          title: "Bidii is a full school management system.",
          description:
            "Timetabling, assessments, accommodation, and communication — running in real schools in Kenya today.",
          href: "/work/bidii",
          linkLabel: "Read the Bidii case study",
        },
        jsonLd: serviceSchema,
        breadcrumbs: [{ name: "Systems Development", href: "/systems" }],
      }}
    />
  );
}
