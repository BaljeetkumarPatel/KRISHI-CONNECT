import React from "react";
import FarmerStatCard from "../components/Farmer/FarmerStatsCards";
import FarmerQuickActions from "../components/Farmer/FarmerQuickActions";
import FarmerListSections from "../components/Farmer/FarmerListSections";
import Analytics from "../components/Farmer/analytics/analytics";
import FarmerNotifications from "../components/Farmer/FarmerNotifications";
import ExpenseLedger from "../components/Farmer/ExpenseLedger";
import FarmCalendar from "../components/Farmer/FarmCalendar";
import SeasonalAdvisory from "../components/Farmer/SeasonalAdvisory";
import Footer from "../components/Footer";
export default function FarmerDashboard({ user }) {
  return (
    <div>
    <div className="pt-10 px-6 md:px-16 lg:px-24 pb-20">
      <h1 className="text-3xl font-bold text-green-700 mb-8">
        Welcome, {user?.name || "Farmer"} 👨‍🌾
      </h1>

      {/* 4 STAT CARDS */}
      <FarmerStatCard />
      <FarmerQuickActions />
      <FarmerListSections />
      <Analytics />
      <FarmerNotifications />
      <FarmCalendar />
      <SeasonalAdvisory />
      <ExpenseLedger />
      
    </div>
    <Footer />
    </div>
  );
}
