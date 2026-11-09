import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const BASE_URL = "https://www.trillionairedesigns.co.ke";
const PAGE_URL = `${BASE_URL}/app-development`;

export const metadata: Metadata = {
  title: "Mobile App Development — iOS, Android & Web Apps",
  description:
    "Mobile app development company. Trillionaire Designs builds cross-platform iOS and Android apps, web apps, and full-stack backends for businesses of any size.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Mobile App Development | Trillionaire Designs",
    description:
      "Cross-platform mobile apps for iOS and Android, built end to end with backend, store submission, and ongoing support. team.",
    url: PAGE_URL,
    type: "website",
  },
  keywords: [
    "mobile app development",
    "app development company",
    "iOS app development",
    "Android app development",
    "cross-platform app development",
    "web app development",
    "React Native app development",
    "app development services",
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}/#service`,
  name: "Mobile App Development",
  alternateName: "App Development",
  description:
    "Mobile and web app development services. We build cross-platform iOS, Android, and web applications end to end, including backend, APIs, and app store submission.",
  provider: {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "Trillionaire Designs",
  },
  serviceType: "Mobile App Development",
    url: PAGE_URL,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "App Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cross-platform Mobile App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "iOS App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Android App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Application Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "App Store Submission" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Backend and API Development" } },
    ],
  },
};

export default function AppDevelopmentPage() {
  return (
    <ServicePageTemplate
      content={{
        theme: "appdev",
        eyebrow: "App development",
        title: "Mobile and web apps built end to end.",
        description:
          "From first screen to production release, we build cross-platform apps for real users on real devices — with real business logic and a full backend behind them. iOS, Android, and web.",
        ctaLabel: "Start an app project",
        ctaHref: "/contact",
        heroImage: "/services/app-development.png",
        included: [
          {
            title: "Cross-platform builds",
            description:
              "One codebase for iOS, Android, and web where it makes sense, so your budget goes further.",
          },
          {
            title: "Backend included",
            description:
              "APIs, databases, and auth — not just a front-end shell without a working system behind it.",
          },
          {
            title: "Store-ready delivery",
            description:
              "Play Store and App Store submission handled by us, not left to you to figure out last.",
          },
        ],
        proof: {
          label: "Proof of craft",
          title: "Bidii runs as a full mobile and web app.",
          description:
            "Parents, teachers, and admins use dedicated app experiences inside Bidii, built and maintained by us in production.",
          href: "/work/bidii",
          linkLabel: "Read the Bidii case study",
        },
        jsonLd: serviceSchema,
        breadcrumbs: [{ name: "App Development", href: "/app-development" }],
      }}
    />
  );
}
