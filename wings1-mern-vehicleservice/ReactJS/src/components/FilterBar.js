import React from "react";
import "../styles/filter-bar.css";

const FilterBar = ({ onFilterChange, filters }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (onFilterChange) {
      onFilterChange(name, value);
    }
  };

  return (
    <div className="filter-bar">
      <div className="filter-item">
        <label htmlFor="status">Status</label>
        <select
          id="status"
          name="status"
          value={filters?.status || ""}
          onChange={handleChange}
        >
          <option value="">All</option>
          <option value="REQUESTED">Requested</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="COMPLETED">Completed</option>
          <option value="CANCELLED">Cancelled</option>
        </select>
      </div>

      <div className="filter-item">
        <label htmlFor="start_date">Start Date</label>
        <input
          id="start_date"
          name="start_date"
          type="date"
          value={filters?.start_date || ""}
          onChange={handleChange}
        />
      </div>

      <div className="filter-item">
        <label htmlFor="end_date">End Date</label>
        <input
          id="end_date"
          name="end_date"
          type="date"
          value={filters?.end_date || ""}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default FilterBar;
