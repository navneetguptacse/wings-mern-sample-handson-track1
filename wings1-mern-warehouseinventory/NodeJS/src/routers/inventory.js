const express = require("express");
const Inventory = require("../mongoose/models/inventory");

const router = express.Router();

/**
 * GET /inventory
 * - Optional query params:
 *   - category
 *   - minQty
 * - Should return:
 *   {
 *     count: <number>,
 *     records: [ ...inventoryItems ]
 *   }
 *
 * Example response:
 * {
 *   "count": 1,
 *   "records": [
 *     {
 *       "_id": "60afabce12003400112277aa",
 *       "name": "Steel Rod",
 *       "category": "Hardware",
 *       "quantity": 150,
 *       "price": 120
 *     }
 *   ]
 * }
 */
router.get("/", async (req, res) => {
  // TODO: Implement query building based on category and minQty.
  // TODO: Fetch inventory documents and send response as described above.
});

/**
 * POST /inventory
 * - Body should contain: { name, category, quantity, price }
 * - Validate as per schema & business rules.
 * - On validation error send: { "error": "Invalid product details." } with 400
 * - On success send:
 *   { "message": "Product added successfully." } with 201
 */
router.post("/", async (req, res) => {
  // TODO: Implement validation and persistence logic.
});

module.exports = router;
