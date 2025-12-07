const request = require("supertest");
const app = require("../src/app");

// NOTE:
// These are test skeletons with test.todo so you can later
// implement actual expectations without changing the structure.

describe("Polls API routes", () => {
  // CREATE
  test.todo("PUT /polls/create should create a new poll with valid data");
  test.todo("PUT /polls/create should delete any existing poll before saving new one");
  test.todo("PUT /polls/create should return 400 when any option is empty or whitespace");
  test.todo("PUT /polls/create should return 400 when options are not unique");
  test.todo("PUT /polls/create should initialize all vote counts and percentages to zero");
  test.todo("PUT /polls/create should return status 201 with success message on success");

  // FETCH
  test.todo("GET /polls/fetch should return 200 and poll data when poll exists");
  test.todo("GET /polls/fetch should return 400 and error message when no poll exists");
  test.todo("GET /polls/fetch should handle database errors with status 400");

  // UPDATE VOTES
  test.todo("PATCH /polls/updateVotes should increment vote for selectedOption");
  test.todo("PATCH /polls/updateVotes should recalculate percentages correctly and round to 2 decimals");
  test.todo("PATCH /polls/updateVotes should return 400 when selectedOption is missing or invalid");
  test.todo("PATCH /polls/updateVotes should return 200 with success message on success");
});
