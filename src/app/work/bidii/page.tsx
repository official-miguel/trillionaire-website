import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bidii — Case Study",
  description:
    "How Trillionaire Designs built Bidii, a full school management system running in real schools today.",
};

export default function BidiiCaseStudyPage() {
  return (
    <main className="bg-ink text-white min-h-screen">
      <section className="px-6 pt-32 pb-16">
        <div className="mx-auto max-w-7xl">
          <Link href="/work" className="text-sm text-white/50 hover:text-white">
            ← Work
          </Link>
          <span className="mt-8 block font-mono text-sm text-lime">Flagship system</span>
          <h1 className="mt-4 text-5xl sm:text-7xl font-semibold tracking-tight max-w-4xl">
            Bidii — a school management system built to actually run schools.
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-white/60 max-w-2xl">
            Timetabling, assessments, accommodation, communication, and an embedded
            AI assistant — one system, used daily by admins, teachers, and parents.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl grid sm:grid-cols-3 gap-10">
          <div>
            <span className="font-mono text-sm text-lime">The problem</span>
            <p className="mt-4 text-white/70">
              Schools were running critical operations — timetabling, grading,
              boarding, communication — across disconnected spreadsheets and paper.
            </p>
          </div>
          <div>
            <span className="font-mono text-sm text-lime">The build</span>
            <p className="mt-4 text-white/70">
              A single system covering timetable generation, CBE assessments,
              accommodation management, and a built-in AI assistant, Soma AI,
              for staff and parents.
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
              { title: "Timetabling", desc: "Automated, constraint-based timetable generation for every class." },
              { title: "CBE assessments", desc: "Competency-based grading with its own marks and bands." },
              { title: "Accommodation", desc: "Dormitory and boarding management for day and boarding schools." },
              { title: "Soma AI", desc: "An embedded AI assistant helping staff and parents get answers fast." },
              { title: "Messaging", desc: "Direct communication between school, staff, and parents." },
              { title: "Role-based access", desc: "Super admins, principals, staff, teachers, and parents — each with their own view." },
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
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">
            Want a system built like this for your organisation?
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-lime px-8 py-4 text-sm font-semibold text-ink"
          >
            Start a project
          </Link>
        </div>
      </section>
    </main>
  );
}
