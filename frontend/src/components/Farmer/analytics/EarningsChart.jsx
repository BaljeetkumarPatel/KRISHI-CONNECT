// src/components/analytics/EarningsChart.jsx
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { day: "Mon", amount: 1200 },
  { day: "Tue", amount: 900 },
  { day: "Wed", amount: 1500 },
  { day: "Thu", amount: 800 },
  { day: "Fri", amount: 1800 },
  { day: "Sat", amount: 1100 },
  { day: "Sun", amount: 700 },
];

export default function EarningsChart() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Earnings / Spending Overview</h2>

      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#4F46E5" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
