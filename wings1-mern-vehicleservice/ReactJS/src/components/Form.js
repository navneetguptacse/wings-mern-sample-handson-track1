import React from "react";
import "../styles/form.css";
import Button from "./Button";
import Error from "./Error";

const Form = ({ error, inputOnChangeHandler, onSaveHandler, formInputs }) => {
  // formInputs is expected to contain fields like:
  // customerName, vehicleNumber, serviceType, date

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (inputOnChangeHandler) {
      inputOnChangeHandler(name, value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSaveHandler) {
      onSaveHandler();
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <Error message={error} />

      <div className="form-row">
        <label htmlFor="customerName">Customer Name</label>
        <input
          id="customerName"
          name="customerName"
          type="text"
          value={formInputs?.customerName || ""}
          onChange={handleChange}
        />
      </div>

      <div className="form-row">
        <label htmlFor="vehicleNumber">Vehicle Number</label>
        <input
          id="vehicleNumber"
          name="vehicleNumber"
          type="text"
          value={formInputs?.vehicleNumber || ""}
          onChange={handleChange}
        />
      </div>

      <div className="form-row">
        <label htmlFor="serviceType">Service Type</label>
        <select
          id="serviceType"
          name="serviceType"
          value={formInputs?.serviceType || ""}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="General Service">General Service</option>
          <option value="Oil Change">Oil Change</option>
          <option value="Full Inspection">Full Inspection</option>
        </select>
      </div>

      <div className="form-row">
        <label htmlFor="date">Preferred Date</label>
        <input
          id="date"
          name="date"
          type="date"
          value={formInputs?.date || ""}
          onChange={handleChange}
        />
      </div>

      <Button type="submit" label="Save Booking" data-testid="save-booking" />
    </form>
  );
};

export default Form;
