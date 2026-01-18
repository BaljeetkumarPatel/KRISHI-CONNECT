// backend/src/models/LabourAvailability.js
const mongoose = require("mongoose");

const LabourAvailabilitySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  pincode: { type: String, required: true },

  jobTypes: [
    {
      type: String,
      enum: ["sowing", "harvesting", "general", "any"],
    },
  ],

  availableDates: [String], // DDMM format
  availableTime: String, // HHMM format

  status: {
    type: String,
    enum: ["available", "busy", "inactive"],
    default: "available",
  },

  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model(
  "LabourAvailability",
  LabourAvailabilitySchema
);
