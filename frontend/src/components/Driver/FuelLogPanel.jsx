// src/components/Driver/FuelLogPanel.jsx
import React, { useMemo, useState } from "react";

/**
 * Fuel log:
 * - entries: { date, amount₹, liters, odoKm }
 * - computes total spend, total liters, avg km/l based on odo diffs (if provided)
 * - simple local state version
 */

export function FuelLogPanel() {
  const [entries, setEntries] = useState([
    { id: 1, date: "2025-11-28", amount: 600, liters: 6.5, odo: 12450 },
    { id: 2, date: "2025-12-02", amount: 700, liters: 7.1, odo: 12510 },
  ]);

  const [form, setForm] = useState({ date: "", amount: "", liters: "", odo: "" });

  function addEntry(e) {
    e.preventDefault();
    const id = Date.now();
    setEntries((s) => [{ id, date: form.date || new Date().toISOString().slice(0, 10), amount: Number(form.amount), liters: Number(form.liters), odo: Number(form.odo) }, ...s]);
    setForm({ date: "", amount: "", liters: "", odo: "" });
  }

  const totals = useMemo(() => {
    const totalAmount = entries.reduce((s, e) => s + (e.amount || 0), 0);
    const totalLiters = entries.reduce((s, e) => s + (e.liters || 0), 0);
    // estimate km/l if odo diffs present
    let kmDriven = 0;
    const odos = entries.map((e) => e.odo).filter(Boolean).sort((a, b) => a - b);
    if (odos.length >= 2) {
      kmDriven = odos[odos.length - 1] - odos[0];
    }
    const avgKmPerL = totalLiters > 0 ? (kmDriven / totalLiters).toFixed(2) : null;
    return { totalAmount, totalLiters, kmDriven, avgKmPerL };
  }, [entries]);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-5 border hover:shadow-2xl transition-all">
      <h3 className="text-lg font-semibold mb-2">⛽ Fuel Log</h3>
      <p className="text-sm text-gray-600 mb-3">Record fuel purchases to track profit and efficiency.</p>

      <form onSubmit={addEntry} className="grid grid-cols-1 sm:grid-cols-4 gap-2 items-end">
        <input type="date" value={form.date} onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))} className="p-2 border rounded-md" />
        <input type="number" placeholder="Amount ₹" value={form.amount} onChange={(e) => setForm((f) => ({ ...f, amount: e.target.value }))} className="p-2 border rounded-md"/>
        <input type="number" placeholder="Liters" value={form.liters} onChange={(e) => setForm((f) => ({ ...f, liters: e.target.value }))} className="p-2 border rounded-md"/>
        <input type="number" placeholder="Odometer (km)" value={form.odo} onChange={(e) => setForm((f) => ({ ...f, odo: e.target.value }))} className="p-2 border rounded-md"/>
        <div className="sm:col-span-4">
          <button type="submit" className="mt-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">Add Entry</button>
        </div>
      </form>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-gray-50 p-3 rounded-md text-center">
          <div className="text-xs text-gray-500">Total Spend</div>
          <div className="font-semibold">₹{totals.totalAmount}</div>
        </div>

        <div className="bg-gray-50 p-3 rounded-md text-center">
          <div className="text-xs text-gray-500">Total Liters</div>
          <div className="font-semibold">{totals.totalLiters} L</div>
        </div>

        <div className="bg-gray-50 p-3 rounded-md text-center">
          <div className="text-xs text-gray-500">Est. Avg km/L</div>
          <div className="font-semibold">{totals.avgKmPerL ?? "—"}</div>
        </div>
      </div>

      <div className="mt-4">
        <div className="text-sm font-medium mb-2">Recent Entries</div>
        <div className="space-y-2">
          {entries.map((e) => (
            <div key={e.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium">{e.date}</div>
                <div className="text-xs text-gray-600">{e.liters} L • ₹{e.amount} • {e.odo ? `${e.odo} km` : "odo —"}</div>
              </div>
              <div className="text-sm text-gray-500">—</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
