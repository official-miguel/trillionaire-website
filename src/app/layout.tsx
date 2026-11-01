import type { Metadata } from "next";
import type React from "react";
import { Inter, Grand_Hotel } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import IntroLoader from "@/components/IntroLoader";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const grandHotel = Grand_Hotel({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

const BASE_URL = "https://trillionairedesigns.co.ke";

const siteDescription =
  "Trillionaire Designs is a Nairobi-based software company building websites, mobile apps, custom systems, and AI solutions for businesses in Kenya and beyond.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Trillionaire Designs — Web, App, Systems & AI Development in Kenya",
    template: "%s | Trillionaire Designs",
  },
  description: siteDescription,
  keywords: [
    "Trillionaire Designs",
    "software development Kenya",
    "web development Kenya",
    "website development Nairobi",
    "app development Kenya",
    "mobile app development Kenya",
    "custom software Kenya",
    "system development Kenya",
    "AI solutions Kenya",
    "AI development Kenya",
    "AI automation Kenya",
    "coding training Kenya",
    "programming training Nairobi",
    "Bidii school management system",
    "software company Nairobi",
    "digital solutions Kenya",
  ],
  authors: [{ name: "Trillionaire Designs", url: BASE_URL }],
  creator: "Trillionaire Designs",
  publisher: "Trillionaire Designs",
  category: "technology",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Trillionaire Designs — Web, App, Systems & AI Development in Kenya",
    description: siteDescription,
    url: BASE_URL,
    siteName: "Trillionaire Designs",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: "/brand/logo-laptop.webp",
        width: 1680,
        height: 945,
        alt: "Trillionaire Designs — Software Development in Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trillionaire Designs — Web, App, Systems & AI Development in Kenya",
    description: siteDescription,
    images: ["/brand/logo-laptop.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD: Organization + WebSite structured data
const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Trillionaire Designs",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/brand/logo-laptop.webp`,
        width: 1680,
        height: 945,
      },
      description: siteDescription,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "trillionairedesigns.ke@gmail.com",
          availableLanguage: ["English"],
        },
        {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: "+254182319029",
          contactOption: "TollFree",
          availableLanguage: ["English"],
        },
      ],
      areaServed: [
        { "@type": "Country", name: "Kenya" },
        { "@type": "AdministrativeArea", name: "Nairobi" },
      ],
      knowsAbout: [
        "Web Development",
        "Mobile App Development",
        "Custom Software Development",
        "System Development",
        "Artificial Intelligence",
        "AI Automation",
        "AI Chatbots",
        "Coding Training",
        "Programming Education",
        "Digital Solutions",
      ],
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Trillionaire Designs",
      description: siteDescription,
      publisher: { "@id": `${BASE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/?s={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
      inLanguage: "en-KE",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${grandHotel.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <IntroLoader />
        <SmoothScroll>
          <Nav />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
