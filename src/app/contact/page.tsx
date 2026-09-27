import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us what you're building — we reply on WhatsApp, fast.",
};

const WHATSAPP_NUMBER = "254182319029";

export default function ContactPage() {
  const message = encodeURIComponent(
    "Hi Trillionaire Designs, I'd like to talk about a project."
  );
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <main className="bg-ink text-white min-h-screen flex flex-col justify-center px-6 py-32">
      <div className="mx-auto max-w-3xl text-center">
        <span className="font-mono text-sm text-lime">Contact</span>
        <h1 className="mt-4 text-5xl sm:text-7xl font-semibold tracking-tight">
          Let&apos;s talk.
        </h1>
        <p className="mt-8 text-lg sm:text-xl text-white/60">
          Tell us what you&apos;re building. We reply on WhatsApp, fast.
        </p>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-lime px-8 py-4 text-base font-semibold text-ink"
        >
          Message us on WhatsApp
        </a>
        <p className="mt-6 text-sm text-white/40">
          Or email{" "}
          <a href="mailto:trillionairedesigns.ke@gmail.com" className="text-white/70 underline">
            trillionairedesigns.ke@gmail.com
          </a>
        </p>
      </div>
    </main>
  );
}
