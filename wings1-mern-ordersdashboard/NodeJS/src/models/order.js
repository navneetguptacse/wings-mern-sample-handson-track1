const mongoose = require("mongoose");

const VALID_STATUS = [
  "PLACED",
  "PREPARING",
  "OUT_FOR_DELIVERY",
  "DELIVERED",
  "CANCELLED"
];

const orderSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
    minlength: 3
    // TODO: Add custom validator to allow only alphabets and spaces.
  },
  restaurantName: {
    type: String,
    required: true,
    minlength: 3
  },
  items: {
    type: String,
    required: true,
    minlength: 3
  },
  totalAmount: {
    type: Number,
    required: true,
    min: 0
  },
  status: {
    type: String,
    required: true,
    enum: VALID_STATUS,
    default: "PLACED"
  },
  estimatedDeliveryMinutes: {
    type: Number,
    required: true,
    min: 10,
    max: 120
  },
  isDelayed: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// NOTE:
// All business logic for status transitions and delayed handling
// should be implemented in the router, not here.

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
module.exports.VALID_STATUS = VALID_STATUS;
