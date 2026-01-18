// src/components/Driver/DriverNotifications.jsx

import React from "react";

export function DriverNotificationsPanel() {
  const notifications = [
    // DRIVER ALERTS
    {
      type: "Driver Alert",
      message: "Tomorrow’s load is confirmed.",
      time: "2 hrs ago",
      color: "border-blue-500 bg-blue-50",
      icon: "📦",
    },
    {
      type: "Driver Alert",
      message: "Pickup scheduled at 6 AM.",
      time: "4 hrs ago",
      color: "border-indigo-500 bg-indigo-50",
      icon: "⏰",
    },
    {
      type: "Driver Alert",
      message: "New transport request available near you.",
      time: "6 hrs ago",
      color: "border-green-500 bg-green-50",
      icon: "📍",
    },
    {
      type: "Driver Alert",
      message: "Payment of ₹750 received.",
      time: "1 day ago",
      color: "border-green-600 bg-green-100",
      icon: "💰",
    },

    // MARKET ALERTS
    {
      type: "Market Alert",
      message: "Mandi rates updated.",
      time: "1 day ago",
      color: "border-yellow-500 bg-yellow-50",
      icon: "📈",
    },

    // WEATHER ALERTS
    {
      type: "Weather Alert",
      message: "Heavy rain expected — trip might get delayed.",
      time: "1 day ago",
      color: "border-blue-400 bg-blue-50",
      icon: "🌧️",
    },

    // SYSTEM ALERTS
    {
      type: "System Alert",
      message: "Your subscription ends in 2 days.",
      time: "2 days ago",
      color: "border-red-500 bg-red-50",
      icon: "⚠️",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border hover:shadow-2xl transition-all w-full space-y-4">

      {/* SECTION HEADER */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-2xl">🔔</span>
        <h2 className="text-lg font-semibold">Notifications & Alerts</h2>
      </div>

      {/* LIST */}
      <div className="space-y-4">
        {notifications.map((note, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 p-4 rounded-xl border-l-4 shadow-sm ${note.color} hover:shadow-md transition-all`}
          >
            {/* Icon */}
            <div className="text-2xl">{note.icon}</div>

            {/* Message Block */}
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                {note.type}
              </span>

              <p className="text-sm font-medium text-gray-800 leading-tight">
                {note.message}
              </p>

              <span className="text-xs text-gray-500 mt-1">{note.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
