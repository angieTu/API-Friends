const mongoose = require("mongoose");

const episodesSchema = new mongoose.Schema({
  number: { type: Number, required: true }, //S01E06
  air_date: { type: Date, required: true },
  image: String,
  //characters
  //reviews
  // rating
});

const Episode = mongoose.model("Episode", episodesSchema, "episodes");

module.exports = Episode;
