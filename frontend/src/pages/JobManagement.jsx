// frontend/src/pages/JobManagement.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import JobCard from "../components/JobCard";

export default function JobManagement() {
  const [active, setActive] = useState("jobs");
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("/api/job/all")
      .then((r) => r.json())
      .then((d) => setJobs(d.data || []));
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar active={active} setActive={setActive} />

      <div className="flex-1 overflow-auto">
        <Navbar />

        <div className="p-6 grid gap-4">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}
