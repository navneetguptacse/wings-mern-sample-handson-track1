import React from "react";
import "../styles/filterbar.css";

/**
 * FilterBar component.
 * Props:
 * - filters: { status, min_amount, max_amount }
 * - onFilterChange: function(e) - called when filter inputs change
 */
const FilterBar = ({ filters, onFilterChange }) => {
  return (
    <div className="filterbar">
      <div className="filter-field">
        <label htmlFor="status">Status</label>
        <select
          id="status"
          name="status"
          value={filters.status || ""}
          onChange={onFilterChange}
        >
          <option value="">All</option>
          <option value="PLACED">PLACED</option>
          <option value="PREPARING">PREPARING</option>
          <option value="OUT_FOR_DELIVERY">OUT_FOR_DELIVERY</option>
          <option value="DELIVERED">DELIVERED</option>
          <option value="CANCELLED">CANCELLED</option>
        </select>
      </div>
      <div className="filter-field">
        <label htmlFor="min_amount">Min Amount</label>
        <input
          id="min_amount"
          name="min_amount"
          type="number"
          value={filters.min_amount || ""}
          onChange={onFilterChange}
        />
      </div>
      <div className="filter-field">
        <label htmlFor="max_amount">Max Amount</label>
        <input
          id="max_amount"
          name="max_amount"
          type="number"
          value={filters.max_amount || ""}
          onChange={onFilterChange}
        />
      </div>
    </div>
  );
};

export default FilterBar;
