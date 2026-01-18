// frontend/src/components/AgentDialer.jsx
import React, { useState } from "react";
import CallButton from "./CallButton";

export default function AgentDialer({ vapi }) {
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("idle");

  const handleCall = async () => {
    if (!phone) return alert("Enter phone number");

    setStatus("calling");

    try {
      await vapi.startCall(phone);
      setStatus("connected");
    } catch (err) {
      setStatus("failed");
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded border border-gray-200">
      <h2 className="font-bold text-lg mb-3">Agent Dialer</h2>

      <input
        type="text"
        placeholder="Enter phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border px-3 py-2 w-full rounded"
      />

      <div className="mt-3">
        <CallButton label="Call" onClick={handleCall} />
      </div>

      <p className="mt-3 text-sm">Status: {status}</p>
    </div>
  );
}
