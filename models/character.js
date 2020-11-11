const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
  nameCharacter: { type: String, required: true },
  name: { type: String, required: true },
  image: String,
  description: String,
  birthdate: String,
  gender: String,
  profession: String,
  couples: Array,
  partner: String,
});

const Character = mongoose.model("Character", characterSchema, "characters");

module.exports = Character;
