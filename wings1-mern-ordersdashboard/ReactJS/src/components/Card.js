import React from "react";
import Button from "./Button";
import "../styles/card.css";

/**
 * Card component to display a single order.
 * Props:
 * - _id, customerName, restaurantName, items, totalAmount,
 *   status, estimatedDeliveryMinutes, isDelayed, createdAt
 * - onAdvanceStatus(id)
 * - onCancel(id)
 * - onMarkDelayed(id)
 */
const Card = ({
  _id,
  customerName,
  restaurantName,
  items,
  totalAmount,
  status,
  estimatedDeliveryMinutes,
  isDelayed,
  createdAt,
  onAdvanceStatus,
  onCancel,
  onMarkDelayed
}) => {
  const handleAdvanceStatus = () => {
    if (onAdvanceStatus) onAdvanceStatus(_id);
  };

  const handleCancel = () => {
    if (onCancel) onCancel(_id);
  };

  const handleMarkDelayed = () => {
    if (onMarkDelayed) onMarkDelayed(_id);
  };

  // NOTE: The actual logic for when to show/hide these buttons,
  // based on status, should align with the problem statement.
  // That logic should be implemented in this component by the learner.

  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">{customerName}</h4>
        <span className={`status-badge status-${status}`}>
          {status}
        </span>
      </div>
      <p className="card-restaurant">Restaurant: {restaurantName}</p>
      <p className="card-items">Items: {items}</p>
      <p className="card-amount">Total Amount: ₹{totalAmount}</p>
      <p className="card-eta">
        ETA: {estimatedDeliveryMinutes} minutes
      </p>
      {isDelayed && <span className="delayed-badge">Delayed</span>}
      {createdAt && (
        <p className="card-created">
          Created: {new Date(createdAt).toLocaleString()}
        </p>
      )}

      <div className="card-actions">
        <Button
          label="Advance Status"
          data-testid="advance-status-button"
          onClick={handleAdvanceStatus}
        />
        <Button
          label="Cancel Order"
          data-testid="cancel-order-button"
          onClick={handleCancel}
        />
        <Button
          label="Mark Delayed"
          data-testid="mark-delayed-button"
          onClick={handleMarkDelayed}
        />
      </div>
    </div>
  );
};

export default Card;
