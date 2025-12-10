const mongoose = require("mongoose");
const Book = require("../../src/models/books");

const bookOneObjectID = new mongoose.Types.ObjectId();
const bookTwoObjectID = new mongoose.Types.ObjectId();
const bookThreeObjectID = new mongoose.Types.ObjectId();
const bookFourObjectID = new mongoose.Types.ObjectId();
const bookFiveObjectID = new mongoose.Types.ObjectId();

const bookOne = {
  _id: bookOneObjectID,
  title: "Node for Beginners",
  author: "Alice Walker",
  category: "Tech",
  isBorrowed: true,
  borrowerName: "John Doe",
  borrowDate: new Date(),
};

const bookTwo = {
  _id: bookTwoObjectID,
  title: "React Patterns",
  author: "Dan Abramov",
  category: "Tech",
  isBorrowed: false,
  borrowerName: "",
  borrowDate: null,
};

const bookThree = {
  _id: bookThreeObjectID,
  title: "The Science of Cooking",
  author: "Sara Bloom",
  category: "Science",
  isBorrowed: false,
  borrowerName: "",
  borrowDate: null,
};

const bookFour = {
  _id: bookFourObjectID,
  title: "World History Vol.1",
  author: "Mark Bell",
  category: "History",
  isBorrowed: false,
  borrowerName: "",
  borrowDate: null,
};

const bookFive = {
  _id: bookFiveObjectID,
  title: "Fictional Tales",
  author: "Nina Stone",
  category: "Fiction",
  isBorrowed: false,
  borrowerName: "",
  borrowDate: null,
};

const setUpDatabase = async () => {
  await Book.deleteMany();
  await new Book(bookOne).save();
  await new Book(bookTwo).save();
  await new Book(bookThree).save();
  await new Book(bookFour).save();
  await new Book(bookFive).save();
};

module.exports = {
  bookOne,
  bookTwo,
  bookThree,
  bookFour,
  bookFive,
  setUpDatabase,
};
