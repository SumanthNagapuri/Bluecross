"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: "🐾",
    title: "Animal Capture",
    description:
      "Field teams log every capture with location, time, and animal details directly from the mobile app.",
    color: "#1B9AD2",
  },
  {
    icon: "🏥",
    title: "Veterinary Care",
    description:
      "Complete surgery and medical records are maintained per animal, accessible to all authorized vets.",
    color: "#F97316",
  },
  {
    icon: "🚗",
    title: "Vehicle Tracking",
    description:
      "Monitor all field vehicles and their routes from the admin dashboard in real time.",
    color: "#10b981",
  },
  {
    icon: "📋",
    title: "Release Management",
    description:
      "Track every animal released back to the community with health status and sterilization details.",
    color: "#8b5cf6",
  },
  {
    icon: "📊",
    title: "Analytics Dashboard",
    description:
      "Comprehensive reports on operations, progress tracking, and performance metrics at a glance.",
    color: "#ec4899",
  },
  {
    icon: "🔔",
    title: "Real-time Alerts",
    description:
      "Instant notifications for task updates, medical urgencies, and operational changes.",
    color: "#f59e0b",
  },
];

export default function Services() {
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
    <section id="services" className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
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
            Our Services
          </span>
          <h2
            className="text-4xl font-bold text-gray-900 mt-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Built for Animal{" "}
            <span className="gradient-text">Welfare at Scale</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            End-to-end tools for every stage of the animal birth control program
            — from capture to care to community release.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="feature-card p-6 rounded-2xl border border-gray-100 bg-white hover:border-blue-200 transition-all duration-700 cursor-default"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${i * 0.08}s`,
              }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
                style={{ background: `${service.color}15` }}
              >
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
              <div
                className="mt-4 w-8 h-0.5 rounded-full"
                style={{ background: service.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
