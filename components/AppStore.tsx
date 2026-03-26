"use client";

import { useEffect, useRef, useState } from "react";

const AppStoreButton = ({
  store,
}: {
  store: "apple" | "google";
}) => {
  const isApple = store === "apple";
  return (
    <a
      href="#"
      className="flex items-center gap-3 px-6 py-3.5 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
      style={{
        background: isApple ? "#000000" : "#000000",
        minWidth: "180px",
      }}
    >
      {isApple ? (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
          <path d="M3.18 23.76c.3.17.64.24.99.19l13.07-7.54-2.83-2.83-11.23 10.18zm14.14-9.41L4.1.54C3.77.36 3.4.3 3.05.38l11.97 11.97 2.3-1.33-.14-.67zm3.26-1.88L18.3 11.1l-2.21 1.27 2.21 2.21 2.28-1.32c.65-.38.65-1.33 0-1.71l.0-.08zM3.05.38L.73 1.7C.08 2.08.08 3.03.73 3.41l2.32 1.34L14.97 12 3.05.38z" />
        </svg>
      )}
      <div>
        <div className="text-xs opacity-70">
          {isApple ? "Download on the" : "Get it on"}
        </div>
        <div className="text-sm font-bold">
          {isApple ? "App Store" : "Google Play"}
        </div>
      </div>
    </a>
  );
};

function MiniPhone({ delay = 0 }: { delay?: number }) {
  return (
    <div
      className="bg-gray-900 rounded-[28px] p-2 shadow-xl animate-float"
      style={{ animationDelay: `${delay}s`, width: "140px" }}
    >
      <div className="bg-white rounded-[22px] overflow-hidden">
        <div className="bg-gray-900 px-3 py-1.5 flex justify-between">
          <span className="text-white text-xs">9:41</span>
          <span className="text-white text-xs">◼◼◼</span>
        </div>
        <div className="p-2 space-y-1.5" style={{ minHeight: "220px" }}>
          <div
            className="rounded-lg p-2 text-white text-xs font-bold"
            style={{ background: "linear-gradient(135deg, #1B9AD2, #0e6fa0)" }}
          >
            Dashboard
          </div>
          <div className="space-y-1">
            {["Capture", "Release", "Surgery", "Report"].map((item) => (
              <div key={item} className="flex items-center gap-1 bg-gray-50 rounded-md p-1">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span className="text-xs text-gray-600">{item}</span>
              </div>
            ))}
          </div>
          <button
            className="w-full py-1.5 rounded-lg text-white text-xs font-bold"
            style={{ background: "#1B9AD2" }}
          >
            + New
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AppStore() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="download"
      className="py-24 relative overflow-hidden"
      style={{ background: "#f8fafc" }}
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className="text-center mb-12 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <h2
            className="text-3xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Supports{" "}
            <span
              className="font-black"
              style={{ color: "#F97316" }}
            >
              Both
            </span>{" "}
            <span className="gradient-text">Versions</span>
          </h2>
          <p className="text-gray-500 mt-3">
            Available on iOS and Android — download now and get started.
          </p>
        </div>

        {/* Content */}
        <div
          className="flex flex-col lg:flex-row items-center justify-center gap-16 transition-all duration-700 delay-200"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
          }}
        >
          {/* Phones */}
          <div className="flex items-end gap-6">
            <MiniPhone delay={0} />
            <MiniPhone delay={0.8} />
          </div>

          {/* Download buttons */}
          <div className="space-y-4 flex flex-col items-center">
            <div
              className="text-sm font-semibold text-gray-500 mb-2 tracking-wide uppercase"
            >
              Download Now
            </div>
            <AppStoreButton store="apple" />
            <AppStoreButton store="google" />

            <div className="mt-6 text-center">
              <div className="text-xs text-gray-400">
                Free to download • Available in 3 languages
              </div>
              <div className="flex items-center justify-center gap-1 mt-2">
                {Array(5).fill("★").map((s, i) => (
                  <span key={i} className="text-yellow-400 text-sm">{s}</span>
                ))}
                <span className="text-xs text-gray-400 ml-1">4.8/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
