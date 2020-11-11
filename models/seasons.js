const mongoose = require("mongoose");

const seasonSchema = new mongoose.Schema({
  number: { type: Number, required: true },
  air_date: { type: Date, required: true },
  description: String,
  numberEpisodes: Number,
  //episodes
});

const Seasons = mongoose.model("Seasons", seasonSchema, "seasons");

module.exports = Seasons;
