// backend/src/ivr/flows/labour.flow.js

module.exports = {
  mainMenu: () => ({
    action: "talk",
    text: "Welcome Labour. Press 1 to update your availability.",
    dtmf: true,
    maxDigits: 1
  }),

  askJobType: () => ({
    action: "talk",
    text: "Press 1 for sowing. Press 2 for harvesting. Press 3 for general. Press 4 for any.",
    dtmf: true,
    maxDigits: 1
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
    text: "Your availability has been saved. You will be notified when a farmer matches."
  })
};
