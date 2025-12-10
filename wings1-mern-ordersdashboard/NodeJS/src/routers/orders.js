const express = require("express");
const Order = require("../models/order");

const router = express.Router();

const VALID_STATUS = Order.VALID_STATUS || [];

const ALLOWED_TRANSITIONS = {
  PLACED: ["PREPARING", "CANCELLED"],
  PREPARING: ["OUT_FOR_DELIVERY", "CANCELLED"],
  OUT_FOR_DELIVERY: ["DELIVERED", "CANCELLED"],
};

/**
 * GET /orders
 * - Optional query params: status, min_amount, max_amount
 * - If no query params, return all orders.
 * - Response format:
 *   { count: <number>, records: [ ...orderDocs ] }
 * - On DB error, send 400 with { error: "Unable to fetch order records" }
 */
router.get("/", async (req, res) => {
  try {
    const { status, min_amount, max_amount } = req.query;
    const filter = {};

    if (status) {
      // only filter if status is valid
      if (VALID_STATUS.includes(status)) {
        filter.status = status;
      } else {
        return res.status(400).send({ error: "Unable to fetch order records" });
      }
    }

    if (min_amount || max_amount) {
      filter.totalAmount = {};
      if (min_amount) {
        const min = parseFloat(min_amount);
        if (!Number.isNaN(min)) filter.totalAmount.$gte = min;
      }
      if (max_amount) {
        const max = parseFloat(max_amount);
        if (!Number.isNaN(max)) filter.totalAmount.$lte = max;
      }
      // if both parsed to NaN, remove the filter
      if (Object.keys(filter.totalAmount).length === 0)
        delete filter.totalAmount;
    }

    const records = await Order.find(filter);
    return res.status(200).send({ count: records.length, records });
  } catch (err) {
    return res.status(400).send({ error: "Unable to fetch order records" });
  }
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
  try {
    const {
      customerName,
      restaurantName,
      items,
      totalAmount,
      estimatedDeliveryMinutes,
    } = req.body;

    // basic required checks
    if (
      !customerName ||
      !restaurantName ||
      !items ||
      totalAmount === undefined ||
      estimatedDeliveryMinutes === undefined
    ) {
      return res
        .status(400)
        .send({ error: "Invalid order data. Please check all fields." });
    }

    if (
      typeof customerName !== "string" ||
      customerName.trim().length < 3 ||
      !/^[A-Za-z\s]+$/.test(customerName)
    ) {
      return res
        .status(400)
        .send({ error: "Invalid order data. Please check all fields." });
    }

    if (
      typeof restaurantName !== "string" ||
      restaurantName.trim().length < 3
    ) {
      return res
        .status(400)
        .send({ error: "Invalid order data. Please check all fields." });
    }

    if (typeof items !== "string" || items.trim().length < 3) {
      return res
        .status(400)
        .send({ error: "Invalid order data. Please check all fields." });
    }

    const amt = Number(totalAmount);
    if (Number.isNaN(amt) || amt < 0) {
      return res
        .status(400)
        .send({ error: "Invalid order data. Please check all fields." });
    }

    const eta = Number(estimatedDeliveryMinutes);
    if (Number.isNaN(eta) || eta < 10 || eta > 120) {
      return res
        .status(400)
        .send({ error: "Invalid order data. Please check all fields." });
    }

    const newOrder = new Order({
      customerName: customerName.trim(),
      restaurantName: restaurantName.trim(),
      items: items.trim(),
      totalAmount: amt,
      estimatedDeliveryMinutes: eta,
      status: "PLACED",
    });

    const created = await newOrder.save();
    return res
      .status(201)
      .send({ message: "Order created successfully.", order: created });
  } catch (err) {
    return res
      .status(400)
      .send({ error: "Invalid order data. Please check all fields." });
  }
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
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status || !VALID_STATUS.includes(status)) {
      return res.status(400).send({ error: "Invalid status transition." });
    }

    const order = await Order.findById(id);
    if (!order)
      return res.status(400).send({ error: "Invalid status transition." });

    const current = order.status;
    if (current === "DELIVERED" || current === "CANCELLED") {
      return res.status(400).send({ error: "Invalid status transition." });
    }

    const allowed = ALLOWED_TRANSITIONS[current] || [];
    if (!allowed.includes(status)) {
      return res.status(400).send({ error: "Invalid status transition." });
    }

    order.status = status;
    await order.save();
    return res
      .status(200)
      .send({ message: "Order status updated successfully." });
  } catch (err) {
    return res.status(400).send({ error: "Invalid status transition." });
  }
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
  try {
    const { id } = req.params;
    const order = await Order.findById(id);
    if (!order) {
      return res.status(400).send({
        error:
          "Order can be marked delayed only when it is preparing or out for delivery.",
      });
    }

    if (order.status === "PREPARING" || order.status === "OUT_FOR_DELIVERY") {
      order.isDelayed = true;
      await order.save();
      return res.status(200).send({ message: "Order marked as delayed." });
    }

    return res.status(400).send({
      error:
        "Order can be marked delayed only when it is preparing or out for delivery.",
    });
  } catch (err) {
    return res.status(400).send({
      error:
        "Order can be marked delayed only when it is preparing or out for delivery.",
    });
  }
});

module.exports = router;
