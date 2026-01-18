module.exports = {
  registrationMenu: async () => ({
    messages: [
      {
        role: "assistant",
        content:
          "Welcome. Press or say 1 to register as farmer, 2 as labour, 3 as driver."
      }
    ],
    tool: {
      name: "function_tool",
      arguments: {}
    }
  }),

  askPIN: async () => ({
    messages: [
      { role: "assistant", content: "Please enter or say your four digit PIN." }
    ],
    tool: {
      name: "function_tool",
      arguments: {}
    }
  }),

  invalidPIN: async () => ({
    messages: [
      { role: "assistant", content: "Incorrect PIN. Please try again." }
    ],
    tool: {
      name: "function_tool",
      arguments: {}
    }
  }),

  roleMenu: async (role) => {
    let txt = "";

    if (role === "farmer")
      txt =
        "Welcome Farmer. Press or say 1 to post labour requirement. Press or say 2 to post transport requirement.";

    if (role === "labour")
      txt = "Welcome Labour. Press or say 1 to update availability.";

    if (role === "driver")
      txt = "Welcome Driver. Press or say 1 to update availability.";

    return {
      messages: [{ role: "assistant", content: txt }],
      tool: { name: "function_tool", arguments: {} }
    };
  },

  errorPrompt: async () => ({
    messages: [{ role: "assistant", content: "Something went wrong." }],
    tool: { name: "function_tool", arguments: {} }
  })
};
