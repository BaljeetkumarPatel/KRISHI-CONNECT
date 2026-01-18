// src/components/Labour/LabourStatsCards.jsx

import React from "react";
import { useState } from "react";
/* -------------------------------------------------------------------------- */
/*                             BASE STATS CARD                                */
/* -------------------------------------------------------------------------- */
export function ALbourStastCarrd({ icon, title, value1, value2 }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center text-center gap-2 border">
      <div className="text-4xl">{icon}</div>

      <h3 className="text-lg font-semibold">{title}</h3>

      {value1 && <p className="text-xl font-bold text-green-700">{value1}</p>}
      {value2 && <p className="text-sm text-gray-600">{value2}</p>}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                        TOP 3 STAT CARDS (ACTIVITY)                         */
/* -------------------------------------------------------------------------- */

export function TotalEarningsCard() {
  return (
    <ALbourStastCarrd
      icon="💰"
      title="Total Earnings"
      value1="Today: ₹500"
      value2="This Month: ₹7,200"
    />
  );
}

export function DaysWorkedCard() {
  return (
    <ALbourStastCarrd
      icon="⏱️"
      title="Days Worked"
      value1="12 Days"
      value2="This Month"
    />
  );
}

export function ReliabilityScoreCard() {
  return (
    <ALbourStastCarrd
      icon="⭐"
      title="Reliability Score"
      value1="95%"
      value2="Based on attendance & behaviour"
    />
  );
}

/* -------------------------------------------------------------------------- */
/*                         RECENT ACTIVITY / JOB HISTORY                      */
/* -------------------------------------------------------------------------- */

export function RecentActivityCard() {
  const activities = [
    { task: "Harvesting Work", status: "Completed", icon: "🌾", amount: "₹500" },
    { task: "Loading Truck", status: "Completed", icon: "🚛", amount: "₹600" },
    { task: "Field Cleaning", status: "Pending", icon: "🧹", amount: "₹400" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 border">
      <h2 className="text-lg font-semibold mb-3"> Recent Activity </h2>

      <div className="space-y-4">
        {activities.map((a, i) => (
          <div key={i} className="flex justify-between items-center bg-gray-50 p-3 rounded-xl">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{a.icon}</span>
              <div>
                <p className="font-semibold">{a.task}</p>
                <p className={`text-sm ${a.status === "Completed" ? "text-green-600" : "text-yellow-600"}`}>
                  {a.status}
                </p>
              </div>
            </div>

            <span className="font-bold text-green-700">{a.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                          AVAILABILITY TOGGLE (BIG)                         */
/* -------------------------------------------------------------------------- */


export function AvailabilityToggle() {
  const [available, setAvailable] = useState(true);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex justify-between items-center border w-1/3">
      
      {/* Status Left Side */}
      <div className="flex items-center gap-2">
        <span className="text-lg">{available ? "🟢" : "🔴"}</span>
        <h3 className="text-sm font-semibold">
          {available ? "Available" : "Not Available"}
        </h3>
      </div>

      {/* Toggle Switch */}
      <div
        onClick={() => setAvailable(!available)}
        className={`w-12 h-6 flex items-center rounded-full cursor-pointer transition-all ${
          available ? "bg-green-500" : "bg-red-500"
        }`}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-all ${
            available ? "translate-x-6" : "translate-x-1"
          }`}
        ></div>
      </div>
    </div>
  );
}
