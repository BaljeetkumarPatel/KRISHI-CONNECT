// backend/src/ivr/flows/driver.flow.js

module.exports = {
  mainMenu: () => ({
    action: "talk",
    text: "Welcome Driver. Press 1 to update your availability.",
    dtmf: true,
    maxDigits: 1
  }),

  askVehicleType: () => ({
    action: "talk",
    text: "Press 1 for tractor. Press 2 for trolley. Press 3 for mini truck. Press 4 for pickup.",
    dtmf: true,
    maxDigits: 1
  }),

  askCapacity: () => ({
    action: "talk",
    text: "Enter load capacity in quintals.",
    dtmf: true,
    maxDigits: 3
  }),

  askRouteStart: () => ({
    action: "talk",
    text: "Enter start pincode of your route.",
    dtmf: true,
    maxDigits: 6
  }),

  askRouteEnd: () => ({
    action: "talk",
    text: "Enter destination pincode.",
    dtmf: true,
    maxDigits: 6
  }),

  askDates: () => ({
    action: "talk",
    text: "Enter available date in D D M M format.",
    dtmf: true,
    maxDigits: 4
  }),

  askTime: () => ({
    action: "talk",
    text: "Enter available time in H H M M format.",
    dtmf: true,
    maxDigits: 4
  }),

  availabilitySaved: () => ({
    action: "talk",
    text: "Your availability has been saved. You will be notified for matching jobs."
  })
};
