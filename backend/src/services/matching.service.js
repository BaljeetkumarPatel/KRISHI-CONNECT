// backend/src/services/matching.service.js
const LabourAvailability = require("../models/LabourAvailability");
const DriverAvailability = require("../models/DriverAvailability");
const User = require("../models/User");

module.exports = {
  findMatches: async (job) => {
    const pincode = job.pincode;

    // 1) Find labour near pincode
    const labours = await LabourAvailability.find({
      pincode,
      status: "available"
    }).limit(20);

    const labourMatches = labours.map((l) => ({
      userId: l.userId,
      status: "pending"
    }));

    // 2) Find drivers
    const drivers = await DriverAvailability.find({
      basePincode: pincode,
      status: "available"
    }).limit(20);

    const driverMatches = drivers.map((d) => ({
      userId: d.userId,
      status: "pending"
    }));

    return {
      labours: labourMatches,
      drivers: driverMatches
    };
  }
};
