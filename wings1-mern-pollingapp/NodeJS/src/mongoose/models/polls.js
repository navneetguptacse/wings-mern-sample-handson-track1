const mongoose = require("mongoose");

const pollSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
    // TODO: Add any extra validation if required by assessment
  },
  option1: {
    type: String,
    required: true
  },
  option2: {
    type: String,
    required: true
  },
  option3: {
    type: String,
    required: true
  },
  option4: {
    type: String,
    required: true
  },
  option1Votes: {
    type: Number,
    default: 0
  },
  option2Votes: {
    type: Number,
    default: 0
  },
  option3Votes: {
    type: Number,
    default: 0
  },
  option4Votes: {
    type: Number,
    default: 0
  },
  option1Percentage: {
    type: Number,
    default: 0
  },
  option2Percentage: {
    type: Number,
    default: 0
  },
  option3Percentage: {
    type: Number,
    default: 0
  },
  option4Percentage: {
    type: Number,
    default: 0
  }
  // __v will be auto-generated
});

// NOTE:
// Do NOT implement any custom methods or statics here for now.
// Business logic (create, fetch, updateVotes) goes into the router.

const Poll = mongoose.model("Poll", pollSchema);

module.exports = Poll;
