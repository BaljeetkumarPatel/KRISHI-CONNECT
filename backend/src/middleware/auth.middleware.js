// backend/src/middleware/auth.middleware.js
const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  requireUser: async (req, res, next) => {
    try {
      const phone = req.headers["x-user-phone"] || req.body.phone;

      if (!phone)
        return res.status(400).json({ success: false, message: "Phone is required" });

      const user = await User.findOne({ phone });

      if (!user)
        return res.status(404).json({ success: false, message: "User not found" });

      req.user = user;
      next();
    } catch (error) {
      next(error);
    }
  },

  verifyPIN: async (req, res, next) => {
    try {
      const { pin } = req.body;

      if (!pin)
        return res.status(400).json({ success: false, message: "PIN is required" });

      const user = await User.findOne({ phone: req.body.phone });
      if (!user)
        return res.status(404).json({ success: false, message: "User not found" });

      const isMatch = await bcrypt.compare(pin, user.pinHash);
      if (!isMatch)
        return res.status(401).json({ success: false, message: "Invalid PIN" });

      req.user = user;
      next();
    } catch (error) {
      next(error);
    }
  }
};

