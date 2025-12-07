const mongoose = require("mongoose");

/**
 * Inventory schema
 * name: String, min 3 chars
 * category: 'Electronics' | 'Furniture' | 'Hardware'
 * quantity: Number >= 0
 * price: Number >= 1
 * createdAt: Date (auto)
 */
const inventorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3
    },
    category: {
      type: String,
      required: true,
      enum: ["Electronics", "Furniture", "Hardware"]
    },
    quantity: {
      type: Number,
      required: true,
      min: 0
    },
    price: {
      type: Number,
      required: true,
      min: 1
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  { versionKey: false }
);

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
