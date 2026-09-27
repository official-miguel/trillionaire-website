import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Systems Development",
  description:
    "Custom software built around how your organisation actually runs — the same way we built Bidii.",
};

export default function SystemsPage() {
  return (
    <ServicePageTemplate
      content={{
        theme: "systems",
        eyebrow: "Systems development",
        title: "Custom software for how your organisation actually runs.",
        description:
          "Not off-the-shelf. Systems built around your real workflows — the same way we built Bidii for schools.",
        ctaLabel: "Start a systems project",
        ctaHref: "/contact",
        heroImage: "/services/systems.png",
        included: [
          {
            title: "Built around your workflow",
            description: "We map how your team actually works before writing a line of code.",
          },
          {
            title: "Role-based access",
            description: "Every user sees exactly what they need — admins, staff, and end users.",
          },
          {
            title: "Long-term support",
            description: "Systems that keep running and keep evolving after launch.",
          },
        ],
        proof: {
          label: "Flagship system",
          title: "Bidii — a full school management system.",
          description:
            "Timetabling, assessments, accommodation, and communication, running in real schools today.",
          href: "/work/bidii",
          linkLabel: "Read the Bidii case study",
        },
      }}
    />
  );
}
