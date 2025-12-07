import React from "react";
import Button from "./Button";
import Error from "./Error";
import "../styles/form.css";

/**
 * Form component for adding a new book.
 * Props:
 * - error: string (error message from parent)
 * - inputOnChangeHandler: function(e) - called on input change
 * - onSaveHandler: function() - called when Save button clicked
 */
const Form = ({ error, inputOnChangeHandler, onSaveHandler }) => {
  return (
    <div className="form-wrapper">
      <h3>Add New Book</h3>
      <Error message={error} />
      <div className="form-field">
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" onChange={inputOnChangeHandler} />
      </div>
      <div className="form-field">
        <label htmlFor="author">Author</label>
        <input id="author" name="author" type="text" onChange={inputOnChangeHandler} />
      </div>
      <div className="form-field">
        <label htmlFor="category">Category</label>
        <select id="category" name="category" onChange={inputOnChangeHandler}>
          <option value="">Select Category</option>
          <option value="Fiction">Fiction</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
          <option value="Tech">Tech</option>
        </select>
      </div>
      <Button
        label="Save"
        type="button"
        data-testid="save-book-button"
        onClick={onSaveHandler}
      />
    </div>
  );
};

export default Form;
