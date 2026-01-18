// backend/src/services/worker-notify.service.js
const User = require("../models/User");
const SMS = require("./sms.service");
const CallService = require("./call.service");

module.exports = {
  notifyAll: async (job) => {
    // Notify Labours
    for (let l of job.matchedLabours) {
      const user = await User.findById(l.userId);
      if (!user) continue;

      const script = CallService.workerCallScript(job, "labour");
      await CallService.outboundCall(user.phone, script);
      await SMS.workerNotificationSMS(user.phone, job._id);
    }

    // Notify Drivers
    for (let d of job.matchedDrivers) {
      const user = await User.findById(d.userId);
      if (!user) continue;

      const script = CallService.workerCallScript(job, "driver");
      await CallService.outboundCall(user.phone, script);
      await SMS.workerNotificationSMS(user.phone, job._id);
    }

    return true;
  }
};
