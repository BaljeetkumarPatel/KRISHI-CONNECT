// backend/src/routes/driver.routes.js
const express = require("express");
const router = express.Router();
const Driver = require("../controllers/driver.controller");

// Driver posts availability
router.post("/availability", Driver.createAvailability);

// Find available drivers near the farmer
router.get("/available/:pincode", Driver.getAvailableDrivers);

module.exports = router;
