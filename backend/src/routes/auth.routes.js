// backend/src/routes/auth.routes.js
const express = require("express");
const router = express.Router();
const Auth = require("../controllers/auth.controller");

// Register new user
router.post("/register", Auth.registerUser);

// Verify 4-digit PIN
router.post("/verify-pin", Auth.verifyPIN);

// Identify role from phone number (IVR auto-detect)
router.post("/identify", Auth.identifyRole);

module.exports = router;
