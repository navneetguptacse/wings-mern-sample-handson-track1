const request = require("supertest");
const app = require("../src/app");

describe("Inventory routes", () => {
  test.todo("GET /inventory should return list wrapped in count and records");
  test.todo("GET /inventory should filter by category query parameter");
  test.todo("GET /inventory should filter by minQty query parameter");
  test.todo("GET /inventory should handle database errors with status 400 or 500");
  test.todo("POST /inventory should validate required fields");
  test.todo("POST /inventory should reject product name shorter than 3 characters");
  test.todo("POST /inventory should reject invalid category values");
  test.todo("POST /inventory should reject negative quantity");
  test.todo("POST /inventory should reject price less than 1");
  test.todo("POST /inventory should save valid product and return 201");
  test.todo("POST /inventory should respond with proper error message on validation failure");
});
