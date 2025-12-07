import React from "react";
import "../styles/card.css";
import Button from "./Button";

const Card = ({
  _id,
  customerName,
  vehicleNumber,
  serviceType,
  date,
  status,
  isDelayed,
  onUpdateStatus,
  onCancel,
  onMarkDelayed
}) => {
  return (
    <div className="card" data-testid="service-card">
      <div className="card-header">
        <span>{customerName}</span>
        <span>{vehicleNumber}</span>
      </div>
      <div>Service: {serviceType}</div>
      <div>Date: {date}</div>
      <div>Status: {status}</div>
      <div>Delayed: {isDelayed ? "Yes" : "No"}</div>

      <div className="card-actions">
        <Button
          label="Advance Status"
          onClick={() => onUpdateStatus && onUpdateStatus(_id)}
          data-testid="advance-status"
        />
        <Button
          label="Cancel Booking"
          onClick={() => onCancel && onCancel(_id)}
          data-testid="cancel-booking"
        />
        {status === "IN_PROGRESS" && (
          <Button
            label="Mark Delayed"
            onClick={() => onMarkDelayed && onMarkDelayed(_id)}
            data-testid="mark-delayed"
          />
        )}
      </div>
    </div>
  );
};

export default Card;
