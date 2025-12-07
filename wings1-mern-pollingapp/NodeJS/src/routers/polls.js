const express = require("express");
const Poll = require("../mongoose/models/polls");

const router = express.Router();

/**
 * PUT /polls/create
 * - Delete existing document(s) in polls collection.
 * - Validate body:
 *   - question and all options should be non-empty and not just whitespaces
 *   - options must be unique
 * - Save new document with defaults for votes and percentages
 * - On success: status 201, { "message": "Poll created successfully." }
 * - On validation error: status 400, { "error": "All options must be unique and inputs should not be empty" }
 * - On any other error: status 400 with generic error message
 */
router.put("/create", async (req, res) => {
  // TODO: Implement the full logic as described in the comment above.
});

/**
 * GET /polls/fetch
 * - Get the single poll document
 * - On success: status 200 and poll document
 * - If no poll found: status 400, { "error": "Poll not found. Please create a poll" }
 * - On DB error: status 400 with error message
 */
router.get("/fetch", async (req, res) => {
  // TODO: Implement fetch logic.
});

/**
 * PATCH /polls/updateVotes
 * - Request body: { selectedOption: "option1" | "option2" | "option3" | "option4" }
 * - Increment the selected option's vote by 1
 * - Recalculate all percentages using given formula and round to 2 decimals
 * - On success: status 200, { "message": "Vote registered successfully." }
 * - On validation / DB error: status 400 with error message
 */
router.patch("/updateVotes", async (req, res) => {
  // TODO: Implement vote update + percentage calculation logic.
});

module.exports = router;
