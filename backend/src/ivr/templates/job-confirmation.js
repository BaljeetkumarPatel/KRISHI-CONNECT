// backend/src/ivr/templates/job-confirmation.js

module.exports = {
  labourSummary: (job) => {
    return `You requested ${job.labourDetails.workersNeeded} labourers 
    for ${job.labourDetails.workType}. 
    Date ${job.labourDetails.startDate}, 
    Time ${job.labourDetails.startTime}. 
    Press 1 to confirm. Press 2 to cancel.`;
  },

  transportSummary: (job) => {
    return `You requested transport service. 
    Vehicle ${job.transportDetails.vehicleType}. 
    Load ${job.transportDetails.loadWeight} quintals. 
    Pickup pincode ${job.transportDetails.pickupPincode}. 
    Date ${job.transportDetails.requiredDate}, 
    Time ${job.transportDetails.requiredTime}. 
    Press 1 to confirm. Press 2 to cancel.`;
  },

  bothSummary: (job) => {
    return `You requested both labour and transport services. 
    Labour needed ${job.labourDetails.workersNeeded}. 
    Vehicle ${job.transportDetails.vehicleType}. 
    Pickup ${job.transportDetails.pickupPincode}. 
    Press 1 to confirm. Press 2 to cancel.`;
  }
};
