// backend/src/models/DriverAvailability.js
const mongoose = require("mongoose");

const DriverAvailabilitySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  vehicleType: {
    type: String,
    enum: ["tractor", "trolley", "mini-truck", "pickup"],
    required: true,
  },

  capacity: {
    type: Number, // quintals
    required: true,
  },

  basePincode: { type: String, required: true },

  route: {
    startPincode: String,
    endPincode: String,
    isReturn: { type: Boolean, default: false },
  },

  availableDates: [String], // DDMM
  availableTime: String, // HHMM

  status: {
    type: String,
    enum: ["available", "busy", "inactive"],
    default: "available",
  },

  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model(
  "DriverAvailability",
  DriverAvailabilitySchema
);
