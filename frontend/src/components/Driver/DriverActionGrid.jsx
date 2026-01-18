// src/components/Driver/DriverActionGrid.jsx

import React from "react";

export function DriverActionGrid() {
  const actions = [
    { icon: "🚚", label: "Find Load" },
    { icon: "📍", label: "Post Availability" },
    { icon: "📦", label: "Return Trip Route" },
    { icon: "🛠️", label: "Update Vehicle Info" },
    { icon: "📞", label: "Call Support" },
  ];

  return (
    <div className="w-full space-y-4">

      {/* Section Title */}
      <h2 className="text-lg font-semibold">Quick Actions</h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">

        {actions.map((action, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 border flex flex-col items-center justify-center gap-3 cursor-pointer hover:shadow-xl active:scale-95 transition-all text-center"
          >
            {/* Icon Box */}
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-4xl shadow-sm">
              {action.icon}
            </div>

            {/* Label */}
            <p className="text-sm font-semibold text-gray-700">{action.label}</p>
          </div>
        ))}

      </div>
    </div>
  );
}
