const request = require("supertest");
const app = require("../src/app");

// Test skeletons for the /books routes.
// Implementations are intentionally omitted (test.todo) so that you
// can complete them as part of the assessment.

describe("Library Book Borrowing API - /books routes", () => {
  // GET /books
  test.todo("GET /books should return all books with count when no query params are provided");
  test.todo("GET /books should filter by category query parameter");
  test.todo("GET /books should filter by author query parameter");
  test.todo("GET /books should filter by available=true to show only non-borrowed books");
  test.todo("GET /books should filter by available=false to show only borrowed books");
  test.todo("GET /books should handle database errors and return status 400");

  // POST /books
  test.todo("POST /books should create a new book with valid payload and respond 201");
  test.todo("POST /books should validate title length and return 400 for short titles");
  test.todo("POST /books should validate author to contain only alphabets and spaces");
  test.todo("POST /books should validate category against allowed values");
  test.todo("POST /books should return 400 with proper error message on invalid input");

  // PATCH /books/borrow/:id
  test.todo("PATCH /books/borrow/:id should require borrowerName and return 400 if missing");
  test.todo("PATCH /books/borrow/:id should return 403 if the book is already borrowed");
  test.todo("PATCH /books/borrow/:id should set isBorrowed true and update borrowerName and borrowDate");
  test.todo("PATCH /books/borrow/:id should handle DB errors with status 400");

  // PATCH /books/return/:id
  test.todo("PATCH /books/return/:id should return 403 if the book is not currently borrowed");
  test.todo("PATCH /books/return/:id should reset isBorrowed, borrowerName and borrowDate on success");
  test.todo("PATCH /books/return/:id should handle DB errors with status 400");
});
