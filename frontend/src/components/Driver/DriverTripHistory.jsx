// src/components/Driver/DriverTripHistory.jsx

import React from "react";

export function DriverTripHistoryTable() {
  const trips = [
    {
      date: "10 July",
      pickup: "Village A",
      drop: "City B",
      cargo: "Tomato Crates",
      fare: "₹600",
      status: "Completed",
      payment: "Paid",
    },
    {
      date: "8 July",
      pickup: "Village C",
      drop: "Depot D",
      cargo: "Wheat Bags",
      fare: "₹450",
      status: "Completed",
      payment: "Pending",
    },
    {
      date: "6 July",
      pickup: "Village F",
      drop: "Mandi X",
      cargo: "Fertilizer",
      fare: "₹900",
      status: "Completed",
      payment: "Overdue",
    },
  ];

  const paymentColors = {
    Paid: "text-green-600 font-semibold",
    Pending: "text-yellow-600 font-semibold",
    Overdue: "text-red-600 font-semibold",
  };

  const paymentIcons = {
    Paid: "🟢",
    Pending: "🟡",
    Overdue: "🔴",
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border hover:shadow-2xl transition-all w-full">
      {/* Section Header */}
      <h2 className="text-lg font-semibold mb-4">📚 Trip History</h2>
      <p className="text-sm text-gray-500 mb-4">
        Past trips with payment & status details
      </p>

      {/* Responsive Wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-left uppercase text-xs tracking-wide">
              <th className="p-3 rounded-l-lg">Date</th>
              <th className="p-3">Pickup → Drop</th>
              <th className="p-3">Cargo</th>
              <th className="p-3">Fare</th>
              <th className="p-3">Status</th>
              <th className="p-3 rounded-r-lg">Payment</th>
            </tr>
          </thead>

          <tbody>
            {trips.map((trip, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition-all"
              >
                <td className="p-3">{trip.date}</td>

                <td className="p-3 font-medium">
                  {trip.pickup} → <span className="text-green-600">{trip.drop}</span>
                </td>

                <td className="p-3">{trip.cargo}</td>

                <td className="p-3 font-semibold text-green-700">{trip.fare}</td>

                <td className="p-3 text-gray-700">{trip.status}</td>

                <td className="p-3">
                  <span className={`flex items-center gap-1 ${paymentColors[trip.payment]}`}>
                    {paymentIcons[trip.payment]} {trip.payment}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
