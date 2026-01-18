// backend/src/controllers/job.controller.js
const Job = require("../models/Job");
const User = require("../models/User");
const MatchingService = require("../services/matching.service");
const WorkerNotifyService = require("../services/worker-notify.service");

module.exports = {
  createJob: async (req, res) => {
    try {
      const data = req.body;

      const job = await Job.create(data);

      return res.json({ success: true, job });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  autoMatch: async (req, res) => {
    try {
      const { jobId } = req.body;

      const job = await Job.findById(jobId).populate("farmerId");
      if (!job) return res.json({ success: false });

      const matches = await MatchingService.findMatches(job);

      // Save matches
      job.matchedLabours = matches.labours;
      job.matchedDrivers = matches.drivers;
      job.status = "awaiting_confirmation";
      await job.save();

      return res.json({
        success: true,
        job,
        matches
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  confirmJob: async (req, res) => {
    try {
      const { jobId } = req.body;

      const job = await Job.findById(jobId);
      if (!job) return res.json({ success: false });

      job.status = "confirmed";
      await job.save();

      // Notify workers & drivers via outbound call
      await WorkerNotifyService.notifyAll(job);

      return res.json({ success: true, job });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};
