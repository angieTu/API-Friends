const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  episode: { type: mongoose.Schema.ObjectId, ref: "Episode" },
  score: { type: Number, required: true },
  message: { type: String, required: true },
  __v: {
    type: Number,
    select: false,
  },
});

const Review = mongoose.model("Review", reviewSchema, "review");

module.exports = Review;
