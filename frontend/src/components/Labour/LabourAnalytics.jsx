// src/components/Labour/LabourAnalytics.jsx

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

/* -------------------------------------------------------------------------- */
/*                            Earnings Bar Chart                              */
/* -------------------------------------------------------------------------- */

export function EarningsChartCard() {
  const data = [
    { day: "Mon", earnings: 500 },
    { day: "Tue", earnings: 600 },
    { day: "Wed", earnings: 450 },
    { day: "Thu", earnings: 700 },
    { day: "Fri", earnings: 300 },
    { day: "Sat", earnings: 800 },
    { day: "Sun", earnings: 650 },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border w-full">
      <h2 className="text-lg font-semibold mb-3">📊 Earnings This Week</h2>

      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="earnings"
              fill="#4F46E5"
              radius={[8, 8, 0, 0]}
              barSize={35}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                         Ratings Breakdown (Professional)                   */
/* -------------------------------------------------------------------------- */

export function RatingsBreakdownCard() {
  const ratings = [
    { category: "Behaviour", stars: 5 },
    { category: "Punctuality", stars: 4 },
    { category: "Hardwork", stars: 5 },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border w-full space-y-4">
      <h2 className="text-lg font-semibold mb-3">⭐ Ratings Breakdown</h2>

      <div className="space-y-3">
        {ratings.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="font-medium">{item.category}</span>

            <div className="text-yellow-500 text-lg">
              {"⭐".repeat(item.stars)}
              {"☆".repeat(5 - item.stars)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
