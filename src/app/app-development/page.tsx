import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "App Development",
  description:
    "Mobile and web apps built end to end — backend, store submission, and everything in between.",
};

export default function AppDevelopmentPage() {
  return (
    <ServicePageTemplate
      content={{
        theme: "appdev",
        eyebrow: "App development",
        title: "Mobile and web apps built end to end.",
        description:
          "From first screen to production release — apps built for real users, on real devices, with real business logic behind them.",
        ctaLabel: "Start an app project",
        ctaHref: "/contact",
        heroImage: "/services/app-development.png",
        included: [
          {
            title: "Cross-platform builds",
            description: "One codebase for iOS, Android, and web where it makes sense.",
          },
          {
            title: "Backend included",
            description: "APIs, databases, and auth — not just a front-end shell.",
          },
          {
            title: "Store-ready delivery",
            description: "Play Store and App Store submission handled, not left to you.",
          },
        ],
        proof: {
          label: "Proof of craft",
          title: "Bidii runs as a full mobile and web app.",
          description:
            "Parents, teachers, and admins all use dedicated app experiences inside Bidii — built and maintained by us.",
          href: "/work/bidii",
          linkLabel: "Read the Bidii case study",
        },
      }}
    />
  );
}
