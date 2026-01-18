import React from "react";
import { Lightbulb, BarChart3, ThermometerSun } from "lucide-react";

export default function SeasonalAdvisory() {
  const tips = [
    {
      icon: <BarChart3 size={20} className="text-blue-600" />,
      title: "Fertilizer prices rising",
      advice: "Buy stock now to save 8–12% this season.",
    },
    {
      icon: <ThermometerSun size={20} className="text-orange-600" />,
      title: "Good time to sell tomatoes",
      advice: "Market demand increasing due to festival season.",
    },
    {
      icon: <Lightbulb size={20} className="text-green-600" />,
      title: "Optimal sowing window",
      advice: "Ideal weather for sowing groundnut this week.",
    },
  ];

  return (
    <div className="mt-14">
      <h2 className="text-2xl font-bold text-green-700 flex items-center gap-2">
        <Lightbulb size={26} />
        Seasonal Advisory (Smart AI Tips)
      </h2>

      <div className="space-y-4 mt-4">
        {tips.map((t, i) => (
          <div
            key={i}
            className="p-5 bg-white rounded-2xl shadow border border-gray-200 hover:shadow-md transition flex gap-4"
          >
            {t.icon}
            <div>
              <p className="font-bold text-gray-800">{t.title}</p>
              <p className="text-gray-600 text-sm">{t.advice}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
