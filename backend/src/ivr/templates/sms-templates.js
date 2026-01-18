// backend/src/ivr/templates/sms-templates.js

module.exports = {
  farmerJobSMS: (job) => {
    return `JOB${job._id}: Your job has been posted. Matches will be notified.`;
  },

  labourSMS: (job) => {
    return `JOB${job._id}: ${job.labourDetails.workersNeeded} labour needed on ${job.labourDetails.startDate}. Reply 1 to accept.`;
  },

  driverSMS: (job) => {
    return `JOB${job._id}: Transport needed (${job.transportDetails.vehicleType}). Pickup ${job.transportDetails.pickupPincode}. Reply 1 to accept.`;
  },

  acceptedSMS: (jobId) => {
    return `JOB${jobId}: You have been confirmed. Please report on time.`;
  },

  cancelledSMS: (jobId) => {
    return `JOB${jobId}: This job has been cancelled by the farmer.`;
  }
};
