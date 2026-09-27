import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Web Development",
  description:
    "Fast, modern websites built to convert — designed and coded from scratch by Trillionaire Designs.",
};

export default function WebDevelopmentPage() {
  return (
    <ServicePageTemplate
      content={{
        theme: "webdev",
        eyebrow: "Web development",
        title: "Websites that load fast and convert.",
        description:
          "Marketing sites, landing pages, and web platforms built with modern tooling — no bloated templates, no slow builders.",
        ctaLabel: "Start a web project",
        ctaHref: "/contact",
        heroImage: "/services/web-development.png",
        included: [
          {
            title: "Design and build",
            description: "A site designed and coded from scratch to match your brand, not a theme.",
          },
          {
            title: "Performance first",
            description: "Fast load times and clean code, built to rank and convert.",
          },
          {
            title: "CMS when you need it",
            description: "Edit your own content without needing a developer for every change.",
          },
        ],
        proof: {
          label: "Proof of craft",
          title: "This site is the proof.",
          description:
            "Trillionaire Designs itself is built with the same rigor — modern stack, scroll-driven storytelling, and a design system, not a template.",
          href: "/work",
          linkLabel: "See more of our work",
        },
      }}
    />
  );
}
