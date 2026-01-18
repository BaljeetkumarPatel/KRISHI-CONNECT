// backend/src/utils/helper.js

module.exports = {
  // Convert DTMF digits into useful strings
  dtmfToNumber: (digits) => parseInt(digits, 10),

  // Generate random short ID (for logs or tags)
  shortId: () => Math.random().toString(36).substring(2, 8),

  // Format DDMM into human date
  formatDate: (ddmm) => {
    return `${ddmm.substring(0, 2)}-${ddmm.substring(2, 4)}`;
  },

  // Format HHMM into readable time
  formatTime: (hhmm) => {
    return `${hhmm.substring(0, 2)}:${hhmm.substring(2, 4)}`;
  },

  // Create a labour job summary text
  labourSummary: (job) => {
    return `Workers: ${job.labourDetails.workersNeeded}, Work: ${job.labourDetails.workType}, Date: ${job.labourDetails.startDate}, Time: ${job.labourDetails.startTime}`;
  },

  // Create a transport job summary text
  transportSummary: (job) => {
    return `Vehicle: ${job.transportDetails.vehicleType}, Load: ${job.transportDetails.loadWeight}, Pickup: ${job.transportDetails.pickupPincode}, Date: ${job.transportDetails.requiredDate}`;
  }
};
