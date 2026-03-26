"use client";

import { useEffect, useRef } from "react";

const features = [
  {
    tag: "FIELD STAFF",
    title: "Real-Time Field Operations",
    description:
      "Field workers use the mobile app to update capture, release, and shelter tasks in real time. This helps the team stay organized and every animal record is tracked properly without paperwork.",
    theme: "dark",
    icon: "📱",
    accent: "#1B9AD2",
  },
  {
    tag: "VETERINARY DOCTORS",
    title: "Medical Records in One Place",
    description:
      "Doctors can record surgery details, health status, and treatment updates directly from the app. This keeps every animal's medical history clear, accurate, and easy to access when needed.",
    theme: "yellow",
    icon: "🏥",
    accent: "#d97706",
  },
  {
    tag: "MANAGEMENT & ADMIN",
    title: "Centralized Web Dashboard",
    description:
      "The web dashboard allows management to monitor teams, vehicles, schedules, and reports from one place. This makes planning easier and helps the organization run daily operations smoothly.",
    theme: "light",
    icon: "💻",
    accent: "#1B9AD2",
  },
  {
    tag: "REPORTING & TRACKING",
    title: "Smart Analytics & Reports",
    description:
      "All capture, release, and surgery data is stored automatically in the system. With proper reports and analytics, the organization can track progress, improve planning, and work more efficiently.",
    theme: "light",
    icon: "📊",
    accent: "#F97316",
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".feature-animate");
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = "1";
                (card as HTMLElement).style.transform = "translateY(0)";
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-24 bg-slate-50" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span
            className="text-sm font-bold tracking-widest uppercase"
            style={{ color: "#1B9AD2" }}
          >
            Platform Features
          </span>
          <h2
            className="text-4xl font-bold text-gray-900 mt-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Everything You Need,{" "}
            <span className="gradient-text">All in One Place</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Designed for every role in the organization — from field staff to
            veterinary doctors to management.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={feature.tag} feature={feature} index={i} />
          ))}
        </div>

        {/* Center report callout */}
        <div
          className="mt-8 rounded-3xl p-10 text-center feature-animate"
          style={{
            opacity: 0,
            transform: "translateY(30px)",
            transition: "all 0.6s ease-out",
            background: "linear-gradient(135deg, #1B9AD2 0%, #0e6fa0 100%)",
          }}
        >
          <div className="text-4xl mb-4">📈</div>
          <h3
            className="text-2xl lg:text-3xl font-bold text-white leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            All capture, release, and surgery data is stored automatically in
            the system.
          </h3>
          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mx-auto">
            With proper reports and analytics, the organization can track
            progress, improve planning, and work more efficiently.
          </p>
          <div className="mt-6 inline-block">
            <span className="text-white/70 text-sm font-semibold tracking-wide uppercase border border-white/30 rounded-full px-6 py-2">
              Clear Reports &amp; Better Decisions
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const isDark = feature.theme === "dark";
  const isYellow = feature.theme === "yellow";

  const bg = isDark
    ? "#1a1a2e"
    : isYellow
    ? "#FEF3C7"
    : "#ffffff";
  const textColor = isDark ? "#ffffff" : "#1a1a2e";
  const tagColor = isDark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.4)";

  return (
    <div
      className="feature-card feature-animate rounded-3xl p-8 relative overflow-hidden"
      style={{
        background: bg,
        opacity: 0,
        transform: "translateY(30px)",
        transition: `all 0.6s ease-out ${index * 0.1}s`,
      }}
    >
      {/* Decorative circle */}
      <div
        className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-10"
        style={{ background: feature.accent }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: tagColor }}
          >
            {feature.tag}
          </span>
          <span className="text-3xl">{feature.icon}</span>
        </div>

        <h3
          className="text-xl font-bold mb-3"
          style={{
            color: isYellow ? feature.accent : isDark ? "#ffffff" : feature.accent,
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {feature.title}
        </h3>

        <p className="text-sm leading-relaxed" style={{ color: isDark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)" }}>
          {feature.description}
        </p>

        {isDark && (
          <div className="mt-6">
            <div className="bg-white/10 rounded-2xl p-4 space-y-2">
              {["Task updated", "New capture logged", "Release confirmed"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs text-white/70"
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "#1B9AD2" }}
                    />
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {isYellow && (
          <div className="mt-6">
            <div className="bg-white/60 rounded-2xl p-4 space-y-2">
              {["Surgery: Completed", "Health: Stable", "Next visit: 3 days"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
