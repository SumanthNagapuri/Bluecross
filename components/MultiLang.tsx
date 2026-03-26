"use client";

import { useEffect, useRef, useState } from "react";

const screens = [
  {
    lang: "हिं",
    langFull: "Hindi",
    color: "#ec4899",
    bgGradient: "linear-gradient(135deg, #fdf2f8, #fce7f3)",
    tasks: ["पशु पकड़ना", "छोड़ना", "सर्जरी लॉग", "रिपोर्ट"],
    stats: ["8", "4", "3"],
  },
  {
    lang: "En",
    langFull: "English",
    color: "#1B9AD2",
    bgGradient: "linear-gradient(135deg, #eff6ff, #dbeafe)",
    tasks: ["New Capture", "Release Task", "Surgery Log", "Reports"],
    stats: ["12", "8", "5"],
    featured: true,
  },
  {
    lang: "తె",
    langFull: "Telugu",
    color: "#7c3aed",
    bgGradient: "linear-gradient(135deg, #f5f3ff, #ede9fe)",
    tasks: ["జంతువు పట్టుట", "విడుదల", "శస్త్రచికిత్స", "నివేదిక"],
    stats: ["10", "6", "4"],
  },
];

function PhoneMockup({
  screen,
  featured,
}: {
  screen: (typeof screens)[0];
  featured?: boolean;
}) {
  return (
    <div
      className={`relative transition-all duration-300 ${
        featured ? "scale-110 z-10" : "scale-95 opacity-80 hover:opacity-100 hover:scale-100"
      }`}
    >
      {/* Lang badge */}
      <div
        className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-20"
        style={{ background: screen.color }}
      >
        {screen.lang}
      </div>

      {/* Phone frame */}
      <div
        className="bg-gray-900 rounded-[32px] p-2 shadow-2xl"
        style={{ width: featured ? "180px" : "160px" }}
      >
        <div className="bg-white rounded-[26px] overflow-hidden">
          {/* Status bar */}
          <div className="bg-gray-900 px-3 py-1.5 flex justify-between items-center">
            <span className="text-white text-xs">9:41</span>
            <div className="w-12 h-3 bg-gray-900 rounded-full" />
            <span className="text-white text-xs">◼◼◼</span>
          </div>

          {/* App content */}
          <div className="p-2.5 space-y-1.5" style={{ minHeight: "340px", background: "#fafafa" }}>
            {/* Header */}
            <div
              className="rounded-xl p-2.5 text-white"
              style={{ background: screen.color }}
            >
              <div className="text-xs opacity-75">ABC Portal</div>
              <div className="text-sm font-bold mt-0.5">Dashboard</div>
              <div className="flex gap-1 mt-1.5">
                {screen.stats.map((s, i) => (
                  <div key={i} className="bg-white/20 rounded-lg px-1.5 py-0.5 flex-1 text-center">
                    <div className="text-xs font-bold">{s}</div>
                    <div className="text-xs opacity-70">
                      {["Cap", "Rel", "Sur"][i]}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Task items */}
            <div className="text-xs text-gray-400 font-medium px-0.5">Tasks</div>
            {screen.tasks.map((task, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 bg-white rounded-lg p-1.5 shadow-sm"
              >
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: screen.color }}
                />
                <span className="text-xs text-gray-700 truncate">{task}</span>
                <div className="ml-auto text-gray-300 text-xs">›</div>
              </div>
            ))}

            {/* Capture button */}
            <button
              className="w-full py-2 rounded-xl text-white text-xs font-bold mt-1"
              style={{ background: screen.color }}
            >
              + New Entry
            </button>
          </div>
        </div>
      </div>

      {/* Language label */}
      <div className="text-center mt-3">
        <span className="text-sm font-medium text-gray-500">{screen.langFull}</span>
      </div>
    </div>
  );
}

export default function MultiLang() {
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
      id="multilang"
      className="py-24 relative overflow-hidden"
      style={{ background: "#ffffff" }}
      ref={sectionRef}
    >
      {/* Watermark background */}
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-center gap-0 pl-6">
  {[...Array(4)].map((_, rowIndex) => (
    <div key={rowIndex} className="flex gap-2">
      {Array(12)
        .fill("BlueCross")
        .map((text, i) => (
          <span key={i} className="watermark-text">
            {text}
          </span>
        ))}
    </div>
  ))}
</div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className="text-center mb-16 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <span
            className="text-sm font-bold tracking-widest uppercase"
            style={{ color: "#1B9AD2" }}
          >
            Multilingual Support
          </span>
          <h2
            className="text-4xl font-bold text-gray-900 mt-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Works in Every{" "}
            <span className="gradient-text">Language You Speak</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            The app supports English, Hindi, and Telugu — ensuring every
            team member can use it comfortably in their native language.
          </p>
        </div>

        {/* Phones */}
        <div
          className="flex justify-center items-end gap-6 md:gap-12 transition-all duration-700 delay-200"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
          }}
        >
          {screens.map((screen) => (
            <PhoneMockup
              key={screen.langFull}
              screen={screen}
              featured={screen.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
