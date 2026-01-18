// backend/src/utils/validators.js

module.exports = {
  isValidPhone: (phone) => {
    return /^[0-9]{10}$/.test(phone);
  },

  isValidPIN: (pin) => {
    return /^[0-9]{4}$/.test(pin);
  },

  isValidPincode: (pincode) => {
    return /^[0-9]{6}$/.test(pincode);
  },

  isValidDate: (date) => {
    return /^[0-3][0-9][0-1][0-9]$/.test(date); // DDMM
  },

  isValidTime: (time) => {
    return /^[0-2][0-9][0-5][0-9]$/.test(time); // HHMM
  },

  isValidNumber: (num) => {
    return /^[0-9]+$/.test(num);
  }
};
