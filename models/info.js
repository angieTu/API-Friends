const mongoose = require("mongoose");
const Seasons = require("./seasons");
const Character = require("./character");

const infoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    firstDate: {
      type: String,
      required: true,
    },
    lastDate: {
      type: String,
      required: true,
    },
    numberEpisodes: {
      type: Number,
      required: true,
    },
    numberSeasons: {
      type: Number,
      required: true,
    },
    authors: {
      type: String,
      required: true,
    },
    origin: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    __v: {
      type: Number,
      select: false,
    },
    seasons: { type: Array, required: true },
    characters: { type: Array, required: true },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

infoSchema.pre("save", async function (next) {
  const seasonsPromise = this.seasons.map(
    async (seasonsId) => await Seasons.findById(seasonsId)
  );
  const charactersPromise = this.characters.map(
    async (charactersId) => await Character.findById(charactersId)
  );
  this.seasons = await Promise.all(seasonsPromise);
  this.characters = await Promise.all(charactersPromise);
  next();
});

const Info = mongoose.model("Info", infoSchema, "info");

module.exports = Info;
