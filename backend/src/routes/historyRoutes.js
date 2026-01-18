const express = require("express");
const router = express.Router();

const { getHistory } = require("../controllers/historyController");
const { requireUser, verifyPIN } = require("../middleware/auth.middleware");

router.get("/", requireUser, verifyPIN, getHistory);

module.exports = router;

