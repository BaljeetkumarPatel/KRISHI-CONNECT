// src/components/Labour/LabourActiveJob.jsx

import React from "react";

export function ActiveJobCard() {
  const job = {
    employer: "Ramesh Kumar, Village Rampur",
    location: "Rampur Village",
    wage: "₹500/day",
    startTime: "Today, 8:00 AM",
    duration: "Ongoing",
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 border space-y-4 w-1/3">
      
      {/* Header */}
      <h2 className="text-lg font-semibold flex items-center gap-2">
        🔧 Active Job
      </h2>

      {/* Job Info */}
      <div className="space-y-2 text-sm">
        <p><strong>Employer:</strong> {job.employer}</p>
        <p><strong>Location:</strong> {job.location}</p>
        <p><strong>Wage:</strong> {job.wage}</p>
        <p><strong>Start Time:</strong> {job.startTime}</p>
        <p>
          <strong>Status:</strong>{" "}
          <span className="text-green-600 font-semibold">{job.duration}</span>
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-2">
        
        <button className="px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-xl shadow active:scale-95">
          ✔️ Mark Arrived
        </button>

        <button className="px-4 py-2 bg-green-600 text-white text-xs font-semibold rounded-xl shadow active:scale-95 rounded-full">
          ✅ Mark Completed
        </button>

        <button className="px-4 py-2 bg-gray-700 text-white text-xs font-semibold rounded-xl shadow active:scale-95 rounded-full">
          📞 Call Employer
        </button>
      </div>

    </div>
  );
}
