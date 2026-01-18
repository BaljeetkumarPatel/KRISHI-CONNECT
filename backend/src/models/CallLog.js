// backend/src/models/CallLog.js
const mongoose = require("mongoose");

const CallLogSchema = new mongoose.Schema({
  callId: String,

  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  direction: {
    type: String,
    enum: ["inbound", "outbound"],
  },

  status: {
    type: String,
    enum: ["ringing", "answered", "failed", "completed", "busy", "no-answer"],
  },

  dtmf: { type: String }, // key pressed by user

  duration: Number,

  meta: {}, // any extra call provider info

  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("CallLog", CallLogSchema);
