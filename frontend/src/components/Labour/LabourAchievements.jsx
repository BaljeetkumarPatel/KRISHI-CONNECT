// src/components/Labour/LabourAchievements.jsx

import React from "react";

export function LabourAchievementsRow() {
  const badges = [
    { icon: "🏅", title: "Super Worker", desc: "Completed 10 jobs", color: "bg-yellow-300" },
    { icon: "⏰", title: "Early Bird", desc: "On-time 5 days", color: "bg-blue-300" },
    { icon: "⭐", title: "Top Rated", desc: "5-star by 3 farmers", color: "bg-purple-300" },
    { icon: "👷‍♂️", title: "Reliable", desc: "Score above 90%", color: "bg-green-300" },
  ];

  return (
    <div className="w-full space-y-3">

      {/* Section Name */}
      <h2 className="text-lg font-semibold">Achievements</h2>

      {/* 4 Equal Cards - Fit Screen */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        {badges.map((badge, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 border flex items-center gap-3"
          >
            {/* Badge Icon */}
            <div
              className={`w-12 h-12 ${badge.color} rounded-full flex items-center justify-center text-2xl`}
            >
              {badge.icon}
            </div>

            {/* Text */}
            <div className="text-sm">
              <p className="font-semibold">{badge.title}</p>
              <p className="text-gray-600 text-xs">{badge.desc}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
