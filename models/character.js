const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
  nameCharacter: { type: String, required: true },
  name: { type: String, required: true },
  image: String,
  description: String,
});

const Character = mongoose.model("Character", characterSchema, "characters");

module.exports = Character;
