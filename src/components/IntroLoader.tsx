"use client";

import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [mounted, setMounted] = useState(true);
  const [lidOpen, setLidOpen] = useState(false);
  const [showMark, setShowMark] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.body.style.overflow = "hidden";

    const finish = () => {
      document.body.style.overflow = "";
    };

    if (reduceMotion) {
      setLidOpen(true);
      setShowMark(true);
      const t = setTimeout(() => {
        setLeaving(true);
        setTimeout(() => {
          setMounted(false);
          finish();
        }, 300);
      }, 400);
      return () => clearTimeout(t);
    }

    const timers = [
      setTimeout(() => setLidOpen(true), 200),
      setTimeout(() => setShowMark(true), 1050),
      setTimeout(() => setLeaving(true), 2500),
      setTimeout(() => {
        setMounted(false);
        finish();
      }, 2900),
    ];

    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      role="presentation"
      aria-hidden="true"
      className="fixed inset-0 z-[999] flex items-center justify-center bg-ink transition-opacity duration-300 ease-out"
      style={{ opacity: leaving ? 0 : 1 }}
    >
      <div style={{ perspective: "1000px" }}>
        <div className="w-[220px] sm:w-[300px] relative">
          <div
            className="absolute inset-x-0 -bottom-6 h-16 rounded-full bg-lime/20 blur-2xl transition-opacity duration-700"
            style={{ opacity: showMark ? 1 : 0 }}
          />
          <div
            className="relative w-[220px] sm:w-[300px] h-[140px] sm:h-[190px] bg-[#141414] border border-[#2a2a2a] rounded-t-[10px] flex items-center justify-center overflow-hidden origin-bottom transition-transform ease-[cubic-bezier(.16,1,.3,1)] duration-[850ms]"
            style={{ transform: lidOpen ? "rotateX(0deg)" : "rotateX(92deg)" }}
          >
            <div
              className="flex items-center gap-2 transition-all duration-500 ease-out"
              style={{
                opacity: showMark ? 1 : 0,
                transform: showMark ? "translateY(0)" : "translateY(4px)",
              }}
            >
              <span
                className="text-white text-xl sm:text-2xl"
                style={{ fontFamily: "var(--font-script), cursive" }}
              >
                Trillionaire Designs
              </span>
              <span className="font-mono text-base sm:text-lg font-semibold text-lime">
                {"</>"}
              </span>
            </div>
          </div>
          <div className="relative w-[220px] sm:w-[300px] h-3 bg-[#1c1c1c] border border-[#2a2a2a] border-t-0 rounded-b-md" />
        </div>
      </div>
    </div>
  );
}
