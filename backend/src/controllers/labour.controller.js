// backend/src/controllers/labour.controller.js
const LabourAvailability = require("../models/LabourAvailability");

module.exports = {
  createAvailability: async (req, res) => {
    try {
      const data = req.body;

      const rec = await LabourAvailability.create(data);

      return res.json({ success: true, rec });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  getAvailableLabours: async (req, res) => {
    try {
      const { pincode } = req.params;

      const list = await LabourAvailability.find({
        pincode,
        status: "available"
      }).populate("userId");

      return res.json({ success: true, list });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};
