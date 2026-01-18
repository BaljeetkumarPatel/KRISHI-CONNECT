// backend/src/services/sms.service.js

module.exports = {
  sendSMS: async (phone, message) => {
    console.log("SMS sending placeholder:", phone, message);

    // TODO: integrate with VAPI SMS API
    return { success: true };
  },

  jobSummaryToFarmer: async (phone, job) => {
    const text = `JOB${job._id}: Labour ${job.labourDetails?.workersNeeded || 0}, Transport ${job.transportDetails?.vehicleType || 'N/A'}`;
    return module.exports.sendSMS(phone, text);
  },

  workerNotificationSMS: async (phone, jobId) => {
    const text = `JOB${jobId}: Press 1 to accept job. Reply with 1.`;
    return module.exports.sendSMS(phone, text);
  }
};
