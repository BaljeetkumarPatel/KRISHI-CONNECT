// backend/src/ivr/templates/driver-call.js

module.exports = {
  driverCall: (job) => {
    return `Namaste. 
    A farmer near you needs transport service. 
    Vehicle required is ${job.transportDetails.vehicleType}. 
    Load weight is ${job.transportDetails.loadWeight} quintals. 
    Pickup pincode ${job.transportDetails.pickupPincode}. 
    Date ${job.transportDetails.requiredDate}, 
    Time ${job.transportDetails.requiredTime}. 
    Press 1 to accept.`;
  },

  driverAccepted: () => ({
    action: "talk",
    text: "You have accepted the transport job. Thank you."
  }),

  driverRejected: () => ({
    action: "talk",
    text: "You have declined this transport job."
  })
};
