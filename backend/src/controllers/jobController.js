const Job = require("../models/Job");

module.exports.createJob = async (req, res) => {
  try {
    const {
      role,
      numLabour,
      labourType,
      licenseType,
      pincode,
      date,
      time
    } = req.body;

    let jobData = {
      farmerId: req.user._id,
      type: role === "Labour" ? "labour" : "transport",
      pincode,
    };

    if (role === "Labour") {
      jobData.labourDetails = {
        workersNeeded: numLabour,
        workType: labourType,
        startDate: date,
        startTime: time,
      };
    }

    if (role === "Driver") {
      jobData.transportDetails = {
        vehicleType: licenseType,
        pincode,
        requiredDate: date,
        requiredTime: time,
      };
    }

    const job = await Job.create(jobData);

    res.json({
      success: true,
      message: "Job posted successfully",
      job,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
