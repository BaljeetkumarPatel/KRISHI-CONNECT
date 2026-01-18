// backend/src/config/vapi.js
const axios = require("axios");
const env = require("./env");
const logger = require("./logger");

const api = axios.create({
  baseURL: env.VAPI_BASE_URL,
  headers: {
    Authorization: `Bearer ${env.VAPI_API_KEY}`,
    "Content-Type": "application/json",
  },
});

// Trigger outbound call via VAPI
async function sendOutboundCall(to, flowId = env.VAPI_FLOW_ID) {
  try {
    const response = await api.post("/call", {
      to,
      flow: flowId,
    });

    logger.info(`Outbound call started → ${to}`);

    return response.data;
  } catch (error) {
    logger.error(`Outbound call failed to ${to}: ${error.message}`);
    return null;
  }
}

// Trigger SMS (if supported by VAPI)
async function sendSMS(to, text) {
  try {
    const res = await api.post("/sms", { to, text });
    logger.info(`SMS sent → ${to}: ${text}`);
    return res.data;
  } catch (err) {
    logger.error(`SMS failed to ${to}: ${err.message}`);
    return null;
  }
}

module.exports = {
  api,
  sendOutboundCall,
  sendSMS,
};
