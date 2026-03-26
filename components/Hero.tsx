"use client";

import { useEffect, useRef } from "react";

// Inline SVG components
const PawPrint = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="30" cy="20" rx="10" ry="12" />
    <ellipse cx="55" cy="15" rx="9" ry="11" />
    <ellipse cx="77" cy="22" rx="9" ry="11" />
    <ellipse cx="88" cy="45" rx="8" ry="10" />
    <path d="M50 40 C25 40 15 55 18 72 C20 85 32 90 50 90 C68 90 80 85 82 72 C85 55 75 40 50 40Z" />
  </svg>
);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    setTimeout(() => {
      el.style.transition = "all 0.8s ease-out";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-white"
    >
      {/* Background decorations */}
      <div
        className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #1B9AD2 0%, transparent 70%)",
        }}
      />

      {/* Paw prints decoration */}
      <PawPrint className="paw-watermark top-32 right-20 w-32 h-32 text-gray-400" />
      <PawPrint className="paw-watermark bottom-32 right-40 w-24 h-24 text-gray-400" />
      <PawPrint className="paw-watermark top-1/2 right-8 w-16 h-16 text-gray-400" />

      <div className="max-w-6xl mx-auto px-6 w-full" ref={heroRef}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Logo block */}
            <div className="inline-flex items-start gap-4">
              {/* ABC Logo SVG */}
              <img src="/images/abc-logo.png" alt="ABC Logo" className="w-42 h-30" />
            </div>

            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                A unified platform for managing animal birth control operations,
                veterinary records, field activities, and shelter management
                across Hyderabad.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#features"
                className="px-8 py-3.5 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #1B9AD2, #0e6fa0)" }}
              >
                Explore Features
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-full font-semibold border-2 text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
                style={{ borderColor: "#1B9AD2" }}
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right: Phone mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative background blob */}
              <div
                className="absolute inset-0 rounded-3xl scale-110"
                style={{
                  background:
                    "linear-gradient(135deg, #e0f2fe 0%, #fef3c7 100%)",
                  transform: "rotate(-6deg) scale(1.1)",
                }}
              />

              {/* Phone mockup */}
              <div
                className="relative phone-mockup w-56 mx-auto animate-float"
                style={{ animationDelay: "0s" }}
              >
                {/* Phone frame */}
                <div className="bg-gray-900 rounded-[36px] p-2.5 shadow-2xl">
                  <div className="bg-white rounded-[28px] overflow-hidden">
                    {/* Status bar */}
                    <div className="bg-gray-900 px-4 py-2 flex justify-between items-center">
                      <span className="text-white text-xs">9:41</span>
                      <div className="w-16 h-4 bg-gray-900 rounded-full" />
                      <div className="flex gap-1">
                        <div className="w-3 h-2 bg-white rounded-sm opacity-80" />
                        <div className="w-3 h-2 bg-white rounded-sm opacity-80" />
                      </div>
                    </div>
                    {/* App UI */}
                    <div className="p-3 space-y-2" style={{ minHeight: "380px" }}>
                      {/* Header */}
                      <div
                        className="rounded-xl p-3 text-white"
                        style={{ background: "linear-gradient(135deg, #1B9AD2, #0e6fa0)" }}
                      >
                        <div className="text-xs font-semibold opacity-80">ABC Portal</div>
                        <div className="text-sm font-bold mt-0.5">Dashboard</div>
                        <div className="flex gap-2 mt-2">
                          {["12", "8", "5"].map((n, i) => (
                            <div key={i} className="bg-white/20 rounded-lg px-2 py-1 text-center flex-1">
                              <div className="text-sm font-bold">{n}</div>
                              <div className="text-xs opacity-70">
                                {["Capture", "Release", "Surgery"][i]}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* Tasks */}
                      <div className="text-xs font-semibold text-gray-500 mt-2">Today&apos;s Tasks</div>
                      {[
                        { label: "New Capture Report", color: "#1B9AD2" },
                        { label: "Medical Update", color: "#F97316" },
                        { label: "Release Schedule", color: "#10b981" },
                        { label: "Surgery Log", color: "#8b5cf6" },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg"
                        >
                          <div
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{ background: item.color }}
                          />
                          <span className="text-xs text-gray-700">{item.label}</span>
                          <div className="ml-auto">
                            <svg viewBox="0 0 20 20" className="w-3 h-3 text-gray-300" fill="currentColor">
                              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      ))}
                      {/* Capture button */}
                      <button
                        className="w-full py-2.5 rounded-xl text-white text-xs font-bold mt-2"
                        style={{ background: "linear-gradient(135deg, #1B9AD2, #0e6fa0)" }}
                      >
                        + New Capture
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge - Field Staff */}
              <div
                className="absolute -left-4 top-1/4 bg-white rounded-2xl shadow-xl p-3 animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: "#1B9AD2" }}
                  >
                    FS
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-800">Field Staff</div>
                    <div className="text-xs text-gray-400">3 active now</div>
                  </div>
                </div>
              </div>

              {/* Floating badge - Vet */}
              <div
                className="absolute -right-4 bottom-1/3 bg-white rounded-2xl shadow-xl p-3 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: "#F97316" }}
                  >
                    🏥
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-800">Vet Records</div>
                    <div className="text-xs text-gray-400">Updated live</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,40 L1440,60 L0,60 Z"
            fill="#f8fafc"
          />
        </svg>
      </div>
    </section>
  );
}
