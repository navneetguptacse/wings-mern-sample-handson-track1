const mongoose = require("mongoose");

/**
 * Request schema
 * productId: ObjectId (ref to Inventory)
 * productName: String
 * requestedQty: Number >= 1
 * status: PENDING | APPROVED | REJECTED | COMPLETED
 * createdAt: Date
 */
const requestSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Inventory"
    },
    productName: {
      type: String,
      required: true
    },
    requestedQty: {
      type: Number,
      required: true,
      min: 1
    },
    status: {
      type: String,
      required: true,
      enum: ["PENDING", "APPROVED", "REJECTED", "COMPLETED"],
      default: "PENDING"
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  { versionKey: false }
);

const Request = mongoose.model("Request", requestSchema);

module.exports = Request;
