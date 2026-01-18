// backend/src/ivr/flows/registration.flow.js

module.exports = {
  mainMenu: () => ({
    action: "talk",
    text: "Welcome. Press 1 to register as farmer. Press 2 to register as labour. Press 3 to register as driver.",
    dtmf: true,
    maxDigits: 1
  }),

  askPincode: () => ({
    action: "talk",
    text: "Please enter your six digit pincode.",
    dtmf: true,
    maxDigits: 6
  }),

  askPINCreate: () => ({
    action: "talk",
    text: "Please create a four digit PIN.",
    dtmf: true,
    maxDigits: 4
  }),

  askConfirmPIN: () => ({
    action: "talk",
    text: "Please re enter your four digit PIN to confirm.",
    dtmf: true,
    maxDigits: 4
  }),

  pinMismatch: () => ({
    action: "talk",
    text: "PIN did not match. Please enter your four digit PIN again.",
    dtmf: true,
    maxDigits: 4
  }),

  registrationSuccess: () => ({
    action: "talk",
    text: "Registration successful. Thank you.",
  })
};
