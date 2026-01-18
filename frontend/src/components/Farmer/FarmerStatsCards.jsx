import React from "react";
import { ClipboardList, Wallet, Users, CalendarCheck } from "lucide-react";

export default function FarmerStatCard() {
  // Static demo values – later you can replace with backend values
  const stats = [
    {
      title: "Active Job Requests",
      value: "3",
      subtitle: "Need 5 workers tomorrow",
      icon: <ClipboardList size={32} className="text-green-600" />,
      bg: "bg-green-100",
    },
    {
      title: "Total Spent This Month",
      value: "₹12,450",
      subtitle: "Labour + Transport",
      icon: <Wallet size={32} className="text-blue-600" />,
      bg: "bg-blue-100",
    },
    {
      title: "Workers Hired Today",
      value: "7",
      subtitle: "On field right now",
      icon: <Users size={32} className="text-orange-600" />,
      bg: "bg-orange-100",
    },
    {
      title: "Upcoming Work",
      value: "Harvesting",
      subtitle: "In 6 days — prepare tractor booking",
      icon: <CalendarCheck size={32} className="text-purple-600" />,
      bg: "bg-purple-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((card, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4 border border-gray-100"
        >
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${card.bg}`}>
            {card.icon}
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700">{card.title}</h3>
            <p className="text-3xl font-bold text-gray-900 mt-1">{card.value}</p>
            <p className="text-gray-500 text-sm mt-1">{card.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
