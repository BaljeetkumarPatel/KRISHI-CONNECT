// src/pages/LabourDashboard.jsx

import {
  TotalEarningsCard,
  DaysWorkedCard,
  ReliabilityScoreCard,
  RecentActivityCard,
  AvailabilityToggle,
} from "../components/Labour/LabourStatsCards";
import { ActiveJobCard } from "../components/Labour/LabourActiveJob";
import { LabourAchievementsRow } from "../components/Labour/LabourAchievements";
import {
  EarningsChartCard,
  RatingsBreakdownCard,
} from "../components/Labour/LabourAnalytics";
import { LabourNotificationsPanel } from "../components/Labour/LabourNotifications";
import { LabourActionGrid } from "../components/Labour/LabourActionGrid";

export default function LabourDashboard({user}) {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-green-700 mb-8">
        Welcome, {user?.name || "LABOURER"} 👨‍🌾
      </h1>

      {/* TOP STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <TotalEarningsCard />
        <DaysWorkedCard />
        <ReliabilityScoreCard />
      </div>

      {/* AVAILABILITY */}
      <AvailabilityToggle />

      {/* RECENT ACTIVITY */}
      <RecentActivityCard />
      <ActiveJobCard />
      <LabourAchievementsRow />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EarningsChartCard />
        <RatingsBreakdownCard />
      </div>
      <LabourNotificationsPanel />
      <LabourActionGrid />

    </div>
  );
}
