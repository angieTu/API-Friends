const Episode = require("../models/episodes");

const getEpisode = async (req, res) => {
  try {
    const episode = await Episode.findById(req.params.id).populate("review");
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
    const camposExcluidos = ["page", "limit", "sort"];
    const queryObj = { ...req.query };
    camposExcluidos.forEach((el) => delete queryObj[el]);

    let query = Episode.find(queryObj).populate("review");
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 10;
    const skip = (page - 1) * limit;
    query = query.limit(limit).skip(skip);

    if (req.query.sort) {
      const campos = req.query.sort.split(",").join(" ");
      query = query.sort(campos);
    } else {
      query = query.sort(" ");
    }

    const episodes = await query;

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
