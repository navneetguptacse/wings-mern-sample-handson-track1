import React from "react";
import InventoryCard from "./InventoryCard";

/**
 * Inventory list component.
 * Props:
 *  - data: array of inventory items
 *  - onCreateRequest: (productId) => void
 */
const InventoryList = ({ data, onCreateRequest }) => {
  if (!data || data.length === 0) {
    return <p data-testid="inventory-empty">No products found.</p>;
  }

  return (
    <div className="inventory-list">
      {data.map((item) => (
        <InventoryCard
          key={item._id}
          {...item}
          onCreateRequest={onCreateRequest}
        />
      ))}
    </div>
  );
};

export default InventoryList;
