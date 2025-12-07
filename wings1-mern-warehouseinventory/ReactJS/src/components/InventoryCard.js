import React from "react";

/**
 * Single inventory item card.
 * Props:
 *  - _id
 *  - name
 *  - category
 *  - quantity
 *  - price
 *  - onCreateRequest: (id) => void
 */
const InventoryCard = ({
  _id,
  name,
  category,
  quantity,
  price,
  onCreateRequest
}) => {
  return (
    <div className="inventory-card" data-testid="inventory-card">
      <h4 className="inventory-name">{name}</h4>
      <p className="inventory-category">{category}</p>
      <p className="inventory-qty">Qty: {quantity}</p>
      <p className="inventory-price">₹ {price}</p>
      <button
        type="button"
        onClick={() => onCreateRequest(_id)}
        data-testid="btn-request-stock"
      >
        Request Stock
      </button>
    </div>
  );
};

export default InventoryCard;
