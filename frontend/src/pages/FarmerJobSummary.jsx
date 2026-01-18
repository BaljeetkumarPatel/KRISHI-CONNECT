// frontend/src/pages/FarmerJobSummary.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

export default function FarmerJobSummary() {
  const [active, setActive] = useState("jobs");
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    fetch("/api/job/summary")
      .then((r) => r.json())
      .then((d) => setSummary(d.data));
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar active={active} setActive={setActive} />

      <div className="flex-1 overflow-auto">
        <Navbar />

        <div className="p-6">
          <Card>
            <h3 className="font-bold text-xl">Farmer Job Summary</h3>

            {summary ? (
              <div className="mt-3">
                <p>Job ID: {summary._id}</p>
                <p>Workers Needed: {summary.labourDetails?.workersNeeded}</p>
                <p>Vehicle Type: {summary.transportDetails?.vehicleType}</p>
                <p>Status: {summary.status}</p>
              </div>
            ) : (
              <p>No job data available.</p>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
