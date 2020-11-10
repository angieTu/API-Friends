const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  name: String,
  score: { type: Number, required: true },
  message: String,
});

const Review = mongoose.model("Review", reviewSchema, "review");

module.exports = Review;
