// src/pages/FarmerDashboard.jsx
import EarningsChart from "./EarningsChart";
import WorkerRatingAnalytics from "./WorkerRatingAnalytics";
import CropCycleTimeline from "./CropCycleTimeline";

export default function Analytics() {
  return (
    <div className="p-6 space-y-6">

      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EarningsChart />
        <WorkerRatingAnalytics />
      </div>

      {/* FULL WIDTH TIMELINE */}
      <CropCycleTimeline />
    </div>
  );
}
