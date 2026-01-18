// src/components/Driver/LoadSharingPanel.jsx
import React, { useState } from "react";

/**
 * Load Sharing Panel
 * - shows capacity
 * - suggests add-on loads (simulated)
 * - accept will update capacity and projected earning increment
 */

const SUGGESTED_LOADS = [
  { id: 101, farmer: "Raju", cargo: "Onion sacks", kg: 120, extraFare: 220, detourKm: 2 },
  { id: 102, farmer: "Kiran", cargo: "Tools", kg: 70, extraFare: 100, detourKm: 1 },
  { id: 103, farmer: "Sunita", cargo: "Tomato crates", kg: 200, extraFare: 360, detourKm: 5 },
];

export function LoadSharingPanel() {
  const [capacityKg, setCapacityKg] = useState(700); // vehicle capacity in kg
  const [usedKg, setUsedKg] = useState(350); // currently loaded
  const [accepted, setAccepted] = useState([]);

  const remaining = capacityKg - usedKg;
  const fillPercent = Math.min(100, Math.round((usedKg / capacityKg) * 100));

  function addLoad(load) {
    if (load.kg > remaining) {
      alert("Not enough remaining capacity for this load.");
      return;
    }
    setUsedKg((u) => u + load.kg);
    setAccepted((a) => [...a, load]);
  }

  function removeLoad(id) {
    const load = accepted.find((l) => l.id === id);
    if (!load) return;
    setAccepted((a) => a.filter((x) => x.id !== id));
    setUsedKg((u) => u - load.kg);
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-5 border hover:shadow-2xl transition-all">
      <h3 className="text-lg font-semibold mb-2">🤝 Load Sharing</h3>
      <p className="text-sm text-gray-600 mb-3">
        Fill spare capacity by taking multiple small loads. Increases overall income.
      </p>

      <div className="mb-3">
        <div className="flex items-baseline justify-between">
          <div>
            <div className="text-xs text-gray-600">Capacity Used</div>
            <div className="text-lg font-semibold">{usedKg} kg / {capacityKg} kg</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-600">Remaining</div>
            <div className="text-lg font-semibold">{remaining} kg</div>
          </div>
        </div>

        <div className="mt-3 w-full bg-gray-200 h-3 rounded-full overflow-hidden">
          <div className="h-3 bg-indigo-600 transition-all" style={{ width: `${fillPercent}%` }} />
        </div>
      </div>

      <div className="mb-3">
        <div className="text-sm font-medium mb-2">Suggested Add-on Loads</div>
        <div className="space-y-2">
          {SUGGESTED_LOADS.map((s) => (
            <div key={s.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <div className="font-semibold">{s.farmer} — {s.cargo}</div>
                <div className="text-xs text-gray-600">{s.kg} kg • +₹{s.extraFare} • {s.detourKm} km detour</div>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={() => addLoad(s)}
                  disabled={s.kg > remaining}
                  className={`px-3 py-1 rounded-md text-sm ${s.kg > remaining ? "bg-gray-300 text-gray-700" : "bg-green-600 text-white"}`}
                >
                  Add
                </button>
                <button onClick={() => alert("View farmer details")} className="px-3 py-1 rounded-md border text-sm">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {accepted.length > 0 && (
        <div className="mt-3">
          <div className="text-sm font-medium mb-2">Accepted loads</div>
          <div className="space-y-2">
            {accepted.map((a) => (
              <div key={a.id} className="flex items-center justify-between p-3 bg-white rounded-md border">
                <div>
                  <div className="font-medium">{a.farmer} — {a.cargo}</div>
                  <div className="text-xs text-gray-600">{a.kg} kg • +₹{a.extraFare}</div>
                </div>

                <div className="flex gap-2 items-center">
                  <button onClick={() => removeLoad(a.id)} className="px-2 py-1 rounded-md text-sm border">Remove</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
