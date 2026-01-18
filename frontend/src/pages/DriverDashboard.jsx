// src/pages/DriverDashboard.jsx

import React from "react";

import {
  TotalTripsCard,
  TotalDistanceCard,
  DriverEarningsCard,
  EmptyReturnOptimizationCard,
  FuelEfficiencyCard,
} from "../components/Driver/DriverStatsCards";
import { DriverVehicleStatusPanel } from "../components/Driver/DriverVehicleStatus";
import { DriverCurrentTripCard } from "../components/Driver/DriverCurrentTrip";
import { DriverEarningsGraph, DriverDistanceGraph } from "../components/Driver/DriverAnalytics";
import { DriverNotificationsPanel } from "../components/Driver/DriverNotifications";
import { DriverTripHistoryTable } from "../components/Driver/DriverTripHistory";
import { DriverActionGrid } from "../components/Driver/DriverActionGrid";
import DriverTransportExtrasSection from "../components/Driver/DriverTransportExtras";
import { ReturnTripFinder } from "../components/Driver/ReturnTripFinder";
import { LoadSharingPanel } from "../components/Driver/LoadSharingPanel";
import { DriverEarningsProjection } from "../components/Driver/DriverEarningsProjection";
import { FuelLogPanel } from "../components/Driver/FuelLogPanel";

export default function DriverDashboard({user}) {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-green-700 mb-8">
        Welcome, {user?.name || "DRIVER"} 👨‍🌾
      </h1>

      {/* ---------------------- TOP STATS SECTION ---------------------- */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Driver Performance Summary</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <TotalTripsCard />
          <TotalDistanceCard />
          <DriverEarningsCard />
          <EmptyReturnOptimizationCard />
          <FuelEfficiencyCard />
        </div>
      </div>
      <DriverVehicleStatusPanel />

      <DriverCurrentTripCard />
      <DriverEarningsGraph />
      <DriverDistanceGraph />
      <DriverNotificationsPanel />
      <DriverTripHistoryTable />
      <DriverActionGrid />
      <DriverTransportExtrasSection>
        <ReturnTripFinder />
        <LoadSharingPanel />
        <DriverEarningsProjection />
        <FuelLogPanel />
      </DriverTransportExtrasSection>

    </div>
  );
}
