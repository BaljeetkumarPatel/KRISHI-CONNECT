// backend/src/routes/labour.routes.js
const express = require("express");
const router = express.Router();
const Labour = require("../controllers/labour.controller");

// Labour posts their availability
router.post("/availability", Labour.createAvailability);

// Get all available labour in a pincode
router.get("/available/:pincode", Labour.getAvailableLabours);

module.exports = router;
