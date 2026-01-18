// backend/src/routes/index.js
const express = require("express");
const router = express.Router();

router.use("/auth", require("./auth.routes"));
router.use("/ivr", require("./ivr.routes"));
router.use("/job", require("./job.routes"));
router.use("/labour", require("./labour.routes"));
router.use("/driver", require("./driver.routes"));
router.use("/admin", require("./admin.routes"));

module.exports = router;
