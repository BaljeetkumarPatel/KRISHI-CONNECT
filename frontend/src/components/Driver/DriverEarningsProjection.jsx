// src/components/Driver/DriverEarningsProjection.jsx
import React, { useMemo, useState } from "react";

/**
 * Simple earnings projection:
 * - User inputs: avg trips/day, avg fare/trip, workdays/week
 * - Project weekly and monthly projection and show small sparkline (text)
 */

export function DriverEarningsProjection() {
  const [avgTripsPerDay, setAvgTripsPerDay] = useState(1.8);
  const [avgFarePerTrip, setAvgFarePerTrip] = useState(650);
  const [workDaysPerWeek, setWorkDaysPerWeek] = useState(6);

  const weekly = useMemo(() => {
    return Math.round(avgTripsPerDay * avgFarePerTrip * workDaysPerWeek);
  }, [avgTripsPerDay, avgFarePerTrip, workDaysPerWeek]);

  const monthly = useMemo(() => {
    return Math.round((weekly * 52) / 12); // approximate
  }, [weekly]);

  const rangeWeekly = `${Math.round(weekly * 0.9)} - ${Math.round(weekly * 1.1)}`;
  const rangeMonthly = `${Math.round(monthly * 0.9)} - ${Math.round(monthly * 1.1)}`;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-5 border hover:shadow-2xl transition-all">
      <h3 className="text-lg font-semibold mb-2">📈 Earnings Projection</h3>
      <p className="text-sm text-gray-600 mb-3">Estimate weekly / monthly earnings based on your averages.</p>

      <div className="grid grid-cols-1 gap-3">
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-600 w-40">Avg trips / day</label>
          <input type="number" step="0.1" value={avgTripsPerDay} onChange={(e) => setAvgTripsPerDay(Number(e.target.value))}
            className="p-2 border rounded-md w-full" />
        </div>

        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-600 w-40">Avg fare / trip (₹)</label>
          <input type="number" value={avgFarePerTrip} onChange={(e) => setAvgFarePerTrip(Number(e.target.value))}
            className="p-2 border rounded-md w-full" />
        </div>

        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-600 w-40">Work days / week</label>
          <input type="number" value={workDaysPerWeek} min="1" max="7" onChange={(e) => setWorkDaysPerWeek(Number(e.target.value))}
            className="p-2 border rounded-md w-full" />
        </div>
      </div>

      <div className="mt-4 bg-gray-50 p-3 rounded-md">
        <div className="flex items-baseline justify-between">
          <div>
            <div className="text-xs text-gray-500">Projected This Week</div>
            <div className="text-xl font-bold">₹{weekly}</div>
            <div className="text-xs text-gray-500">Range: {rangeWeekly}</div>
          </div>

          <div>
            <div className="text-xs text-gray-500">Projected This Month</div>
            <div className="text-xl font-bold">₹{monthly}</div>
            <div className="text-xs text-gray-500">Range: {rangeMonthly}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
