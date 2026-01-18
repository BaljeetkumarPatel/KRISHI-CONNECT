// backend/src/routes/admin.routes.js
const express = require("express");
const router = express.Router();
const Admin = require("../controllers/admin.controller");

// Admin dashboard metrics
router.get("/stats", Admin.dashboardStats);

// Call logs for debugging
router.get("/call-logs", Admin.getLogs);

module.exports = router;
