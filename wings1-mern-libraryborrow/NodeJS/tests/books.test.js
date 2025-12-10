const request = require("supertest");
const app = require("../src/app");
const Book = require("../src/models/books");
const mongoose = require("mongoose");
const {
  setUpDatabase,
  bookOne,
  bookTwo,
  bookThree,
  bookFour,
  bookFive,
} = require("./utils/testDB");

beforeEach(setUpDatabase);

// GET /books - expect structure { count, records }
test("Viewing all the books", async () => {
  const response = await request(app).get("/books").expect(200);
  // support both styles: array directly or { count, records }
  if (Array.isArray(response.body)) {
    expect(response.body.length).toBe(5);
    expect(response.body[0].title).toBe(bookOne.title);
    expect(response.body[1].title).toBe(bookTwo.title);
    expect(response.body[2].title).toBe(bookThree.title);
    expect(response.body[3].title).toBe(bookFour.title);
    expect(response.body[4].title).toBe(bookFive.title);
  } else {
    expect(response.body.count).toBe(5);
    expect(response.body.records[0].title).toBe(bookOne.title);
    expect(response.body.records[1].title).toBe(bookTwo.title);
    expect(response.body.records[2].title).toBe(bookThree.title);
    expect(response.body.records[3].title).toBe(bookFour.title);
    expect(response.body.records[4].title).toBe(bookFive.title);
  }
});

// POST /books - create a new book
test("Creating a new book with valid data", async () => {
  const payload = {
    title: "New Tech Book",
    author: "Clara Oswald",
    category: "Tech",
  };

  const res = await request(app).post("/books").send(payload).expect(201);
  expect(res.body).toBeDefined();
  // verify it exists in DB
  const dbBook = await Book.findOne({ title: payload.title });
  expect(dbBook).not.toBeNull();
  expect(dbBook.author).toBe(payload.author);
});

test("POST /books should validate title length and return 400 for short titles", async () => {
  await request(app)
    .post("/books")
    .send({ title: "AB", author: "Someone", category: "Tech" })
    .expect(400);
});

test("POST /books should validate category against allowed values", async () => {
  await request(app)
    .post("/books")
    .send({ title: "Valid Title", author: "Someone", category: "Unknown" })
    .expect(400);
});

// PATCH /books/borrow/:id - borrow a book
test("Borrowing a book (sets isBorrowed true)", async () => {
  await request(app)
    .patch(`/books/borrow/${bookTwo._id}`)
    .send({ borrowerName: "Jane Doe" })
    .expect(200);

  const book = await Book.findById(bookTwo._id);
  expect(book.isBorrowed).toBe(true);
  expect(book.borrowerName).toBe("Jane Doe");
  expect(book.borrowDate).not.toBeNull();
});

test("Borrowing an already borrowed book returns 403", async () => {
  await request(app)
    .patch(`/books/borrow/${bookOne._id}`)
    .send({ borrowerName: "Someone" })
    .expect(403);
});

test("Borrowing requires borrowerName (400)", async () => {
  await request(app)
    .patch(`/books/borrow/${bookThree._id}`)
    .send({})
    .expect(400);
});

// PATCH /books/return/:id - return a book
test("Returning a borrowed book resets borrow fields", async () => {
  await request(app).patch(`/books/return/${bookOne._id}`).expect(200);
  const book = await Book.findById(bookOne._id);
  expect(book.isBorrowed).toBe(false);
  expect(book.borrowerName).toBe("");
  expect(book.borrowDate).toBeNull();
});

test("Returning a non-borrowed book returns 403", async () => {
  await request(app).patch(`/books/return/${bookThree._id}`).expect(403);
});

// Additional tests: filters, validation, and 404 cases
test("GET /books?category=Tech filters by category", async () => {
  const res = await request(app)
    .get("/books")
    .query({ category: "Tech" })
    .expect(200);
  const records = Array.isArray(res.body) ? res.body : res.body.records;
  expect(records.length).toBe(2);
  const titles = records.map((r) => r.title);
  expect(titles).toEqual(
    expect.arrayContaining([bookOne.title, bookTwo.title])
  );
});

test("GET /books?author=Dan Abramov filters by author", async () => {
  const res = await request(app)
    .get("/books")
    .query({ author: "Dan Abramov" })
    .expect(200);
  const records = Array.isArray(res.body) ? res.body : res.body.records;
  expect(records.length).toBe(1);
  expect(records[0].title).toBe(bookTwo.title);
});

test("GET /books?available=true returns only non-borrowed books", async () => {
  const res = await request(app)
    .get("/books")
    .query({ available: "true" })
    .expect(200);
  const records = Array.isArray(res.body) ? res.body : res.body.records;
  // bookOne is borrowed; others are not
  expect(records.length).toBe(4);
  const titles = records.map((r) => r.title);
  expect(titles).not.toContain(bookOne.title);
});

test("POST /books missing fields returns 400", async () => {
  await request(app).post("/books").send({ title: "OnlyTitle" }).expect(400);
});

test("POST /books invalid author returns 400", async () => {
  await request(app)
    .post("/books")
    .send({ title: "Valid Title", author: "John123", category: "Tech" })
    .expect(400);
});

test("PATCH /books/borrow/:id with non-existent id returns 404", async () => {
  const fakeId = new mongoose.Types.ObjectId();
  await request(app)
    .patch(`/books/borrow/${fakeId}`)
    .send({ borrowerName: "No One" })
    .expect(404);
});

test("PATCH /books/return/:id with non-existent id returns 404", async () => {
  const fakeId = new mongoose.Types.ObjectId();
  await request(app).patch(`/books/return/${fakeId}`).expect(404);
});
