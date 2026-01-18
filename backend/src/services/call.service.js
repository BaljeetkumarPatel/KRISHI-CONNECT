// backend/src/services/call.service.js
module.exports = {
  outboundCall: async (phone, message) => {
    console.log("Outbound call to:", phone);

    // Placeholder: integrate VAPI outbound call API

    return {
      action: "call",
      to: phone,
      message: message
    };
  },

  workerCallScript: (job, userType) => {
    if (userType === "labour") {
      return `Namaste. A nearby farmer needs labourers for job ${job._id}. Press 1 to accept.`;
    }
    if (userType === "driver") {
      return `Transport is required for job ${job._id}. Press 1 to accept.`;
    }
  }
};
