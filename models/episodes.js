const mongoose = require("mongoose");
const Review = require("./review");

const episodesSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    number: { type: String, required: true }, //S01E06
    season: { type: Number, required: true },
    air_date: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, select: false },
    __v: {
      type: Number,
      select: false,
    },
    id: {
      type: Number,
      select: false,
    },
    //  rating: { type: Array, default: 0 },
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
