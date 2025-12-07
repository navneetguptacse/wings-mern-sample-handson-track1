const mongoose = require("mongoose");

const VALID_CATEGORIES = ["Fiction", "Science", "History", "Tech"];

const booksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3
  },
  author: {
    type: String,
    required: true
    // TODO: Add custom validator to allow only alphabets and spaces if needed.
  },
  category: {
    type: String,
    required: true,
    enum: VALID_CATEGORIES
  },
  isBorrowed: {
    type: Boolean,
    default: false
  },
  borrowerName: {
    type: String,
    default: ""
  },
  borrowDate: {
    type: Date,
    default: null
  }
});

// NOTE:
// All business logic should be handled in the router. This model simply defines
// the shape of the `books` documents.

const Book = mongoose.model("Book", booksSchema);

module.exports = Book;
module.exports.VALID_CATEGORIES = VALID_CATEGORIES;
