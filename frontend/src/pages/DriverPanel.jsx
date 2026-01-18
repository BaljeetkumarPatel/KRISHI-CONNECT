// frontend/src/pages/DriverPanel.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import WorkerList from "../components/WorkerList";

export default function DriverPanel({ onCall }) {
  const [active, setActive] = useState("drivers");
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    fetch("/api/driver/available/560082")
      .then((r) => r.json())
      .then((d) => setDrivers(d.list || []));
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar active={active} setActive={setActive} />

      <div className="flex-1 overflow-auto">
        <Navbar />

        <div className="p-6">
          <h2 className="text-xl font-bold">Available Drivers</h2>

          <WorkerList workers={drivers} onCall={onCall} />
        </div>
      </div>
    </div>
  );
}
