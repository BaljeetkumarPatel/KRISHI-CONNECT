// frontend/src/utils/constants.js

export const API_BASE =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const ENDPOINTS = {
  JOBS: "/job/all",
  LABOUR_AVAILABLE: "/labour/available",
  DRIVER_AVAILABLE: "/driver/available",
  ADMIN_STATS: "/admin/stats",
};

export const COLORS = {
  primary: "#16a34a",
  danger: "#dc2626",
  warning: "#f59e0b",
};

export const ROLES = {
  FARMER: "farmer",
  LABOUR: "labour",
  DRIVER: "driver",
  AGENT: "agent",
};
