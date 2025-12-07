const express = require("express");
const Order = require("../models/order");

const router = express.Router();

/**
 * GET /orders
 * - Optional query params: status, min_amount, max_amount
 * - If no query params, return all orders.
 * - Response format:
 *   { count: <number>, records: [ ...orderDocs ] }
 * - On DB error, send 400 with { error: "Unable to fetch order records" }
 */
router.get("/", async (req, res) => {
  // TODO: Implement query filter handling and DB retrieval logic
  // based on the problem statement.
});

/**
 * POST /orders
 * - Read customerName, restaurantName, items, totalAmount,
 *   estimatedDeliveryMinutes from body.
 * - Validate:
 *   * All required fields present
 *   * customerName & restaurantName length >= 3
 *   * customerName contains only alphabets & spaces
 *   * totalAmount >= 0
 *   * estimatedDeliveryMinutes between 10 and 120
 * - status must always be set to "PLACED" for new orders regardless of input.
 * - On validation failure, send 400 with
 *   { error: "Invalid order data. Please check all fields." }
 * - On success, respond 201 with:
 *   { message: "Order created successfully.", order: <createdOrder> }
 */
router.post("/", async (req, res) => {
  // TODO: Implement validation and document creation logic.
});

/**
 * PATCH /orders/updateStatus/:id
 * - Params: id
 * - Body: { status }
 * - Allowed status transitions:
 *   PLACED -> PREPARING
 *   PREPARING -> OUT_FOR_DELIVERY
 *   OUT_FOR_DELIVERY -> DELIVERED
 *   PLACED -> CANCELLED
 *   PREPARING -> CANCELLED
 *   OUT_FOR_DELIVERY -> CANCELLED
 * - If current status is DELIVERED or CANCELLED, or the requested
 *   transition is not in the list above, return 400 with:
 *   { error: "Invalid status transition." }
 * - On valid update, respond 200 with:
 *   { message: "Order status updated successfully." }
 */
router.patch("/updateStatus/:id", async (req, res) => {
  // TODO: Implement status transition logic with proper validations.
});

/**
 * PATCH /orders/markDelayed/:id
 * - Params: id
 * - If current status is "PREPARING" or "OUT_FOR_DELIVERY",
 *   set isDelayed = true.
 * - Otherwise respond 400 with:
 *   { error: "Order can be marked delayed only when it is preparing or out for delivery." }
 * - On successful update, respond 200 with:
 *   { message: "Order marked as delayed." }
 */
router.patch("/markDelayed/:id", async (req, res) => {
  // TODO: Implement mark delayed logic based on allowed statuses.
});

module.exports = router;
