import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const BASE_URL = "https://trillionairedesigns.co.ke";
const PAGE_URL = `${BASE_URL}/ai`;

export const metadata: Metadata = {
  title: "AI Solutions & Development in Kenya — AI Automation, Chatbots & AI Agents",
  description:
    "AI solutions company in Kenya. Trillionaire Designs builds AI features, chatbots, AI agents, and automation tools for businesses in Nairobi and across Kenya. Practical AI — not demos.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "AI Solutions & Development in Kenya | Trillionaire Designs",
    description:
      "Practical AI features, chatbots, and automation built into real products. Nairobi-based AI development team with proven AI systems in production.",
    url: PAGE_URL,
    type: "website",
  },
  keywords: [
    "AI solutions Kenya",
    "AI development company Kenya",
    "AI automation Kenya",
    "AI chatbot development Kenya",
    "AI agents Kenya",
    "business AI solutions Nairobi",
    "AI integration services Kenya",
    "custom AI applications Kenya",
    "machine learning Kenya",
    "business process automation Kenya",
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}/#service`,
  name: "AI Solutions and Development",
  alternateName: "AI Development Kenya",
  description:
    "AI development services in Kenya. We build AI assistants, chatbots, automation workflows, and AI agents that integrate into existing business systems. Proven with Soma AI, embedded in the Bidii school management system.",
  provider: {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "Trillionaire Designs",
  },
  serviceType: "Artificial Intelligence Development",
  areaServed: [
    { "@type": "Country", name: "Kenya" },
    { "@type": "AdministrativeArea", name: "Nairobi" },
  ],
  url: PAGE_URL,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Chatbot Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Agent Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Process Automation with AI" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Integration into Existing Systems" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom AI Application Development" } },
    ],
  },
};

export default function AiPage() {
  return (
    <ServicePageTemplate
      content={{
        theme: "ai",
        eyebrow: "AI solutions",
        title: "AI features built into what you already run.",
        description:
          "We build practical AI into real products: assistants, chatbots, automation, and smart insights for Kenyan businesses. Not demos that never ship — production AI that people use every day.",
        ctaLabel: "Build with AI",
        ctaHref: "/contact",
        heroImage: "/services/ai.png",
        included: [
          {
            title: "AI features, shipped",
            description:
              "Chat assistants, automation workflows, and smart insights built into your actual product.",
          },
          {
            title: "Your data, your control",
            description:
              "AI built on your own data, with clear boundaries on what it can access and what it can do.",
          },
          {
            title: "Integrated, not bolted on",
            description:
              "AI woven into your existing systems and workflows — not a separate tool nobody opens.",
          },
        ],
        proof: {
          label: "Proof of craft",
          title: "Soma AI, built into Bidii.",
          description:
            "An AI assistant embedded directly into the Bidii school system, answering questions for staff and parents in production, every day.",
          href: "/work/bidii",
          linkLabel: "Read the Bidii case study",
        },
        jsonLd: serviceSchema,
        breadcrumbs: [{ name: "AI Solutions", href: "/ai" }],
      }}
    />
  );
}
