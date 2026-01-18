import React from "react";
import { Calendar, CloudRain, Truck, Users, AlertCircle } from "lucide-react";

export default function FarmCalendar() {
  const events = [
    {
      type: "task",
      title: "Harvesting (Wheat)",
      date: "In 6 days",
      detail: "Ensure tractor is booked",
      icon: <Calendar size={22} className="text-green-600" />,
      color: "border-green-400 bg-green-50",
    },
    {
      type: "labour",
      title: "Need 5 labourers",
      date: "Tomorrow",
      detail: "For tomato picking",
      icon: <Users size={22} className="text-orange-600" />,
      color: "border-orange-400 bg-orange-50",
    },
    {
      type: "transport",
      title: "Tractor Scheduled",
      date: "Today, 4 PM",
      detail: "Field → Mandi transport",
      icon: <Truck size={22} className="text-blue-600" />,
      color: "border-blue-400 bg-blue-50",
    },
    {
      type: "weather",
      title: "Rain Warning",
      date: "Tomorrow",
      detail: "Cover harvested crops",
      icon: <CloudRain size={22} className="text-purple-600" />,
      color: "border-purple-400 bg-purple-50",
    },
    {
      type: "payment",
      title: "Payment Due",
      date: "In 3 days",
      detail: "Ravi – Labour ₹1200",
      icon: <AlertCircle size={22} className="text-red-600" />,
      color: "border-red-400 bg-red-50",
    },
  ];

  return (
    <div className="mt-14">
      <h2 className="text-2xl font-bold text-green-700 flex items-center gap-2 mb-4">
        <Calendar size={26} />
        Farm Calendar
      </h2>

      <div className="space-y-4">
        {events.map((e, i) => (
          <div
            key={i}
            className={`p-5 rounded-2xl shadow-sm border ${e.color} hover:shadow-md transition`}
          >
            <div className="flex items-start gap-4">
              {e.icon}
              <div>
                <p className="font-bold text-gray-800 text-lg">{e.title}</p>
                <p className="text-gray-500 text-sm">{e.detail}</p>
                <p className="text-gray-700 text-sm mt-1 font-medium">
                  📅 {e.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
