import React from "react";
import "../styles/view-result.css";
// TODO: If using Material UI, import LinearProgress from the correct package
// import LinearProgress from "@mui/material/LinearProgress";

const ViewResult = () => {
  const fetchVoteResults = () => {
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
     *   option1Votes: 3,
     *   option2Votes: 4,
     *   option3Votes: 2,
     *   option4Votes: 1,
     *   option1Percentage: 30,
     *   option2Percentage: 40,
     *   option3Percentage: 20,
     *   option4Percentage: 10
     * }
     *
     * The question, options, votes and votePercentage should be displayed in respective UI elements.
     * In case of request failure, display error message in alert window.
     */
    // TODO: Implement fetch logic and state update.
  };

  // TODO: Call fetchVoteResults on component mount (e.g., useEffect)

  return (
    <div className="result-container">
      <h2 className="result-title">Poll Results</h2>
      <div className="result-card">
        <h3 className="question" id="question">
          {/* Display question here */}
        </h3>

        {/* Template to display option details for each option */}
        <div className="option">
          <span className="option-name" data-testid="option-name">
            {/* Display option name here */}
          </span>
          <span className="vote-count" data-testid="vote-count">
            {/* Display respective votes here */} Votes
          </span>
          <span className="vote-percentage" data-testid="vote-percentage">
            {/* Display respective votePercentage here */}%
          </span>

          {/* Example placeholder using native progress element (no logic yet): */}
          <progress
            className="progress-bar"
            data-testid="progress-bar"
            max="100"
            value="0"
          />
          {/* End of the template */}
        </div>
      </div>
    </div>
  );
};

export default ViewResult;
