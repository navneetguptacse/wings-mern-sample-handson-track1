import React from "react";

/**
 * Add Product form component.
 * Props:
 *  - error: string | null
 *  - inputOnChangeHandler: (event) => void
 *  - onSaveHandler: () => void
 */
const Form = ({ error, inputOnChangeHandler, onSaveHandler }) => {
  return (
    <div>
      <h3>Add Product</h3>
      {error && <p data-testid="form-error" className="error-text">{error}</p>}

      <div className="form-field">
        <label>Product Name</label>
        <input
          name="name"
          type="text"
          onChange={inputOnChangeHandler}
          data-testid="input-name"
        />
      </div>

      <div className="form-field">
        <label>Category</label>
        <select
          name="category"
          onChange={inputOnChangeHandler}
          data-testid="input-category"
        >
          <option value="">Select</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="Hardware">Hardware</option>
        </select>
      </div>

      <div className="form-field">
        <label>Quantity</label>
        <input
          name="quantity"
          type="number"
          onChange={inputOnChangeHandler}
          data-testid="input-quantity"
        />
      </div>

      <div className="form-field">
        <label>Unit Price</label>
        <input
          name="price"
          type="number"
          onChange={inputOnChangeHandler}
          data-testid="input-price"
        />
      </div>

      <button
        type="button"
        onClick={onSaveHandler}
        data-testid="btn-save-product"
      >
        Save
      </button>
    </div>
  );
};

export default Form;
