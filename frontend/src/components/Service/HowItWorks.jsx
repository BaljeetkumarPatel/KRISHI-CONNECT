// src/components/Service/HowItWorks.jsx

import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Data Ingestion",
      icon: "📡",
      points: [
        "Collects real-time inputs from farmers, laborers, and transporters",
        "Continuously updates crop stages, availability, and load capacity",
      ],
    },
    {
      number: "02",
      title: "Smart Processing",
      icon: "🧠",
      points: [
        "Cross-checks farmer demand with local labor availability",
        "Understands transport routes & timing constraints",
        "Analyzes crop readiness and workload distribution",
      ],
    },
    {
      number: "03",
      title: "Instant Auto-Generation",
      icon: "⚡",
      points: [
        "Creates optimized connections instantly",
        "Generates price estimates & job schedules",
        "Designs delivery + pickup routing in seconds",
      ],
    },
  ];

  return (
    <div className="w-full space-y-10 py-6">

      {/* SECTION HEADER */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold text-gray-800">
          The Magic Behind Krishi-Connect
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our intelligent engine works silently in the background,
          auto-generating the best matches and schedules — 
          completely eliminating manual coordination.
        </p>
      </div>

      {/* 3-STEP GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="
              bg-white rounded-2xl p-6 shadow-lg border 
              hover:shadow-2xl hover:-translate-y-1 transition-all duration-300
            "
          >
            {/* Number + Icon */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-4xl">{step.icon}</span>
              <span className="text-4xl font-extrabold text-green-600 opacity-40">
                {step.number}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {step.title}
            </h3>

            {/* Points */}
            <ul className="space-y-1 text-gray-600 text-sm">
              {step.points.map((p, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className="text-green-600 font-bold">•</span> {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CLOSING STATEMENT */}
      <div className="text-center mt-8">
        <p className="text-gray-700 max-w-xl mx-auto leading-relaxed">
          Everything happens automatically — boosting efficiency, increasing income,
          and saving hours of manual communication for every stakeholder in rural agriculture.
        </p>
      </div>
    </div>
  );
}
