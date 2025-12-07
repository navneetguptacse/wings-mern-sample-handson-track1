// This file is intended to connect to MongoDB and optionally seed default data.
// The assessment statement mentions that sample and default values are provided here.
//
// TODO:
// 1. Establish a connection to MongoDB (database name: orders-db).
// 2. Optionally insert default order documents into the `orders` collection
//    if the collection is empty.

const mongoose = require("mongoose");
const Order = require("../models/order");

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/orders-db";

mongoose
  .connect(MONGO_URI)
  .then(async () => {
    console.log("Connected to MongoDB: orders-db");
    // TODO: Seed default data only if needed.
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

module.exports = mongoose;
