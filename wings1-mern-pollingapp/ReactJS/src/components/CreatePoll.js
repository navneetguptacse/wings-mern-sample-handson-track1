import React from "react";
import "../styles/create-poll.css";

const CreatePoll = () => {
  const handleChange = () => {
    // TODO:
    // Implement onChange handler to update local state for question and options.
  };

  const handleSubmit = () => {
    // Used to send poll data to the backend server (PUT /polls/create).
    // Should be called when the form is submitted.
    //
    // TODO:
    // 1. Validate the form:
    //    - If any form field is empty or contains only whitespaces,
    //      display alert("Please fill in all the fields").
    // 2. On successful validation:
    //    - Send PUT request to http://localhost:8001/polls/create
    //      with body:
    //      {
    //        question: 'Which is the best front-end technology?',
    //        option1: 'React',
    //        option2: 'Angular',
    //        option3: 'Vue',
    //        option4: 'Next'
    //      }
    //    - Display response message from backend in alert window.
    //    - Reset the form.
    // 3. On request failure:
    //    - Display error message returned by backend in alert window.
  };

  return (
    <div className="form-container">
      <h2>Create Poll</h2>
      <form>
        {/* Submitting the form should call the function "handleSubmit" */}
        <label htmlFor="question" className="form-label">
          Question:
        </label>
        <input
          type="text"
          id="question"
          className="question-input"
          onChange={handleChange}
        />
        <br />
        <label className="form-label">Options:</label>
        <div className="options-container">
          <input
            type="text"
            className="option-input"
            onChange={handleChange}
          />
          <input
            type="text"
            className="option-input"
            onChange={handleChange}
          />
          <input
            type="text"
            className="option-input"
            onChange={handleChange}
          />
          <input
            type="text"
            className="option-input"
            onChange={handleChange}
          />
        </div>
        <button
          type="button"
          className="form-button"
          data-testid="create-poll-button"
          onClick={handleSubmit}
        >
          Create Poll
        </button>
        {/* Clicking the button should invoke the function "handleSubmit" */}
      </form>
    </div>
  );
};

export default CreatePoll;
