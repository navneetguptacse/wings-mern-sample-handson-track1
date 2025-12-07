import React from "react";

/**
 * Single request card.
 * Props:
 *  - _id
 *  - productName
 *  - requestedQty
 *  - status
 *  - onStatusUpdate: (id) => void
 */
const RequestCard = ({
  _id,
  productName,
  requestedQty,
  status,
  onStatusUpdate
}) => {
  return (
    <div className="request-card" data-testid="request-card">
      <h4>{productName}</h4>
      <p>Requested Qty: {requestedQty}</p>
      <p>Status: {status}</p>

      {/* The label and behaviour of the button will be wired up in App.js */}
      <button
        type="button"
        onClick={() => onStatusUpdate(_id)}
        data-testid="btn-update-status"
      >
        Update Status
      </button>
    </div>
  );
};

export default RequestCard;
