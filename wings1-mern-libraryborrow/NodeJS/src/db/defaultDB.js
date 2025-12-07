// This file is intended to connect to MongoDB and optionally seed default data.
// The assessment statement mentions that sample and default values are provided here.
//
// TODO:
// 1. Establish a connection to MongoDB (database name: library-db).
// 2. Optionally insert default book documents into the `books` collection
//    if the collection is empty.

const mongoose = require("mongoose");
const Book = require("../models/books");

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/library-db";

mongoose
  .connect(MONGO_URI)
  .then(async () => {
    console.log("Connected to MongoDB: library-db");
    // TODO: Seed default data only if needed.
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

module.exports = mongoose;
