import React from "react";
import RequestCard from "./RequestCard";

/**
 * List of stock requests.
 * Props:
 *  - data: array of request objects
 *  - onStatusUpdate: (id) => void
 */
const RequestsList = ({ data, onStatusUpdate }) => {
  if (!data || data.length === 0) {
    return <p data-testid="requests-empty">No stock requests.</p>;
  }

  return (
    <div className="requests-list">
      {data.map((req) => (
        <RequestCard
          key={req._id}
          {...req}
          onStatusUpdate={onStatusUpdate}
        />
      ))}
    </div>
  );
};

export default RequestsList;
