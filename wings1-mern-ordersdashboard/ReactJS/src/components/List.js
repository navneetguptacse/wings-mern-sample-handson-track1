import React from "react";
import Card from "./Card";
import "../styles/list.css";

/**
 * List component.
 * Props:
 * - data: array of order objects
 * - onAdvanceStatus: function(id)
 * - onCancel: function(id)
 * - onMarkDelayed: function(id)
 */
const List = ({ data = [], onAdvanceStatus, onCancel, onMarkDelayed }) => {
  if (!data.length) {
    return <p data-testid="empty-list">No orders available.</p>;
  }

  return (
    <div className="list-container">
      {data.map((order) => (
        <Card
          key={order._id}
          _id={order._id}
          customerName={order.customerName}
          restaurantName={order.restaurantName}
          items={order.items}
          totalAmount={order.totalAmount}
          status={order.status}
          estimatedDeliveryMinutes={order.estimatedDeliveryMinutes}
          isDelayed={order.isDelayed}
          createdAt={order.createdAt}
          onAdvanceStatus={onAdvanceStatus}
          onCancel={onCancel}
          onMarkDelayed={onMarkDelayed}
        />
      ))}
    </div>
  );
};

export default List;
