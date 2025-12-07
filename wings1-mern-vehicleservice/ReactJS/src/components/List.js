import React from "react";
import "../styles/list.css";
import Card from "./Card";

const List = ({ data, onUpdateStatus, onCancel, onMarkDelayed }) => {
  if (!data || data.length === 0) {
    return <p>No bookings available.</p>;
  }

  return (
    <div className="list-container">
      {data.map((item) => (
        <Card
          key={item._id}
          {...item}
          onUpdateStatus={onUpdateStatus}
          onCancel={onCancel}
          onMarkDelayed={onMarkDelayed}
        />
      ))}
    </div>
  );
};

export default List;
