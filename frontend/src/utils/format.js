// frontend/src/utils/format.js

// Convert DDMM → DD-MM format
export function formatDate(date) {
  if (!date || date.length !== 4) return date;
  return `${date.substring(0, 2)}-${date.substring(2)}`;
}

// Convert HHMM → HH:MM format
export function formatTime(time) {
  if (!time || time.length !== 4) return time;
  return `${time.substring(0, 2)}:${time.substring(2)}`;
}

// Format job type
export function formatJobType(type) {
  const map = {
    labour: "Labour Required",
    transport: "Transport Required",
    both: "Labour + Transport",
  };
  return map[type] || type;
}

// Format work type
export function formatWorkType(code) {
  const map = {
    1: "Sowing",
    2: "Harvesting",
    3: "General",
  };
  return map[code] || code;
}

// Job summary
export function formatJobSummary(job) {
  return `
Job ID: ${job._id}
Type: ${formatJobType(job.type)}
Pincode: ${job.pincode}
`;
}
