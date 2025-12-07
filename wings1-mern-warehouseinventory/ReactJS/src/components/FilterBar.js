import React from "react";

/**
 * Filter bar for inventory list.
 * Props:
 *  - onFilterChange: (event) => void
 */
const FilterBar = ({ onFilterChange }) => {
  return (
    <div className="filter-bar">
      <select
        name="category"
        onChange={onFilterChange}
        data-testid="filter-category"
      >
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Furniture">Furniture</option>
        <option value="Hardware">Hardware</option>
      </select>

      <input
        name="minQuantity"
        type="number"
        placeholder="Min Quantity"
        onChange={onFilterChange}
        data-testid="filter-min-qty"
      />
    </div>
  );
};

export default FilterBar;
