// backend/src/ivr/flows/outbound.flow.js

module.exports = {
  labourCall: (job) => ({
    action: "talk",
    text: `Namaste. A farmer near you needs labourers for job ${job._id}. Reporting time ${job.labourDetails.startTime}, date ${job.labourDetails.startDate}. Press 1 to accept.`,
    dtmf: true,
    maxDigits: 1
  }),

  driverCall: (job) => ({
    action: "talk",
    text: `Namaste. Transport required for job ${job._id}. Vehicle needed ${job.transportDetails.vehicleType}. Pickup pincode ${job.transportDetails.pickupPincode}. Press 1 to accept.`,
    dtmf: true,
    maxDigits: 1
  }),

  accepted: () => ({
    action: "talk",
    text: "Thank you. Your acceptance has been recorded."
  }),

  rejected: () => ({
    action: "talk",
    text: "You have declined this job."
  })
};
