// backend/src/controllers/auth.controller.js
const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  // First-time user registration
  registerUser: async (req, res) => {
    try {
      const { phone, role, pincode, pin } = req.body;

      let existing = await User.findOne({ phone });
      if (existing) {
        return res.json({ success: false, message: "User already registered" });
      }

      const pinHash = await bcrypt.hash(pin, 10);

      const user = await User.create({
        phone,
        role,
        pincode,
        pinHash,
      });

      return res.json({ success: true, user });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // PIN verification for returning calls
  verifyPIN: async (req, res) => {
    try {
      const { phone, pin } = req.body;

      const user = await User.findOne({ phone });
      if (!user) return res.json({ success: false, message: "User not found" });

      const match = await bcrypt.compare(pin, user.pinHash);
      return res.json({ success: match });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Identify user role instantly (IVR uses this)
  identifyRole: async (req, res) => {
    try {
      const { phone } = req.body;

      const user = await User.findOne({ phone });
      if (!user) return res.json({ registered: false });

      return res.json({
        registered: true,
        role: user.role,
        pincode: user.pincode,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};
