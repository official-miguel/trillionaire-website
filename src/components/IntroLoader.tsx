"use client";

import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [visible, setVisible] = useState(false);
  const [lidOpen, setLidOpen] = useState(false);
  const [showMark, setShowMark] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("td-intro-seen")) return;

    setVisible(true);
    document.body.style.overflow = "hidden";

    const t1 = setTimeout(() => setLidOpen(true), 150);
    const t2 = setTimeout(() => setShowMark(true), 950);
    const t3 = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
      sessionStorage.setItem("td-intro-seen", "1");
    }, 2400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-ink transition-opacity duration-500">
      <div style={{ perspective: "900px" }}>
        <div className="w-[220px] sm:w-[300px]">
          <div
            className="w-[220px] sm:w-[300px] h-[140px] sm:h-[190px] bg-[#141414] border border-[#2a2a2a] rounded-t-[10px] flex items-center justify-center overflow-hidden origin-bottom transition-transform ease-[cubic-bezier(.2,.8,.2,1)] duration-[900ms]"
            style={{ transform: lidOpen ? "rotateX(0deg)" : "rotateX(90deg)" }}
          >
            <div
              className="flex items-center gap-2 transition-opacity duration-500"
              style={{ opacity: showMark ? 1 : 0 }}
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
          <div className="w-[220px] sm:w-[300px] h-3 bg-[#1c1c1c] border border-[#2a2a2a] border-t-0 rounded-b-md" />
        </div>
      </div>
    </div>
  );
}
