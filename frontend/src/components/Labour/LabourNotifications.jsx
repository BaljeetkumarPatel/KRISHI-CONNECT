// src/components/Labour/LabourNotifications.jsx

import React from "react";

export function LabourNotificationsPanel() {
  const notifications = [
    {
      message: "Your job for tomorrow is confirmed.",
      time: "2 hrs ago",
      color: "border-blue-500",
      icon: "📅",
    },
    {
      message: "You received ₹500 for today's work.",
      time: "4 hrs ago",
      color: "border-green-600",
      icon: "💰",
    },
    {
      message: "Mandi prices updated — new opportunities available.",
      time: "6 hrs ago",
      color: "border-yellow-500",
      icon: "📈",
    },
    {
      message: "Your reliability increased to 96%.",
      time: "1 day ago",
      color: "border-purple-600",
      icon: "⭐",
    },
    {
      message: "Rain expected tomorrow — schedule may change.",
      time: "1 day ago",
      color: "border-red-500",
      icon: "🌧️",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border w-full">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">🔔</span>
        <h2 className="text-lg font-semibold">Notifications & Alerts</h2>
      </div>

      {/* Notification List */}
      <div className="space-y-4">
        {notifications.map((note, index) => (
          <div
            key={index}
            className={`border-l-4 ${note.color} bg-gray-50 p-3 rounded-md shadow-sm flex justify-between items-start`}
          >
            {/* Left (Icon + Message) */}
            <div className="flex items-start gap-3">
              <span className="text-xl">{note.icon}</span>

              <div>
                <p className="text-sm font-medium leading-tight">{note.message}</p>
                <p className="text-xs text-gray-500 mt-1">{note.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
