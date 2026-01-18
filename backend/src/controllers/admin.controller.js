// backend/src/controllers/admin.controller.js
const Job = require("../models/Job");
const User = require("../models/User");
const CallLog = require("../models/CallLog");

module.exports = {
  dashboardStats: async (req, res) => {
    try {
      const users = await User.countDocuments();
      const jobs = await Job.countDocuments();
      const calls = await CallLog.countDocuments();

      return res.json({
        success: true,
        stats: { users, jobs, calls }
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  getLogs: async (req, res) => {
    try {
      const logs = await CallLog.find().sort({ createdAt: -1 });
      return res.json({ success: true, logs });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};
