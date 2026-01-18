// src/components/Service/MainServiceCards.jsx

import React from "react";

export default function MainServiceCards() {
  const services = [
    {
      title: "For Farmers (Kisan)",
      icon: "🌾",
      subtitle: "Automated Resource Allocation",
      inputTitle: "Input Provided",
      inputs: [
        "Crop Type",
        "Expected Harvest Date",
        "Farm Location",
      ],
      outputTitle: "System-Generated Output",
      outputs: [
        "Curated list of available laborers in your area",
        "Pre-booked transport vehicles matched to load size",
        "Smart suggestions based on crop volume & season",
      ],
      bg: "from-green-600 to-green-500",
    },

    {
      title: "For Laborers (Mazdoor)",
      icon: "🛠️",
      subtitle: "Intelligent Job Mapping",
      inputTitle: "Input Provided",
      inputs: [
        "Work Skills",
        "Daily Availability",
        "Current Location",
      ],
      outputTitle: "System-Generated Output",
      outputs: [
        "Daily work schedule based on nearby farms",
        "Guaranteed earning estimates",
        "Zero idle days through optimized matching",
      ],
      bg: "from-blue-600 to-blue-500",
    },

    {
      title: "For Transporters (Logistics)",
      icon: "🚚",
      subtitle: "Dynamic Route Optimization",
      inputTitle: "Input Provided",
      inputs: [
        "Vehicle Capacity",
        "Preferred Routes",
        "Load Type & Availability",
      ],
      outputTitle: "System-Generated Output",
      outputs: [
        "Optimized pickup routes tailored to crop readiness",
        "Automatic mandi delivery plans for faster turnaround",
        "Smart scheduling ensuring zero empty return trips",
      ],
      bg: "from-amber-600 to-amber-500",
    },
  ];

  return (
    <div className="w-full space-y-8">
      {/* SECTION TITLE */}
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        Our Smart Services
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto">
        We connect the entire rural ecosystem — farmers, laborers, and transporters — 
        through intelligent automation and real-time matching.
      </p>

      {/* CARD GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((item, index) => (
          <div
            key={index}
            className="
              bg-white rounded-2xl shadow-lg border 
              hover:shadow-2xl transition-all duration-300 p-6 flex flex-col gap-4
            "
          >
            {/* CARD HEADER */}
            <div className={`rounded-xl bg-gradient-to-r ${item.bg} p-4 text-white shadow-md`}>
              <div className="text-4xl">{item.icon}</div>
              <h3 className="text-xl font-bold mt-2">{item.title}</h3>
              <p className="text-sm opacity-90">{item.subtitle}</p>
            </div>

            {/* INPUT SECTION */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">{item.inputTitle}</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                {item.inputs.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span> {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* OUTPUT SECTION */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">{item.outputTitle}</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                {item.outputs.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span> {point}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
