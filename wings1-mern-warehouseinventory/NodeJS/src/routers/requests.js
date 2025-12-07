const express = require("express");
const Request = require("../mongoose/models/request");
const Inventory = require("../mongoose/models/inventory");

const router = express.Router();

/**
 * POST /requests
 * - Creates a stock request
 * - Body: { productId, requestedQty }
 * - Validation:
 *   - requestedQty >= 1
 *   - product with productId must exist
 * - On success:
 *   - status 201, saved request with default "PENDING" status
 * - On validation error:
 *   - { "error": "Invalid request data." } with 400
 */
router.post("/", async (req, res) => {
  // TODO: Implement create request logic with validation.
});

/**
 * GET /requests
 * - Should return list of all requests
 * - Example shape: [ { _id, productName, requestedQty, status, createdAt }, ... ]
 */
router.get("/", async (req, res) => {
  // TODO: Implement fetch all requests logic.
});

/**
 * PATCH /requests/updateStatus/:id
 * - Update the status of a request
 * - Valid transitions:
 *   - PENDING -> APPROVED
 *   - APPROVED -> COMPLETED
 *   - PENDING -> REJECTED
 * - On invalid transition:
 *   - { "error": "Invalid status update." } with 400
 */
router.patch("/updateStatus/:id", async (req, res) => {
  // TODO: Implement status transition logic and validation.
});

module.exports = router;
