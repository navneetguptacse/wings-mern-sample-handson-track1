const mongoose = require("mongoose");

// TODO: Replace with the proper Mongo URI if needed
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/warehouse-db";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB: warehouse-db");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

module.exports = mongoose;
