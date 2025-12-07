// Default MongoDB connection setup for service-db database.
// Business logic should not be added here.

const mongoose = require("mongoose");

const MONGO_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/service-db";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB: service-db");
  })
  .catch((err) => {
    console.error("Mongo connection error", err);
  });

module.exports = mongoose;
