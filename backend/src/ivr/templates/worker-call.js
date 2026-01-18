// backend/src/ivr/templates/worker-call.js

module.exports = {
  labourCall: (job) => {
    return `Namaste. 
    A nearby farmer has confirmed a job requiring ${job.labourDetails.workersNeeded} labourers. 
    Work type is ${job.labourDetails.workType}. 
    Date ${job.labourDetails.startDate}, 
    Time ${job.labourDetails.startTime}. 
    Location pincode ${job.pincode}. 
    Press 1 to accept.`;
  },

  labourAccepted: () => ({
    action: "talk",
    text: "Thank you. Your labour job acceptance has been recorded."
  }),

  labourRejected: () => ({
    action: "talk",
    text: "You have declined this job."
  })
};
