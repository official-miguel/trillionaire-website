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
  "Trillionaire Designs is a technology and software development company based in Kenya, specializing in website development, mobile applications, custom software systems, AI-powered solutions, business automation, branding and digital innovation. We help businesses transform ideas into practical digital solutions.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Trillionaire Designs — Kenyan Software Development Company",
    template: "%s | Trillionaire Designs",
  },
  description: siteDescription,
  applicationName: "Trillionaire Designs",
  keywords: [
    "Trillionaire Designs",
    "Trillionaire Designs Kenya",
    "software development Kenya",
    "web development Kenya",
    "website development Nairobi",
    "website development company Kenya",
    "app development Kenya",
    "mobile app development Kenya",
    "custom software Kenya",
    "system development Kenya",
    "software systems Kenya",
    "AI solutions Kenya",
    "AI development Kenya",
    "AI development company Kenya",
    "AI automation Kenya",
    "AI automation services Kenya",
    "web application development Kenya",
    "custom software development Kenya",
    "coding training Kenya",
    "programming training Nairobi",
    "Bidii school management system",
    "software company Nairobi",
    "software development company Kenya",
    "digital solutions Kenya",
    "technology company Kenya",
  ],
  authors: [{ name: "Trillionaire Designs", url: BASE_URL }],
  creator: "Trillionaire Designs",
  publisher: "Trillionaire Designs",
  category: "technology",
  classification: "Software Development",
  alternates: {
    canonical: BASE_URL,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/brand/logo-square.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/brand/logo-square.png",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: "Trillionaire Designs",
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    title: "Trillionaire Designs — Kenyan Software Development Company",
    description: siteDescription,
    url: BASE_URL,
    siteName: "Trillionaire Designs",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: "/brand/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Trillionaire Designs — Kenyan Software Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trillionaire Designs — Kenyan Software Development Company",
    description: siteDescription,
    images: ["/brand/og-image.svg"],
    creator: "@TrillionaireKE",
    site: "@TrillionaireKE",
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
  verification: {
    // Add Google Search Console verification code here when available
    // google: 'your-verification-code',
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
      alternateName: "Trillionaire Designs Kenya",
      legalName: "Trillionaire Designs",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        "@id": `${BASE_URL}/#logo`,
        url: `${BASE_URL}/brand/logo-square.png`,
        contentUrl: `${BASE_URL}/brand/logo-square.png`,
        width: 512,
        height: 512,
        caption: "Trillionaire Designs Logo",
        inLanguage: "en-KE",
      },
      image: {
        "@type": "ImageObject",
        url: `${BASE_URL}/brand/og-image.svg`,
        width: 1200,
        height: 630,
      },
      description: siteDescription,
      slogan: "Design. Develop. Innovate.",
      foundingDate: "2023",
      foundingLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Nairobi",
          addressCountry: "KE",
        },
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressRegion: "Nairobi County",
        addressCountry: "KE",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "trillionairedesigns.ke@gmail.com",
          availableLanguage: ["English", "Swahili"],
        },
        {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: "+254182319029",
          contactOption: "TollFree",
          availableLanguage: ["English", "Swahili"],
        },
      ],
      areaServed: [
        { "@type": "Country", name: "Kenya" },
        { "@type": "Country", name: "East Africa" },
      ],
      serviceArea: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: -1.286389,
          longitude: 36.817223,
        },
        geoRadius: "5000000",
      },
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
        "Business Process Automation",
        "Software Consulting",
      ],
      knowsLanguage: ["en-KE", "sw-KE"],
      brand: {
        "@type": "Brand",
        name: "Trillionaire Designs",
        logo: {
          "@id": `${BASE_URL}/#logo`,
        },
      },
      sameAs: [
        // Add verified social media profiles here when available
      ],
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
