import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const BASE_URL = "https://trillionairedesigns.co.ke";
const PAGE_URL = `${BASE_URL}/training`;

export const metadata: Metadata = {
  title: "Coding & AI Training in Kenya — Programming Classes & Practical AI Skills",
  description:
    "Coding classes and AI training in Kenya by Trillionaire Designs. Hands-on programming and AI courses for individuals, teams, and organisations in Nairobi. Learn from developers who build real software.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Coding & AI Training in Kenya | Trillionaire Designs",
    description:
      "Practical coding and AI training in Nairobi. Hands-on sessions taught by developers who ship real AI products. For beginners, teams, and organisations.",
    url: PAGE_URL,
    type: "website",
  },
  keywords: [
    "coding classes Kenya",
    "programming training Kenya",
    "AI training Kenya",
    "coding bootcamp Nairobi",
    "programming courses Kenya",
    "web development training Kenya",
    "AI skills training Kenya",
    "software development training Nairobi",
    "beginner coding lessons Kenya",
    "practical AI training Kenya",
    "programming mentorship Kenya",
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}/#service`,
  name: "Coding and AI Training",
  alternateName: "Programming Training Kenya",
  description:
    "Practical coding and AI training in Kenya. Hands-on sessions for individuals and teams taught by software developers who build real AI products in production.",
  provider: {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "Trillionaire Designs",
  },
  serviceType: "Education and Training",
  areaServed: [
    { "@type": "Country", name: "Kenya" },
    { "@type": "AdministrativeArea", name: "Nairobi" },
  ],
  url: PAGE_URL,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Training Programmes",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Beginner Coding Classes" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development Training" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Tools and Workflows Training" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Team AI Training Workshops" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "One-on-one Programming Mentorship" } },
    ],
  },
};

export default function TrainingPage() {
  return (
    <ServicePageTemplate
      content={{
        theme: "training",
        eyebrow: "Coding & AI training",
        title: "Practical AI and coding skills for your team.",
        description:
          "Taught by developers who ship real software, not theory. Hands-on coding and AI training for individuals, organisations, and teams in Kenya who want to actually use these skills.",
        ctaLabel: "Book training",
        ctaHref: "/contact",
        heroImage: "/services/training.png",
        included: [
          {
            title: "Hands-on sessions",
            description:
              "Real tools, real workflows, real code — not slide decks about what AI might do.",
          },
          {
            title: "For teams or individuals",
            description:
              "Group workshops for organisations and businesses, or focused one-on-one mentorship.",
          },
          {
            title: "Follow-up support",
            description:
              "Questions after the session get answered. We don't disappear after the workshop.",
          },
        ],
        proof: {
          label: "Why us",
          title: "We teach what we build.",
          description:
            "Every concept we train on is something we've already shipped in a real product. Soma AI in Bidii is proof we build AI, not just talk about it.",
          href: "/work",
          linkLabel: "See our work",
        },
        jsonLd: serviceSchema,
        breadcrumbs: [{ name: "Coding & AI Training", href: "/training" }],
      }}
    />
  );
}
