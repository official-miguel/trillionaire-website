import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://www.trillionairedesigns.co.ke";
const PAGE_URL = `${BASE_URL}/work/bidii`;

export const metadata: Metadata = {
  title: "Bidii School Management System — Case Study by Trillionaire Designs",
  description:
    "How Trillionaire Designs built Bidii — a full school management system with timetabling, competency-based assessments, accommodation, AI assistant, and role-based access, running in real schools today.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Bidii School Management System Case Study | Trillionaire Designs",
    description:
      "Bidii is a full school management system built by Trillionaire Designs — covering timetabling, assessments, accommodation, and an embedded AI assistant. In production.",
    url: PAGE_URL,
    type: "article",
  },
  keywords: [
    "Bidii school management system",
    "school management system",
    "Soma AI school assistant",
    "competency-based assessment system",
    "timetabling software",
    "school software",
    "Trillionaire Designs case study",
  ],
};

const caseStudySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": `${PAGE_URL}/#software`,
      name: "Bidii",
      description:
        "Bidii is a full school management system covering timetabling, competency-based assessments, boarding accommodation, staff and parent communication, and an embedded AI assistant (Soma AI). Running in production in schools.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, iOS, Android",
      offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
      creator: { "@id": `${BASE_URL}/#organization` },
      featureList: [
        "Automated timetable generation",
        "Competency-based assessments and grading",
        "Boarding accommodation management",
        "Parent and staff communication",
        "Embedded AI assistant (Soma AI)",
        "Role-based access control",
      ],
      keywords: "school management system, timetabling, competency-based assessment, AI assistant",
    },
    {
      "@type": "Article",
      "@id": `${PAGE_URL}/#article`,
      headline: "Bidii is a school management system built to actually run schools.",
      description:
        "How Trillionaire Designs built Bidii — a full school management system with timetabling, competency-based assessments, boarding management, and Soma AI, now running in real schools.",
      url: PAGE_URL,
      author: { "@id": `${BASE_URL}/#organization` },
      publisher: { "@id": `${BASE_URL}/#organization` },
      about: { "@id": `${PAGE_URL}/#software` },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home",  item: BASE_URL      },
        { "@type": "ListItem", position: 2, name: "Work",  item: `${BASE_URL}/work` },
        { "@type": "ListItem", position: 3, name: "Bidii", item: PAGE_URL       },
      ],
    },
  ],
};

export default function BidiiCaseStudyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <main className="bg-ink text-white min-h-screen">
        <section className="px-6 pt-32 pb-16">
          <div className="mx-auto max-w-7xl">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-white/40">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="flex items-center gap-2"><span aria-hidden>/</span><Link href="/work" className="hover:text-white transition-colors">Work</Link></li>
                <li className="flex items-center gap-2"><span aria-hidden>/</span><span className="text-white/70" aria-current="page">Bidii</span></li>
              </ol>
            </nav>

            <span className="block font-mono text-sm text-lime">Flagship system</span>
            <h1 className="mt-4 text-5xl sm:text-7xl font-semibold tracking-tight max-w-4xl">
              Bidii is a school management system built to actually run schools.
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-white/60 max-w-2xl">
              Timetabling, assessments, accommodation, communication, and an embedded
              AI assistant — all in one system used daily by admins, teachers, and parents
             .
            </p>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-24">
          <div className="mx-auto max-w-7xl grid sm:grid-cols-3 gap-10">
            <div>
              <span className="font-mono text-sm text-lime">The problem</span>
              <p className="mt-4 text-white/70">
                Schools were running critical operations — from timetabling and grading
                to boarding and communication — across disconnected spreadsheets and paper,
                with no central system.
              </p>
            </div>
            <div>
              <span className="font-mono text-sm text-lime">The build</span>
              <p className="mt-4 text-white/70">
                A single integrated system covering timetable generation, competency-based assessments,
                accommodation management, and a built-in AI assistant — Soma AI — for
                staff and parents.
              </p>
            </div>
            <div>
              <span className="font-mono text-sm text-lime">The result</span>
              <p className="mt-4 text-white/70">
                A production system running in real schools today, with role-based
                access for super admins, principals, staff, teachers, and parents.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight max-w-2xl">
              What&apos;s inside Bidii
            </h2>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { title: "Timetabling",        desc: "Automated, constraint-based timetable generation for every class."                         },
                { title: "Assessments",        desc: "Competency-based grading with its own marks and bands, configurable to your curriculum." },
                { title: "Accommodation",      desc: "Dormitory and boarding management for day and boarding schools."                           },
                { title: "Soma AI",            desc: "An embedded AI assistant helping staff and parents get answers fast, inside the system."   },
                { title: "Messaging",          desc: "Direct communication between school, staff, and parents — no third-party app required."    },
                { title: "Role-based access",  desc: "Super admins, principals, staff, teachers, and parents — each with their own secure view."  },
              ].map((f) => (
                <div key={f.title} className="border-t border-lime pt-4">
                  <h3 className="font-semibold text-lg">{f.title}</h3>
                  <p className="mt-2 text-white/60">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-24">
          <div className="mx-auto max-w-7xl grid sm:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-mono text-sm text-lime">AI in production</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
                Soma AI — built into the system, not bolted on.
              </h2>
              <p className="mt-6 text-white/60">
                Soma AI is an AI assistant embedded directly inside Bidii. Staff and parents
                ask it questions about schedules, assessments, and school information — and
                it answers using the school&apos;s own data. It was built by the same team
                that now offers AI solutions to other organisations.
              </p>
              <Link
                href="/ai"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-lime"
              >
                See our AI services <span aria-hidden>→</span>
              </Link>
            </div>
            <div>
              <span className="font-mono text-sm text-lime">School management</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
                Built around your curriculum, from the ground up.
              </h2>
              <p className="mt-6 text-white/60">
                Bidii&apos;s assessment module is built for competency-based
                curricula, handling the grading bands, strands,
                and reporting formats that generic software doesn&apos;t support.
              </p>
              <Link
                href="/systems"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-lime"
              >
                See our systems work <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-24">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">
              Want a system built like this for your organisation?
            </h2>
            <p className="mt-6 text-white/60 max-w-xl mx-auto">
              We build custom software for schools, businesses, and organisations.
              Tell us what you need.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-lime px-8 py-4 text-sm font-semibold text-ink"
              >
                Start a project
              </Link>
              <Link
                href="/systems"
                className="inline-flex items-center rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white"
              >
                Systems development
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
