// src/components/Driver/DriverStatsCards.jsx

import React from "react";

/* -------------------------------------------------------------------------- */
/*                           BASE CARD COMPONENT                              */
/* -------------------------------------------------------------------------- */

export function DriverStatsCard({ icon, title, value, subtitle }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border flex flex-col gap-2 text-center justify-center items-center">
      
      <div className="text-4xl">{icon}</div>

      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

      <p className="text-2xl font-bold text-green-700">{value}</p>

      {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                           DRIVER SUMMARY CARDS                             */
/* -------------------------------------------------------------------------- */

export function TotalTripsCard() {
  return (
    <DriverStatsCard
      icon="🚚"
      title="Total Trips"
      value="22 Trips"
      subtitle="Completed this month"
    />
  );
}

export function TotalDistanceCard() {
  return (
    <DriverStatsCard
      icon="📏"
      title="Distance Driven"
      value="148 km"
      subtitle="Driven this month"
    />
  );
}

export function DriverEarningsCard() {
  return (
    <DriverStatsCard
      icon="💰"
      title="Freight Earnings"
      value="₹7,500"
      subtitle="Earned this month"
    />
  );
}

/* -------------------------------------------------------------------------- */
/*                        ADDITIONAL DRIVER PERFORMANCE                       */
/* -------------------------------------------------------------------------- */

export function EmptyReturnOptimizationCard() {
  return (
    <DriverStatsCard
      icon="🔄"
      title="Empty Return Saved"
      value="18 km"
      subtitle="Optimized backhaul trips"
    />
  );
}

export function FuelEfficiencyCard() {
  return (
    <DriverStatsCard
      icon="⛽"
      title="Fuel Efficiency"
      value="8.4 km/l"
      subtitle="Based on load & distance"
    />
  );
}
