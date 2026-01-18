// src/components/Driver/DriverAnalytics.jsx

import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/* -------------------------------------------------------------------------- */
/*                        Premium Earnings Bar Chart                          */
/* -------------------------------------------------------------------------- */

export function DriverEarningsGraph() {
  const data = [
    { day: "Mon", earnings: 450 },
    { day: "Tue", earnings: 700 },
    { day: "Wed", earnings: 300 },
    { day: "Thu", earnings: 850 },
    { day: "Fri", earnings: 500 },
    { day: "Sat", earnings: 920 },
    { day: "Sun", earnings: 600 },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border hover:shadow-2xl transition-all">
      <h2 className="text-lg font-semibold mb-2">📊 Weekly Earnings</h2>
      <p className="text-sm text-gray-500 mb-4">Peak earning patterns</p>

      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.25} />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="earnings"
              fill="#4F46E5"
              radius={[10, 10, 0, 0]}
              barSize={35}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                      Distance / Fuel / Trips Line Chart                    */
/* -------------------------------------------------------------------------- */

export function DriverDistanceGraph() {
  const data = [
    { day: "Mon", km: 22, fuel: 1.4, trips: 1 },
    { day: "Tue", km: 18, fuel: 1.2, trips: 1 },
    { day: "Wed", km: 40, fuel: 2.8, trips: 2 },
    { day: "Thu", km: 12, fuel: 0.9, trips: 1 },
    { day: "Fri", km: 55, fuel: 3.8, trips: 2 },
    { day: "Sat", km: 30, fuel: 1.9, trips: 1 },
    { day: "Sun", km: 20, fuel: 1.2, trips: 1 },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border hover:shadow-2xl transition-all">
      <h2 className="text-lg font-semibold mb-2">📈 Distance Travelled</h2>
      <p className="text-sm text-gray-500 mb-4">Trips, kilometers & fuel trends</p>

      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />

            <Line type="monotone" dataKey="km" stroke="#16A34A" strokeWidth={3} dot={true} />
            <Line type="monotone" dataKey="trips" stroke="#2563EB" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="fuel" stroke="#CA8A04" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                         Ratings Breakdown (Premium)                        */
/* -------------------------------------------------------------------------- */

export function DriverRatingsBreakdown() {
  const categories = [
    { label: "Behaviour", stars: 5 },
    { label: "Punctuality", stars: 4 },
    { label: "Cargo Safety", stars: 5 },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border hover:shadow-2xl transition-all">
      <h2 className="text-lg font-semibold mb-2">⭐ Ratings Breakdown</h2>
      <p className="text-sm text-gray-500 mb-4">Performance indicators</p>

      <div className="space-y-4">
        {categories.map((cat, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="font-medium">{cat.label}</span>
            <span className="text-yellow-500 text-lg">
              {"⭐".repeat(cat.stars)}
              {"☆".repeat(5 - cat.stars)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                       Load Efficiency Score (Premium)                      */
/* -------------------------------------------------------------------------- */

export function DriverLoadEfficiencyCard() {
  const score = 82;

  return (
    <div className="bg-gradient-to-r from-green-600 to-green-400 text-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all">
      <h2 className="text-lg font-semibold">📦 Load Efficiency Score</h2>

      <p className="text-xl font-bold mt-3">{score}% Efficiency</p>

      <div className="w-full bg-white/30 h-2 rounded-full mt-3 overflow-hidden">
        <div
          className="h-2 bg-white rounded-full transition-all duration-700"
          style={{ width: `${score}%` }}
        ></div>
      </div>

      <p className="text-sm opacity-90 mt-2">
        This week's average vehicle filling performance.
      </p>
    </div>
  );
}
