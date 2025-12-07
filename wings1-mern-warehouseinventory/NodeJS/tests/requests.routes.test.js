const request = require("supertest");
const app = require("../src/app");

describe("Requests routes", () => {
  test.todo("POST /requests should return 400 when product does not exist");
  test.todo("POST /requests should return 400 when requestedQty is less than 1");
  test.todo("POST /requests should create a new request with PENDING status by default");
  test.todo("GET /requests should return list of all requests");
  test.todo("GET /requests should handle DB errors gracefully");
  test.todo("PATCH /requests/updateStatus/:id should move status PENDING to APPROVED");
  test.todo("PATCH /requests/updateStatus/:id should move status APPROVED to COMPLETED");
  test.todo("PATCH /requests/updateStatus/:id should move status PENDING to REJECTED");
  test.todo("PATCH /requests/updateStatus/:id should reject invalid status transitions");
  test.todo("PATCH /requests/updateStatus/:id should return 404 for invalid request id");
  test.todo("PATCH /requests/updateStatus/:id should handle DB errors gracefully");
})
