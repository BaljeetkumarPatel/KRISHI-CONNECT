// frontend/src/hooks/useVapiCall.js
import { useVapi } from "../contexts/VapiContext";

export default function useVapiCall() {
  const { startCall, endCall, status, initVapi } = useVapi();

  const callPhone = async (phone) => {
    if (!phone)
      return alert("Phone number missing");

    if (status !== "ready") {
      alert("Connecting to VAPI...");
      await initVapi();
    }

    await startCall(phone);
  };

  return {
    callPhone,
    endCall,
    vapiStatus: status
  };
}
