const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Score = require("../../models/item");

// GET api/accounts

router.get("/", (req, res) => {
  Score.find()
    .sort({ Score: -1 })
    .then(items => res.json(items));
});

//Create Score

router.post("/", (req, res) => {
  const newScore = new Score({
    Name: req.body.Name,
    Score: req.body.Score,
    Category: req.body.Category
  });

  newScore.save().then(item => res.json(item));
});

mongoose.connect(
  "mongodb://localhost:27017",
  { useNewUrlParser: true }
);

module.exports = router;
