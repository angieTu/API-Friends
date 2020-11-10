const mongoose = require("mongoose");

const episodesSchema = new mongoose.Schema({
  number: { type: Number, required: true },
  date: { type: Date, required: true },
  image: String,
  //characters
  //reviews
});

const Episode = mongoose.model("Episode", episodesSchema, "episodes");

module.exports = Episode;
