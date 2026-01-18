// frontend/src/pages/AgentDashboard.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AgentDialer from "../components/AgentDialer";
import Card from "../components/Card";

export default function AgentDashboard({ vapi }) {
  const [stats, setStats] = useState({});
  const [active, setActive] = useState("dashboard");

  useEffect(() => {
    fetch("/api/admin/stats")
      .then((r) => r.json())
      .then((d) => setStats(d.stats || {}));
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar active={active} setActive={setActive} />

      <div className="flex-1 overflow-auto">
        <Navbar />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          <Card>
            <h3 className="text-lg font-bold">Users</h3>
            <p className="text-2xl font-bold">{stats?.users || 0}</p>
          </Card>

          <Card>
            <h3 className="text-lg font-bold">Jobs</h3>
            <p className="text-2xl font-bold">{stats?.jobs || 0}</p>
          </Card>

          <Card>
            <h3 className="text-lg font-bold">Calls</h3>
            <p className="text-2xl font-bold">{stats?.calls || 0}</p>
          </Card>
        </div>

        <div className="p-6">
          <AgentDialer vapi={vapi} />
        </div>
      </div>
    </div>
  );
}
