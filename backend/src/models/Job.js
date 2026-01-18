// backend/src/models/Job.js
const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  farmerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  type: {
    type: String,
    enum: ["labour", "transport", "both"],
    required: true,
  },

  labourDetails: {
    workersNeeded: Number,
    workType: String, // sowing, harvesting, general
    startDate: String,
    startTime: String,
  },

  transportDetails: {
    vehicleType: String,
    loadWeight: Number,
    pickupPincode: String,
    requiredDate: String,
    requiredTime: String,
  },

  pincode: String,

  matchedLabours: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      status: { type: String, enum: ["pending", "accepted", "rejected"], default: "pending" },
    },
  ],

  matchedDrivers: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      status: { type: String, enum: ["pending", "accepted", "rejected"], default: "pending" },
    },
  ],

  status: {
    type: String,
    enum: ["pending", "awaiting_confirmation", "confirmed", "cancelled", "completed"],
    default: "pending",
  },

  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Job", JobSchema);
