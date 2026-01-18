const express = require("express");
const router = express.Router();

const jobAuth = require("../middleware/jobAuth");
const { createJob } = require("../controllers/jobController");
const { requireUser } = require("../middleware/auth.middleware");

router.post("/new", requireUser, createJob);

module.exports = router;