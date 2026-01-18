// frontend/src/components/JobCard.jsx
import React from "react";
import Card from "./Card";

export default function JobCard({ job }) {
  return (
    <Card>
      <h3 className="text-lg font-bold">Job ID: {job._id}</h3>
      <p>Type: {job.type}</p>
      <p>Pincode: {job.pincode}</p>

      {job.type !== "transport" && job.labourDetails && (
        <div className="mt-2 text-sm">
          <p>Workers Needed: {job.labourDetails.workersNeeded}</p>
          <p>Work Type: {job.labourDetails.workType}</p>
          <p>
            Start: {job.labourDetails.startDate} @ {job.labourDetails.startTime}
          </p>
        </div>
      )}

      {job.type !== "labour" && job.transportDetails && (
        <div className="mt-2 text-sm">
          <p>Vehicle: {job.transportDetails.vehicleType}</p>
          <p>Load: {job.transportDetails.loadWeight} quintals</p>
          <p>Pickup: {job.transportDetails.pickupPincode}</p>
        </div>
      )}
    </Card>
  );
}
