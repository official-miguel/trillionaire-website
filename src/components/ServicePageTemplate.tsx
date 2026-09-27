import Image from "next/image";
import Link from "next/link";

type Proof = {
  label: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
};

export type ServicePageContent = {
  theme: "webdev" | "appdev" | "systems" | "ai" | "training";
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  heroImage: string;
  included: { title: string; description: string }[];
  proof: Proof;
};

export default function ServicePageTemplate({ content }: { content: ServicePageContent }) {
  const { theme, eyebrow, title, description, ctaLabel, heroImage, included, proof } = content;

  return (
    <main data-theme={theme} className="bg-ink text-white">
      {/* Hero */}
      <section className="min-h-[85vh] flex items-center px-6 pt-28 pb-16">
        <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-mono text-sm text-accent">{eyebrow}</span>
            <h1 className="mt-4 text-5xl sm:text-6xl font-semibold tracking-tight leading-[0.95]">
              {title}
            </h1>
            <p className="mt-8 text-lg text-white/60 max-w-xl">{description}</p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold text-ink bg-accent"
            >
              {ctaLabel}
            </Link>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40">
            <Image
              src={heroImage}
              alt={`${title} illustration`}
              width={1200}
              height={750}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">What&apos;s included</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {included.map((item) => (
              <div key={item.title} className="border-t border-accent pt-4">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="mt-2 text-white/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <span className="font-mono text-sm text-accent">{proof.label}</span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight max-w-2xl">
            {proof.title}
          </h2>
          <p className="mt-6 text-white/60 text-lg max-w-2xl">{proof.description}</p>
          <Link
            href={proof.href}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent"
          >
            {proof.linkLabel} <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">
            Ready to start?
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-full px-8 py-4 text-sm font-semibold text-ink bg-accent"
          >
            {ctaLabel}
          </Link>
        </div>
      </section>
    </main>
  );
}
