import React from "react";
import { Bell, AlertTriangle, CloudRain, TrendingUp, CheckCircle, Timer } from "lucide-react";

export default function FarmerNotifications() {
  // Sample notifications (later can come from backend)
  const notifications = [
    {
      type: "job",
      title: "Labour Request Confirmed",
      message: "3 workers accepted your job for tomorrow.",
      time: "2 hours ago",
      icon: <CheckCircle size={20} className="text-green-600" />,
      color: "border-green-400 bg-green-50",
    },
    {
      type: "market",
      title: "Market Price Update",
      message: "Onion mandi prices increased by 12% today.",
      time: "5 hours ago",
      icon: <TrendingUp size={20} className="text-blue-600" />,
      color: "border-blue-400 bg-blue-50",
    },
    {
      type: "weather",
      title: "Rain Alert",
      message: "Heavy rain expected tomorrow. Protect your crop.",
      time: "1 day ago",
      icon: <CloudRain size={20} className="text-purple-600" />,
      color: "border-purple-400 bg-purple-50",
    },
    {
      type: "system",
      title: "Subscription Expiring",
      message: "Your subscription will expire in 3 days.",
      time: "2 days ago",
      icon: <AlertTriangle size={20} className="text-red-600" />,
      color: "border-red-400 bg-red-50",
    },
  ];

  return (
    <div className="mt-14">
      {/* HEADER */}
      <div className="flex items-center gap-3 mb-4">
        <Bell size={26} className="text-green-700" />
        <h2 className="text-2xl font-bold text-green-700">Notifications & Alerts</h2>
      </div>

      {/* NOTIFICATION LIST */}
      <div className="space-y-4">
        {notifications.map((n, index) => (
          <div
            key={index}
            className={`border ${n.color} rounded-xl p-5 shadow-sm hover:shadow-md transition`}
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="mt-1">{n.icon}</div>

              {/* Text Content */}
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 text-lg">{n.title}</h3>
                <p className="text-gray-600 text-sm">{n.message}</p>
              </div>

              {/* Timestamp */}
              <div className="text-xs text-gray-500 flex items-center gap-1 whitespace-nowrap">
                <Timer size={14} />
                {n.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
