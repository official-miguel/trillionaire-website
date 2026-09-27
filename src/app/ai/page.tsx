import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "AI Development",
  description:
    "AI features built into what you already run — assistants, automation, and insight, shipped into real products.",
};

export default function AiPage() {
  return (
    <ServicePageTemplate
      content={{
        theme: "ai",
        eyebrow: "AI",
        title: "AI features built into what you already run.",
        description:
          "We build practical AI into real products — assistants, automation, and insight, not demos that never ship.",
        ctaLabel: "Build with AI",
        ctaHref: "/contact",
        heroImage: "/services/ai.png",
        included: [
          {
            title: "AI features, shipped",
            description: "Chat assistants, automation, and smart insights built into your product.",
          },
          {
            title: "Your data, your control",
            description: "AI built on your own data, with clear boundaries on what it can access.",
          },
          {
            title: "Integrated, not bolted on",
            description: "AI woven into your existing systems, not a separate tool nobody opens.",
          },
        ],
        proof: {
          label: "Proof of craft",
          title: "Soma AI — built into Bidii.",
          description:
            "An AI assistant embedded directly into the Bidii school system, helping staff and parents daily.",
          href: "/work/bidii",
          linkLabel: "Read the Bidii case study",
        },
      }}
    />
  );
}
