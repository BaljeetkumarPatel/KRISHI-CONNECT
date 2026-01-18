// frontend/src/components/OutboundCallPopup.jsx
import React from "react";
import CallButton from "./CallButton";
import Card from "./Card";

export default function OutboundCallPopup({ workers, onCall, onClose }) {
  return (
    <Card>
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg">Notify Workers</h3>
        <button className="text-red-600 font-bold" onClick={onClose}>
          X
        </button>
      </div>

      <div className="mt-3 space-y-3">
        {workers.map((w) => (
          <div
            key={w._id}
            className="border p-2 rounded flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{w.userId.phone}</p>
              <p className="text-sm text-gray-500">
                Status: {w.status || "pending"}
              </p>
            </div>

            <CallButton
              label="Call"
              onClick={() => onCall(w.userId.phone)}
            />
          </div>
        ))}
      </div>
    </Card>
  );
}
