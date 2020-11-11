const mongoose = require("mongoose");

const infoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  firstDate: Date,
  lastDate: Date,
  numberEpisodes: Number,
  numberSeasons: Number,
  authors: String,
  // familia, objeto?
  //seasons
  //characters
});

const Info = mongoose.model("Info", infoSchema, "info");

module.exports = Info;
