// backend/src/services/pin.service.js
const bcrypt = require("bcrypt");

module.exports = {
  hashPIN: async (pin) => {
    return await bcrypt.hash(pin, 10);
  },

  verifyPIN: async (pin, hash) => {
    return await bcrypt.compare(pin, hash);
  }
};
