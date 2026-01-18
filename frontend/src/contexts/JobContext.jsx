// frontend/src/contexts/JobContext.js
import React, { createContext, useState, useEffect, useContext } from "react";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/job/all");
      const data = await res.json();
      setJobs(data.data || []);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch jobs", error);
      setLoading(false);
    }
  };

  const refreshJobs = () => fetchJobs();

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <JobContext.Provider value={{ jobs, loading, refreshJobs }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJob = () => useContext(JobContext);
