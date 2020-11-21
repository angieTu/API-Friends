const mongoose = require("mongoose");
const Episode = require("./episodes");

const seasonSchema = new mongoose.Schema({
  number: { type: Number, required: true },
  air_date: { type: String, required: true },
  description: { type: String, required: true },
  numberEpisodes: { type: Number, required: true },
  __v: {
    type: Number,
    select: false,
  },
  episodes: { type: Array, required: true }, //PASO LOS ID DE LOS EPISODIOS

  // episodes: [
  //   {
  //     type: mongoose.Schema.ObjectId,
  //     ref: "Episode",
  //   },
  // ], SI LO HAGO CON POPULATE(CHILD REFERENCING)
});

// ANTES DE GUARDAR SEASON ME TRAE LA DATA DE LOS EPISODES QUE PASE POR ID
seasonSchema.pre("save", async function (next) {
  const episodesPromise = this.episodes.map(
    async (episodesId) => await Episode.findById(episodesId)
  );
  this.episodes = await Promise.all(episodesPromise);
  next();
});

const Seasons = mongoose.model("Seasons", seasonSchema, "seasons");

module.exports = Seasons;
