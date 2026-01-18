// src/components/Driver/DriverCurrentTrip.jsx

import React from "react";

export function DriverCurrentTripCard() {
  const trip = {
    pickup: "Village Rampur",
    drop: "Mandi City",
    cargo: "Tomato Crates",
    weight: "350 kg",
    fare: "₹650",
    eta: "23 mins",
    farmerPhone: "+919876543210",
    pickupLat: "28.7041",
    pickupLng: "77.1025",
  };

  const mapLink = `https://maps.google.com/?q=${trip.pickupLat},${trip.pickupLng}`;

  return (
    <div className="bg-white rounded-2xl shadow-lg border hover:shadow-xl transition-all p-0 overflow-hidden w-1/3 ">

      {/* Header */}
      <div className="p-5 bg-gradient-to-r from-green-600 to-green-400 text-white flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Current Trip</h2>
          <p className="text-sm opacity-90">Live trip details & actions</p>
        </div>
        <div className="text-4xl">📍</div>
      </div>

      {/* Body */}
      <div className="p-6 space-y-6">

        {/* Route */}
        <div>
          <p className="text-gray-600 text-sm font-medium">Route</p>
          <p className="text-lg font-semibold text-gray-800">
            {trip.pickup} → <span className="text-green-700">{trip.drop}</span>
          </p>
        </div>

        {/* Cargo Type */}
        <div>
          <p className="text-gray-600 text-sm font-medium">Cargo</p>
          <p className="font-semibold text-gray-800 text-md">{trip.cargo}</p>
        </div>

        {/* Load Weight */}
        <div>
          <p className="text-gray-600 text-sm font-medium">Load Weight</p>
          <p className="font-semibold text-gray-800 text-md">{trip.weight}</p>
        </div>

        {/* Fare */}
        <div>
          <p className="text-gray-600 text-sm font-medium">Fare</p>
          <p className="font-semibold text-green-700 text-lg">{trip.fare}</p>
        </div>

        {/* ETA */}
        <div>
          <p className="text-gray-600 text-sm font-medium">Estimated Time</p>
          <p className="font-semibold text-gray-800 text-md">ETA: {trip.eta}</p>
        </div>

        {/* Navigation Button */}
        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl shadow active:scale-95 transition"
        >
          🧭 Open Directions (Google Maps)
        </a>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">

          <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-xl shadow active:scale-95 transition">
            ✔️ Mark Pickup Completed
          </button>

          <button className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl shadow active:scale-95 transition">
            ✅ Mark Delivery Completed
          </button>

          <a
            href={`tel:${trip.farmerPhone}`}
            className="bg-gray-700 hover:bg-gray-800 text-white py-2 rounded-xl shadow text-center active:scale-95 transition"
          >
            📞 Call Farmer
          </a>

        </div>

      </div>

    </div>
  );
}
