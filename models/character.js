const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
  nameCharacter: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  birthdate: { type: String, required: true },
  gender: { type: String, required: true },
  profession: { type: Array, required: true },
  couples: { type: Array, required: true },
  spouse: { type: String, required: true },
  children: { type: Array, required: true },
  alias: { type: String, required: true },
  __v: {
    type: Number,
    select: false,
  },
});

const Character = mongoose.model("Character", characterSchema, "characters");

module.exports = Character;
