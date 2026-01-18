// backend/src/models/User.js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
    unique: true,
  },

  role: {
    type: String,
    enum: ["farmer", "labour", "driver"],
    required: true,
  },

  pincode: {
    type: String,
    required: true,
  },

  pinHash: {
    type: String,
    // required: true, // Hashed 4-digit PIN
  },

  language: {
    type: String,
    default: "hi", // default Hindi
  },

  verified: {
    type: Boolean,
    default: false,
  },

  rating: {
    totalRating: { type: Number, default: 0 },
    count: { type: Number, default: 0 },
  },

  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", UserSchema);
