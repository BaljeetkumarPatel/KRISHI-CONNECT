// frontend/src/contexts/VapiContext.js
import React, { createContext, useState, useContext } from "react";

const VapiContext = createContext();

export const VapiProvider = ({ children }) => {
  const [client, setClient] = useState(null);  // VAPI WebRTC object
  const [status, setStatus] = useState("idle");

  // Initialize VAPI SDK
  const initVapi = async () => {
    try {
      setStatus("connecting");

      // TODO: replace with real VAPI init
      const fakeVapiClient = {
        startCall: (phone) => {
          console.log("VAPI CALL START ->", phone);
          alert("Simulated call: " + phone);
        },
        endCall: () => console.log("VAPI CALL ENDED")
      };

      setClient(fakeVapiClient);
      setStatus("ready");
    } catch (error) {
      console.error("VAPI init error:", error);
      setStatus("failed");
    }
  };

  const startCall = async (phone) => {
    if (!client) return alert("VAPI not ready yet");
    client.startCall(phone);
  };

  const endCall = () => {
    client?.endCall();
  };

  return (
    <VapiContext.Provider
      value={{
        client,
        status,
        initVapi,
        startCall,
        endCall,
      }}
    >
      {children}
    </VapiContext.Provider>
  );
};

export const useVapi = () => useContext(VapiContext);
