const Episode = require("../models/episodes");

const getEpisode = async (req, res) => {
  try {
    const episode = await Episode.findOne({ _id: req.params.id });
    res.status(201).json({
      status: "success",
      data: episode,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "El episodio no se puede encontrar",
    });
  }
};

const getEpisodes = async (req, res) => {
  try {
    const episodes = await Episode.find();
    if (!episodes.length) {
      res.status(500).json({
        status: "fail",
        message: "Los episodios no se pudieron encontrar",
      });
    } else {
      res.status(201).json({
        status: "success",
        data: episodes,
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "Los episodios no se pudieron encontrar",
    });
  }
};

const postEpisode = async (req, res) => {
  try {
    const episode = await Episode.create(req.body);
    res.status(201).json({
      status: "success",
      data: episode,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      err: err,
    });
  }
};

const deleteEpisode = async (req, res) => {
  try {
    await Episode.findByIdAndDelete(req.params.id);
    res.status(201).json({
      status: "success",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "No se pudo borrar el episodio",
    });
  }
};

const putEpisode = async (req, res) => {
  try {
    const episode = await Episode.replaceOne({ _id: req.params.id }, req.body);
    res.status(201).json({
      status: "success",
      data: episode,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "No se pudo modificar el episodio",
    });
  }
};

const patchEpisode = async (req, res) => {
  try {
    const episode = await Episode.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).json({
      status: "success",
      data: episode,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "No se pudo modificar el episode",
    });
  }
};

module.exports = {
  getEpisode,
  getEpisodes,
  deleteEpisode,
  postEpisode,
  putEpisode,
  patchEpisode,
};
