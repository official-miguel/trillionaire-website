import type { Metadata } from "next";
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

const siteDescription =
  "Trillionaire Designs is a Nairobi-based studio building websites, apps, custom systems, and AI — the same rigor used to build Bidii, a school management system running in real schools today.";

export const metadata: Metadata = {
  metadataBase: new URL("https://trillionairedesigns.co.ke"),
  title: {
    default: "Trillionaire Designs — Web, App, Systems & AI Development in Kenya",
    template: "%s — Trillionaire Designs",
  },
  description: siteDescription,
  keywords: [
    "Trillionaire Designs",
    "web development Kenya",
    "app development Kenya",
    "software development Nairobi",
    "AI development Kenya",
    "AI training Kenya",
    "Bidii school management system",
  ],
  authors: [{ name: "Trillionaire Designs" }],
  openGraph: {
    title: "Trillionaire Designs — Web, App, Systems & AI Development in Kenya",
    description: siteDescription,
    url: "https://trillionairedesigns.co.ke",
    siteName: "Trillionaire Designs",
    locale: "en_KE",
    type: "website",
    images: ["/brand/logo-laptop.webp"],
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
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${grandHotel.variable} h-full antialiased`}>
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
