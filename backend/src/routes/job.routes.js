// backend/src/routes/job.routes.js
const express = require("express");
const router = express.Router();
const Job = require("../controllers/job.controller");

// Create job (farmer posting requirement)
router.post("/create", Job.createJob);

// Auto matching engine trigger
router.post("/match", Job.autoMatch);

// Farmer confirms matched labour + drivers
router.post("/confirm", Job.confirmJob);

module.exports = router;
