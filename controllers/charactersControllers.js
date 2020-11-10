const Character = require("../models/character");

const getCharacter = async (req, res) => {
  try {
    const character = await Character.findOne({ _id: req.params.id });
    res.status(201).json({
      status: "success",
      data: character,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "El personaje no se puede encontrar",
    });
  }
};

const getCharacters = async (req, res) => {
  try {
    const characters = await Character.find();
    if (!characters.length) {
      res.status(500).json({
        status: "fail",
        message: "Los personajes no se pudieron encontrar",
      });
    } else {
      res.status(201).json({
        status: "success",
        data: characters,
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "Los personajes no se pudieron encontrar",
    });
  }
};

const postCharacter = async (req, res) => {
  try {
    const character = await Character.create(req.body);
    res.status(201).json({
      status: "success",
      data: character,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      err: err,
    });
  }
};

const deleteCharacter = async (req, res) => {
  try {
    await Character.findByIdAndDelete(req.params.id);
    res.status(201).json({
      status: "success",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "No se pudo borrar el personaje",
    });
  }
};

const putCharacter = async (req, res) => {
  try {
    const character = await Character.replaceOne(
      { _id: req.params.id },
      req.body
    );
    res.status(201).json({
      status: "success",
      data: character,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "No se pudo modificar el personaje",
    });
  }
};

const patchCharacter = async (req, res) => {
  try {
    const character = await Character.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(201).json({
      status: "success",
      data: character,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "No se pudo modificar el personaje",
    });
  }
};

module.exports = {
  getCharacter,
  getCharacters,
  deleteCharacter,
  postCharacter,
  putCharacter,
  patchCharacter,
};
