// backend/src/config/env.js
require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || "development",

  MONGO_URI: process.env.MONGO_URI,

  // VAPI Configuration
  VAPI_API_KEY: process.env.VAPI_API_KEY,
  VAPI_FLOW_ID: process.env.VAPI_FLOW_ID,
  VAPI_BASE_URL: process.env.VAPI_BASE_URL || "https://api.vapi.ai",

  // Logging
  LOG_LEVEL: process.env.LOG_LEVEL || "info",

  // SMS Provider (optional)
  SMS_SENDER_ID: process.env.SMS_SENDER_ID || "IVRSYS",

  // Allowed Origins (CORS)
  ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN || "*",
};
