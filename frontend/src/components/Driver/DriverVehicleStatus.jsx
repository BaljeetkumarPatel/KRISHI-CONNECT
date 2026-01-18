// src/components/Driver/DriverVehicleStatus.jsx

import React from "react";

export function DriverVehicleStatusPanel() {
  const vehicle = {
    name: "Tata Ace",
    number: "MH 12 AB 3456",
    loadUsed: 50,
    loadRemaining: "400 kg remaining",
    status: "Partially Loaded",
    service: "Next service in 350 km",
  };

  const statusStyles = {
    "Ready to Load": "bg-green-100 text-green-700 border-green-300",
    "Partially Loaded": "bg-yellow-100 text-yellow-700 border-yellow-300",
    "In Transit": "bg-blue-100 text-blue-700 border-blue-300",
    "Unavailable": "bg-red-100 text-red-700 border-red-300",
    "Offline": "bg-red-100 text-red-700 border-red-300",
  };

  const statusIcons = {
    "Ready to Load": "🟢",
    "Partially Loaded": "🟡",
    "In Transit": "🔵",
    "Unavailable": "🔴",
    "Offline": "🔴",
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border hover:shadow-xl transition-all p-0 overflow-hidden">

      {/* HEADER Section with Gradient */}
      <div className="p-5 bg-gradient-to-r from-blue-600 to-blue-400 text-white flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Vehicle Status</h2>
          <p className="text-sm opacity-90">Real-time status of your vehicle</p>
        </div>
        <div className="text-4xl">🚛</div>
      </div>

      {/* BODY Content */}
      <div className="p-6 space-y-6">

        {/* Vehicle Info */}
        <div className="space-y-1">
          <p className="text-gray-600 text-sm font-medium">Vehicle</p>
          <p className="font-semibold text-gray-800 text-lg">
            {vehicle.name} – <span className="text-gray-700">{vehicle.number}</span>
          </p>
        </div>

        {/* Load Capacity */}
        <div className="space-y-1">
          <p className="text-gray-600 text-sm font-medium">Load Capacity</p>

          <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
            <div
              className="h-3 bg-green-600 rounded-full transition-all duration-700"
              style={{ width: `${vehicle.loadUsed}%` }}
            ></div>
          </div>

          <p className="text-sm text-gray-700">
            <span className="font-semibold">{vehicle.loadUsed}% Full</span> – {vehicle.loadRemaining}
          </p>
        </div>

        {/* Status Indicator */}
        <div className="space-y-1">
          <p className="text-gray-600 text-sm font-medium">Current Status</p>

          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-medium ${statusStyles[vehicle.status]}`}
          >
            <span>{statusIcons[vehicle.status]}</span>
            {vehicle.status}
          </div>
        </div>

        {/* Service Reminder */}
        <div className="space-y-1">
          <p className="text-gray-600 text-sm font-medium">Service Reminder</p>
          <p className="font-semibold text-gray-800">{vehicle.service}</p>
        </div>
      </div>
    </div>
  );
}
