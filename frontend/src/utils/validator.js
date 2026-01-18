// frontend/src/utils/validator.js

export const validator = {
  phone: (val) => /^[0-9]{10}$/.test(val),

  pin: (val) => /^[0-9]{4}$/.test(val),

  pincode: (val) => /^[0-9]{6}$/.test(val),

  number: (val) => /^[0-9]+$/.test(val),

  date: (val) => /^[0-3][0-9][0-1][0-9]$/.test(val), // DDMM

  time: (val) => /^[0-2][0-9][0-5][0-9]$/.test(val), // HHMM
};
