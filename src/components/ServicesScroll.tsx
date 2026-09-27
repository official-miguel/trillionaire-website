"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  WebDevGraphic,
  AppDevGraphic,
  SystemsGraphic,
  AiGraphic,
  TrainingGraphic,
} from "./ServiceGraphics";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    n: "01",
    title: "Web development",
    desc: "Fast, modern websites built to convert, not templates.",
    href: "/web-development",
    accent: "var(--accent-webdev)",
    Graphic: WebDevGraphic,
  },
  {
    n: "02",
    title: "App development",
    desc: "Mobile and web apps for real businesses, built end to end.",
    href: "/app-development",
    accent: "var(--accent-appdev)",
    Graphic: AppDevGraphic,
  },
  {
    n: "03",
    title: "Systems development",
    desc: "Custom software for how your organisation actually runs, like Bidii.",
    href: "/systems",
    accent: "var(--accent-systems)",
    Graphic: SystemsGraphic,
  },
  {
    n: "04",
    title: "AI",
    desc: "AI features and products built into what you already run.",
    href: "/ai",
    accent: "var(--accent-ai)",
    Graphic: AiGraphic,
  },
  {
    n: "05",
    title: "AI training",
    desc: "Practical AI skills for your team, taught by people who ship AI.",
    href: "/training",
    accent: "var(--accent-training)",
    Graphic: TrainingGraphic,
  },
];

export default function ServicesScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panels = panelsRef.current;
      panels.forEach((panel, i) => {
        if (i === panels.length - 1) {
          ScrollTrigger.create({
            trigger: panel,
            start: "top top",
            end: "+=100%",
            pin: true,
            pinSpacing: false,
          });
          return;
        }
        gsap.to(panel, {
          yPercent: -100,
          ease: "none",
          scrollTrigger: {
            trigger: panel,
            start: "top top",
            endTrigger: containerRef.current,
            end: "bottom top",
            scrub: true,
            pin: true,
            pinSpacing: false,
          },
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-ink">
      {services.map((s, i) => (
        <div
          key={s.n}
          ref={(el) => {
            if (el) panelsRef.current[i] = el;
          }}
          className="h-screen w-full flex items-center border-t border-white/10"
          style={{ backgroundColor: "var(--ink)" }}
        >
          <div className="mx-auto max-w-7xl w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="font-mono text-sm" style={{ color: s.accent }}>
                {s.n}
              </span>
              <h3 className="mt-4 text-4xl sm:text-6xl font-semibold text-white tracking-tight">
                {s.title}
              </h3>
              <p className="mt-4 text-white/60 text-lg max-w-md">{s.desc}</p>
              <Link
                href={s.href}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide"
                style={{ color: s.accent }}
              >
                Explore {s.title.toLowerCase()} <span aria-hidden>→</span>
              </Link>
            </div>
            <div
              className="hidden lg:block h-72 rounded-2xl"
              style={{ backgroundColor: `color-mix(in srgb, ${s.accent} 6%, transparent)` }}
            >
              <s.Graphic accent={s.accent} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
