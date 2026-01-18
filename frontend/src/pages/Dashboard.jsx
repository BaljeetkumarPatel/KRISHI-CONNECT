// Dashboard.jsx
import React, { useEffect, useState } from "react";
import FarmerDashboard from "./FarmerDashboard";
import LabourDashboard from "./LabourDashboard";
import DriverDashboard from "./DriverDashboard";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    if (data) setUser(data);
  }, []);

  if (!user) return <p className="pt-24 text-center text-gray-600">Loading...</p>;

  return (
    <div className="pt-20 px-6 md:px-16 min-h-screen bg-gray-50">
      {user.role === "farmer" && <FarmerDashboard user={user} />}
      {user.role === "labour" && <LabourDashboard user={user} />}
      {user.role === "driver" && <DriverDashboard user={user} />}
    </div>
  );
}
