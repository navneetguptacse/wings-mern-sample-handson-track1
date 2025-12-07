import React from "react";
import Button from "./Button";
import Error from "./Error";
import "../styles/form.css";

/**
 * Form component for adding a new order.
 * Props:
 * - error: string (error message from parent)
 * - inputOnChangeHandler: function(e) - called on input change
 * - onSaveHandler: function() - called when Save button clicked
 */
const Form = ({ error, inputOnChangeHandler, onSaveHandler }) => {
  return (
    <div className="form-wrapper">
      <h3>Add New Order</h3>
      <Error message={error} />
      <div className="form-field">
        <label htmlFor="customerName">Customer Name</label>
        <input
          id="customerName"
          name="customerName"
          type="text"
          onChange={inputOnChangeHandler}
        />
      </div>
      <div className="form-field">
        <label htmlFor="restaurantName">Restaurant Name</label>
        <input
          id="restaurantName"
          name="restaurantName"
          type="text"
          onChange={inputOnChangeHandler}
        />
      </div>
      <div className="form-field">
        <label htmlFor="items">Items (comma separated)</label>
        <input
          id="items"
          name="items"
          type="text"
          onChange={inputOnChangeHandler}
        />
      </div>
      <div className="form-field">
        <label htmlFor="totalAmount">Total Amount</label>
        <input
          id="totalAmount"
          name="totalAmount"
          type="number"
          onChange={inputOnChangeHandler}
        />
      </div>
      <div className="form-field">
        <label htmlFor="estimatedDeliveryMinutes">
          Estimated Delivery Time (minutes)
        </label>
        <input
          id="estimatedDeliveryMinutes"
          name="estimatedDeliveryMinutes"
          type="number"
          onChange={inputOnChangeHandler}
        />
      </div>
      <Button
        label="Save"
        type="button"
        data-testid="save-order-button"
        onClick={onSaveHandler}
      />
    </div>
  );
};

export default Form;
