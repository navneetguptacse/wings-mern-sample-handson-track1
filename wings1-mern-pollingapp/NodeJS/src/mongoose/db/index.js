const mongoose = require("mongoose");

// TODO: Replace with your actual MongoDB URI
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/polling-app";

// This file should only establish the connection.
// Do NOT write business logic here.
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB for polling-app");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

module.exports = mongoose;
