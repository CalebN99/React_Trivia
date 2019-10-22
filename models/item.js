const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema

const Scores = new Schema({
  Name: {
    type: String,
    required: true
  },
  Score: {
    type: Number,
    required: true
  },
  Category: {
    type: String,
    required: true
  }
});

module.exports = Score = mongoose.model("Scores", Scores);
