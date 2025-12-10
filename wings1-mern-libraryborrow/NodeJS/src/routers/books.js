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
  try {
    const { category, author, available } = req.query;
    const filter = {};

    if (category) filter.category = category;
    if (author) filter.author = author;
    if (typeof available !== "undefined") {
      if (available === "true") filter.isBorrowed = false;
      else if (available === "false") filter.isBorrowed = true;
    }

    const records = await Book.find(filter).lean();
    return res.status(200).send({ count: records.length, records });
  } catch (err) {
    return res.status(400).send({ error: "Unable to fetch book records" });
  }
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
  try {
    const { title, author, category } = req.body || {};
    if (!title || !author || !category) {
      return res
        .status(400)
        .send({ error: "Invalid input. Please check all fields." });
    }

    if (typeof title !== "string" || title.trim().length < 3) {
      return res
        .status(400)
        .send({ error: "Invalid input. Please check all fields." });
    }

    if (!/^[A-Za-z\s]+$/.test(author)) {
      return res
        .status(400)
        .send({ error: "Invalid input. Please check all fields." });
    }

    const VALID = Book.VALID_CATEGORIES || [
      "Fiction",
      "Science",
      "History",
      "Tech",
    ];
    if (!VALID.includes(category)) {
      return res
        .status(400)
        .send({ error: "Invalid input. Please check all fields." });
    }

    const book = new Book({
      title: title.trim(),
      author: author.trim(),
      category,
    });
    await book.save();
    return res.status(201).send({ message: "Book added successfully.", book });
  } catch (error) {
    return res.status(400).send({ error: "Unable to create book" });
  }
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
  try {
    const id = req.params.id;
    const borrowerName = req.body && req.body.borrowerName;

    if (!borrowerName || String(borrowerName).trim().length === 0) {
      return res
        .status(400)
        .send({ error: "Borrower name is required to borrow a book." });
    }

    const book = await Book.findById(id);
    if (!book) return res.status(404).send({ error: "Book not found." });
    if (book.isBorrowed) {
      return res
        .status(403)
        .send({ error: "This book has already been borrowed." });
    }

    book.isBorrowed = true;
    book.borrowerName = String(borrowerName).trim();
    book.borrowDate = new Date();
    await book.save();
    return res.status(200).send({ message: "Book borrowed successfully." });
  } catch (error) {
    return res.status(400).send({ error: "Unable to borrow book" });
  }
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
  try {
    const id = req.params.id;
    const book = await Book.findById(id);
    if (!book) return res.status(404).send({ error: "Book not found." });
    if (!book.isBorrowed) {
      return res
        .status(403)
        .send({ error: "This book is not borrowed currently." });
    }

    book.isBorrowed = false;
    book.borrowerName = "";
    book.borrowDate = null;
    await book.save();
    return res.status(200).send({ message: "Book returned successfully." });
  } catch (error) {
    return res.status(400).send({ error: "Unable to return book" });
  }
});

module.exports = router;
