// src/components/Driver/DriverTransportExtras.jsx
import React from "react";

export default function DriverTransportExtrasSection({ children }) {
  return (
    <div className="w-full space-y-6">
      <div className="flex items-center gap-3">
        <span className="text-2xl">🛣️</span>
        <h2 className="text-xl font-semibold">Transport-Specific Extra Features</h2>
      </div>

      <p className="text-sm text-gray-600">
        Advanced tools to increase income, reduce empty return distance, and track efficiency.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {children}
      </div>
    </div>
  );
}
