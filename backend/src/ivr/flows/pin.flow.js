// backend/src/ivr/flows/pin.flow.js

module.exports = {
  askPIN: () => ({
    action: "talk",
    text: "Please enter your four digit PIN.",
    dtmf: true,
    maxDigits: 4
  }),

  incorrectPIN: () => ({
    action: "talk",
    text: "Incorrect PIN. Please try again.",
    dtmf: true,
    maxDigits: 4
  }),

  pinVerified: () => ({
    action: "talk",
    text: "PIN verified successfully.",
  })
};
