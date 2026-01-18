const express = require("express");
const router = express.Router();

const { askBot } = require("../controllers/botController");
const { requireUser, verifyPIN } = require("../middleware/auth.middleware");
const { upload } = require("../utils/upload");

router.post("/ask", upload.single("file"), askBot);

module.exports = router;
