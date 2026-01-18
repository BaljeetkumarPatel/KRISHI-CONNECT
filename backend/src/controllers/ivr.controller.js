// // backend/src/controllers/ivr.controller.js
// const User = require("../models/User");
// const bcrypt = require("bcrypt");
// const VapiService = require("../services/vapi.service");

// module.exports = {
//   handleIncomingCall: async (req, res) => {
//     try {
//       const { from } = req.body;

//       const user = await User.findOne({ phone: from });

//       if (!user) {
//         // Send IVR registration flow
//         return res.json(await VapiService.registrationMenu());
//       }

//       // Ask for PIN verification
//       return res.json(await VapiService.askPIN());
//     } catch (error) {
//       return res.status(500).json({});
//     }
//   },

//   handlePINInput: async (req, res) => {
//     try {
//       const { from, dtmf } = req.body;

//       const user = await User.findOne({ phone: from });
//       if (!user) return res.json(await VapiService.registrationMenu());

//       const isValid = await bcrypt.compare(dtmf, user.pinHash);

//       if (!isValid) {
//         return res.json(await VapiService.invalidPIN());
//       }

//       // Load menu based on role
//       return res.json(await VapiService.roleMenu(user.role));
//     } catch (error) {
//       return res.json(await VapiService.errorPrompt());
//     }
//   },

//   handleDTMF: async (req, res) => {
//     return res.json({ message: "DTMF handler placeholder" });
//   }
// };


const User = require("../models/User");
const bcrypt = require("bcrypt");
const VapiService = require("../services/vapi.service");

module.exports = {
  handleIncomingCall: async (req, res) => {
    try {
      const from = req.body.customer?.number || req.body.from;

      const user = await User.findOne({ phone: from });

      if (!user) return res.json(await VapiService.registrationMenu());

      return res.json(await VapiService.askPIN());
    } catch (err) {
      console.error(err);
      return res.json(await VapiService.errorPrompt());
    }
  },

  handleDTMF: async (req, res) => {
    try {
      const digit = req.dtmf;
      const from = req.body.customer?.number || req.body.from;

      console.log("🎯 USER INPUT DIGIT:", digit);

      const user = await User.findOne({ phone: from });

      // User not registered → registration menu navigation
      if (!user) {
        if (digit === "1" || digit === "2" || digit === "3") {
          return res.json({ message: "Registered successfully (mock)." });
        }
        return res.json(await VapiService.registrationMenu());
      }

      // PIN stage (4 digits)
      if (!req.session?.pinVerified) {
        if (digit.length === 4) {
          const isValid = await bcrypt.compare(digit, user.pinHash);
          if (!isValid) return res.json(await VapiService.invalidPIN());

          req.session = { pinVerified: true };
          return res.json(await VapiService.roleMenu(user.role));
        }

        // Ask for full PIN again
        return res.json(await VapiService.askPIN());
      }

      // After PIN verified → role menu
      return res.json({
        messages: [{ role: "assistant", content: `You selected option ${digit}` }]
      });
    } catch (err) {
      console.error(err);
      return res.json(await VapiService.errorPrompt());
    }
  }
};
