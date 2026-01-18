// frontend/src/components/WorkerList.jsx
import React from "react";
import Card from "./Card";
import CallButton from "./CallButton";

export default function WorkerList({ workers, onCall }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {workers.map((w) => (
        <Card key={w._id}>
          <h3 className="text-lg font-bold">
            {w.userId?.phone || "Unknown Worker"}
          </h3>
          <p>Pincode: {w.pincode}</p>
          <p>Status: {w.status}</p>

          <CallButton label="Call Worker" onClick={() => onCall(w.userId.phone)} />
        </Card>
      ))}
    </div>
  );
}
