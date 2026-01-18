// frontend/src/pages/LabourPanel.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import WorkerList from "../components/WorkerList";

export default function LabourPanel({ onCall }) {
  const [active, setActive] = useState("workers");
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    fetch("/api/labour/available/560082")
      .then((r) => r.json())
      .then((d) => setWorkers(d.list || []));
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar active={active} setActive={setActive} />

      <div className="flex-1 overflow-auto">
        <Navbar />

        <div className="p-6">
          <h2 className="text-xl font-bold">Available Labour</h2>

          <WorkerList workers={workers} onCall={onCall} />
        </div>
      </div>
    </div>
  );
}
