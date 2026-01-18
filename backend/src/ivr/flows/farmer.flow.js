// backend/src/ivr/flows/farmer.flow.js

module.exports = {
  mainMenu: () => ({
    action: "talk",
    text: "Welcome Farmer. Press 1 to post labour requirement. Press 2 to post transport requirement. Press 3 to post both.",
    dtmf: true,
    maxDigits: 1
  }),

  askWorkersNeeded: () => ({
    action: "talk",
    text: "Enter number of workers needed.",
    dtmf: true,
    maxDigits: 3
  }),

  askWorkType: () => ({
    action: "talk",
    text: "Press 1 for sowing. Press 2 for harvesting. Press 3 for general work.",
    dtmf: true,
    maxDigits: 1
  }),

  askStartDate: () => ({
    action: "talk",
    text: "Enter start date in D D M M format.",
    dtmf: true,
    maxDigits: 4
  }),

  askStartTime: () => ({
    action: "talk",
    text: "Enter start time in H H M M format.",
    dtmf: true,
    maxDigits: 4
  }),

  askVehicleType: () => ({
    action: "talk",
    text: "Press 1 for tractor. Press 2 for trolley. Press 3 for mini truck. Press 4 for pickup.",
    dtmf: true,
    maxDigits: 1
  }),

  askLoadWeight: () => ({
    action: "talk",
    text: "Enter estimated load weight in quintals.",
    dtmf: true,
    maxDigits: 3
  }),

  askPickupPincode: () => ({
    action: "talk",
    text: "Enter pickup pincode.",
    dtmf: true,
    maxDigits: 6
  }),

  askTransportDate: () => ({
    action: "talk",
    text: "Enter required date in D D M M format.",
    dtmf: true,
    maxDigits: 4
  }),

  askTransportTime: () => ({
    action: "talk",
    text: "Enter required time in H H M M format.",
    dtmf: true,
    maxDigits: 4
  }),

  confirmSummary: (summary) => ({
    action: "talk",
    text: `You requested ${summary}. Press 1 to confirm, 2 to cancel.`,
    dtmf: true,
    maxDigits: 1
  }),

  jobPosted: () => ({
    action: "talk",
    text: "Your job has been posted successfully. We will match workers and drivers shortly."
  })
};
