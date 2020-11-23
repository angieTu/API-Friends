const mongoose = require("mongoose");
const Review = require("./review");

const episodesSchema = new mongoose.Schema(
  {
    number: { type: String, required: true }, //S01E06
    air_date: { type: String, required: true },
    image: String,
    __v: {
      type: Number,
      select: false,
    },
    id: {
      type: Number,
      select: false,
    },
    // rating: { type: Array, default: 0 },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

episodesSchema.virtual("review", {
  ref: "Review",
  foreignField: "episode",
  localField: "_id",
});

const Episode = mongoose.model("Episode", episodesSchema, "episodes");

module.exports = Episode;
