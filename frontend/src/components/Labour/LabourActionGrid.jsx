// src/components/Labour/LabourActionGrid.jsx

import React from "react";

export function LabourActionGrid() {
  const actions = [
    { icon: "👷‍♂️", label: "Find Job" },
    { icon: "📍", label: "Update Availability" },
    { icon: "📞", label: "Call Support" },
    { icon: "📝", label: "Update Profile" },
  ];

  return (
    <div className="w-full space-y-4">

      {/* Section Name */}
      <h2 className="text-lg font-semibold">Quick Actions</h2>

      {/* Action Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

        {actions.map((action, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 border flex flex-col items-center justify-center text-center gap-3 cursor-pointer active:scale-95 hover:shadow-lg transition-all"
          >
            {/* Icon Circle */}
            <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-3xl shadow-sm">
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
