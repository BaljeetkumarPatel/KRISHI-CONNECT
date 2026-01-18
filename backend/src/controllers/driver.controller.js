// backend/src/controllers/driver.controller.js
const DriverAvailability = require("../models/DriverAvailability");

module.exports = {
  createAvailability: async (req, res) => {
    try {
      const rec = await DriverAvailability.create(req.body);
      return res.json({ success: true, rec });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  getAvailableDrivers: async (req, res) => {
    try {
      const { pincode } = req.params;

      const list = await DriverAvailability.find({
        basePincode: pincode,
        status: "available"
      }).populate("userId");

      return res.json({ success: true, list });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};
