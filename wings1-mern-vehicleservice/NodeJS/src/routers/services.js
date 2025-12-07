// Express router for /services endpoints.
// Implement the actual logic according to the problem statement in the TODO sections.

const express = require("express");
const { Service } = require("../models/service");

const router = express.Router();

/**
 * GET /services
 * - Should support optional query parameters:
 *   - status
 *   - start_date
 *   - end_date
 * - Should return:
 *   {
 *     count: <number>,
 *     records: [ ...service documents... ]
 *   }
 */
router.get("/", async (req, res) => {
  // TODO: Build filter object from query params and fetch matching services.
  // On success: respond with status 200 and shape described above.
  // On error: respond with status 400 and an error message.
});

/**
 * POST /services
 * - Should create a new service booking.
 * - Validations:
 *   - customerName length >= 3 and alphabets + spaces only
 *   - vehicleNumber matches XX00XX0000 pattern
 *   - serviceType is one of allowed types
 *   - date is a valid date
 * - On validation failure: status 400 and
 *   { "error": "Invalid booking details. Please check all fields." }
 * - On success: status 201 and
 *   { "message": "Booking created successfully." }
 */
router.post("/", async (req, res) => {
  // TODO: Implement validation logic and create new booking.
});

/**
 * PATCH /services/updateStatus/:id
 * - Allowed transitions:
 *   - REQUESTED -> IN_PROGRESS
 *   - IN_PROGRESS -> COMPLETED
 * - On invalid transition: status 400 and
 *   { "error": "Invalid status transition." }
 */
router.patch("/updateStatus/:id", async (req, res) => {
  // TODO: Fetch service by id, validate transition and update status.
});

/**
 * PATCH /services/cancel/:id
 * - Cannot cancel when status is COMPLETED.
 * - On forbidden cancel: status 403 and
 *   { "error": "Cannot cancel a completed service." }
 */
router.patch("/cancel/:id", async (req, res) => {
  // TODO: Implement cancel logic with above restriction.
});

/**
 * PATCH /services/markDelayed/:id
 * - Can be marked delayed only when status is IN_PROGRESS.
 * - On invalid case: status 400 and
 *   { "error": "Can be marked delayed only during IN_PROGRESS stage." }
 */
router.patch("/markDelayed/:id", async (req, res) => {
  // TODO: Implement logic to mark a service as delayed.
});

module.exports = router;
