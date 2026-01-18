// src/components/Driver/ReturnTripFinder.jsx
import React, { useState } from "react";

/**
 * Simple simulated Return Trip Finder.
 * - Enter from/to
 * - Optionally enter max detour km
 * - The demo "matching" is simulated from a static list with an "offRouteKm" score.
 */

const DEMO_JOBS = [
  { id: 1, farmer: "Suresh", route: "Rampur → Mandi X", cargo: "Tomato crates", kg: 250, offRouteKm: 4, fare: 300 },
  { id: 2, farmer: "Meena", route: "Rampur → Depot Y", cargo: "Wheat bags", kg: 100, offRouteKm: 0.5, fare: 180 },
  { id: 3, farmer: "Raju", route: "Near Highway 8 → Mandi Z", cargo: "Fertilizer", kg: 150, offRouteKm: 8, fare: 260 },
  { id: 4, farmer: "Kiran", route: "Village B → City C", cargo: "Agri tools", kg: 80, offRouteKm: 2, fare: 140 },
];

export function ReturnTripFinder() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [maxDetour, setMaxDetour] = useState(5);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  function findMatches(e) {
    e?.preventDefault();
    setLoading(true);

    // Simulate server matching latency
    setTimeout(() => {
      // naive filter: offRouteKm <= maxDetour
      const matched = DEMO_JOBS
        .map((job) => ({ ...job }))
        .filter((j) => j.offRouteKm <= Number(maxDetour))
        .sort((a, b) => a.offRouteKm - b.offRouteKm);
      setResults(matched);
      setLoading(false);
    }, 600);
  }

  function acceptJob(job) {
    alert(`Accepted job for ${job.farmer}: ${job.cargo} — fare ₹${job.fare}`);
    // In real app: POST accept to backend
    setResults((r) => r.filter((x) => x.id !== job.id));
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-5 border hover:shadow-2xl transition-all">
      <h3 className="text-lg font-semibold mb-2">🔁 Return Trip Finder</h3>
      <p className="text-sm text-gray-600 mb-4">
        Enter your return route and find farmers needing transport along the way.
      </p>

      <form onSubmit={findMatches} className="grid grid-cols-1 gap-3">
        <div className="flex gap-2">
          <input
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="From (e.g., Village Rampur)"
            className="flex-1 p-2 border rounded-lg text-sm"
            required
          />
          <input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="To (e.g., City Mandi)"
            className="flex-1 p-2 border rounded-lg text-sm"
            required
          />
        </div>

        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-600">Max detour (km)</label>
          <input
            type="number"
            min="0"
            max="50"
            value={maxDetour}
            onChange={(e) => setMaxDetour(e.target.value)}
            className="w-20 p-2 border rounded-lg text-sm"
          />
          <button
            type="submit"
            className="ml-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
          >
            {loading ? "Searching..." : "Find Matching Loads"}
          </button>
        </div>
      </form>

      <div className="mt-4 space-y-3">
        {results.length === 0 && !loading && (
          <p className="text-sm text-gray-500">No matches found yet. Try increasing detour.</p>
        )}

        {results.map((job) => (
          <div key={job.id} className="flex items-center justify-between gap-3 p-3 bg-gray-50 rounded-lg">
            <div>
              <div className="font-semibold">{job.farmer} — {job.cargo}</div>
              <div className="text-xs text-gray-600">{job.route} • {job.kg} kg • Fare ₹{job.fare}</div>
              <div className="text-xs text-gray-500 mt-1">Off-route: {job.offRouteKm} km</div>
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={() => acceptJob(job)}
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-sm"
              >
                Accept
              </button>
              <button
                onClick={() => alert(`Details for ${job.farmer}: call or view profile`)}
                className="bg-white border px-3 py-1 rounded-md text-sm"
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
