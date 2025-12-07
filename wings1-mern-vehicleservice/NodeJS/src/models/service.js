// Mongoose model for 'services' collection.
// Validation rules are defined here based on the problem statement.

const mongoose = require("mongoose");

const SERVICE_TYPES = ["General Service", "Oil Change", "Full Inspection"];
const STATUS_TYPES = ["REQUESTED", "IN_PROGRESS", "COMPLETED", "CANCELLED"];

const serviceSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
      minlength: 3,
      // TODO: ensure alphabets + spaces only via match / custom validator.
    },
    vehicleNumber: {
      type: String,
      required: true
      // TODO: enforce XX00XX0000 pattern using regex validation.
    },
    serviceType: {
      type: String,
      enum: SERVICE_TYPES,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    status: {
      type: String,
      enum: STATUS_TYPES,
      default: "REQUESTED"
    },
    isDelayed: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    collection: "services"
  }
);

// NOTE: Do not add business logic here for status transitions or delay logic.
// That should be handled within the router/controller layer.

const Service = mongoose.model("Service", serviceSchema);

module.exports = {
  Service,
  SERVICE_TYPES,
  STATUS_TYPES
};
