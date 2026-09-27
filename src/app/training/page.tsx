import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "AI Training",
  description:
    "Practical AI skills for your team, taught by people who ship AI. Hands-on training for organisations and individuals.",
};

export default function TrainingPage() {
  return (
    <ServicePageTemplate
      content={{
        theme: "training",
        eyebrow: "AI training",
        title: "Practical AI skills for your team.",
        description:
          "Taught by people who ship AI, not theory. Hands-on training for organisations and individuals who want to actually use AI well.",
        ctaLabel: "Book training",
        ctaHref: "/contact",
        heroImage: "/services/training.png",
        included: [
          {
            title: "Hands-on sessions",
            description: "Real tools, real workflows, not slide decks about AI.",
          },
          {
            title: "For teams or individuals",
            description: "Group workshops for organisations, or one-on-one for individuals.",
          },
          {
            title: "Follow-up support",
            description: "Questions after the session don't go unanswered.",
          },
        ],
        proof: {
          label: "Why us",
          title: "We teach what we build.",
          description:
            "Every AI concept we train on is something we've already shipped in a real product like Bidii.",
          href: "/work",
          linkLabel: "See our work",
        },
      }}
    />
  );
}
