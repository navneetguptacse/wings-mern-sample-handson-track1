const express = require("express");
const Book = require("../models/books");

const router = express.Router();

/**
 * GET /books
 * - Optional query params: category, author, available
 * - If no query params, return all books.
 * - Response format:
 *   { count: <number>, records: [ ...bookDocs ] }
 * - On DB error, send 400 with { error: "Unable to fetch book records" }
 */
router.get("/", async (req, res) => {
  // TODO: Implement query filter handling and DB retrieval logic.
});

/**
 * POST /books
 * - Read title, author, category from body.
 * - Validate:
 *   * All fields provided
 *   * title length >= 3
 *   * author contains only alphabets and spaces
 *   * category is in allowed list
 * - On validation failure, send 400 with
 *   { error: "Invalid input. Please check all fields." }
 * - On success, create a new document and respond 201 with:
 *   { message: "Book added successfully.", book: <createdBook> }
 */
router.post("/", async (req, res) => {
  // TODO: Implement validation and creation logic.
});

/**
 * PATCH /books/borrow/:id
 * - Params: id
 * - Body: { borrowerName }
 * - Validate borrowerName is non-empty / non-whitespace.
 *   On failure: 400 with { error: "Borrower name is required to borrow a book." }
 * - If book already borrowed (isBorrowed === true):
 *   respond 403 with { error: "This book has already been borrowed." }
 * - Otherwise:
 *   * set isBorrowed = true
 *   * set borrowerName
 *   * set borrowDate = current date
 *   respond 200 with { message: "Book borrowed successfully." }
 * - On any DB error, respond 400 with generic error.
 */
router.patch("/borrow/:id", async (req, res) => {
  // TODO: Implement borrow logic.
});

/**
 * PATCH /books/return/:id
 * - Params: id
 * - If book is not borrowed (isBorrowed === false):
 *   respond 403 with { error: "This book is not borrowed currently." }
 * - Otherwise:
 *   * set isBorrowed = false
 *   * clear borrowerName and borrowDate
 *   respond 200 with { message: "Book returned successfully." }
 * - On any DB error, respond 400 with generic error.
 */
router.patch("/return/:id", async (req, res) => {
  // TODO: Implement return logic.
});

module.exports = router;
