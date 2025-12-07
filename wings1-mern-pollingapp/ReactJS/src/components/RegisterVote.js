import React from "react";
import "../styles/register-vote.css";

const RegisterVote = () => {
  const fetchPoll = () => {
    /**
     * This function should be invoked when this component is initialized.
     * It should fetch the poll data by sending a GET request to:
     *   http://localhost:8001/polls/fetch
     *
     * Sample response:
     * {
     *   question: 'Which is the best front-end technology?',
     *   option1: 'React',
     *   option2: 'Angular',
     *   option3: 'Vue',
     *   option4: 'Next',
     *   option1Votes: 0,
     *   option2Votes: 0,
     *   option3Votes: 0,
     *   option4Votes: 0,
     *   option1Percentage: 0,
     *   option2Percentage: 0,
     *   option3Percentage: 0,
     *   option4Percentage: 0
     * }
     *
     * The question and options should be displayed in respective UI elements.
     * In case of request failure, display error message in alert window.
     */
    // TODO: Implement fetch logic and state update.
  };

  const registerVote = (selectedOption) => {
    /**
     * This function should be invoked on clicking any option button.
     * It should send the name of selected option to backend to register the vote.
     * Use a PATCH request with API -> http://localhost:8001/polls/updateVotes
     *
     * Sample request body:
     * {
     *   selectedOption: "option1"
     * }
     *
     * where selectedOption can be "option1", "option2", "option3" or "option4".
     *
     * On successful request:
     *   - Display response message in alert and reset the form / state.
     *
     * On request failure:
     *   - Display error message in alert window.
     */
    // TODO: Implement PATCH call and handling.
  };

  // TODO: Call fetchPoll on component mount (e.g., using useEffect)

  return (
    <div className="poll-container">
      <h2>Leave your Response</h2>
      <div className="options-container">
        <h3 className="poll-question" data-testid="question-text">
          {/* Display question here */}
        </h3>
        <button
          className="option-button"
          id="option1"
          onClick={() => registerVote("option1")}
        >
          {/* Display option1 here */}
        </button>
        <button
          className="option-button"
          id="option2"
          onClick={() => registerVote("option2")}
        >
          {/* Display option2 here */}
        </button>
        <button
          className="option-button"
          id="option3"
          onClick={() => registerVote("option3")}
        >
          {/* Display option3 here */}
        </button>
        <button
          className="option-button"
          id="option4"
          onClick={() => registerVote("option4")}
        >
          {/* Display option4 here */}
        </button>
        {/* Clicking any button should invoke "registerVote" with id of selected button */}
      </div>
    </div>
  );
};

export default RegisterVote;
