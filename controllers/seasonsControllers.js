const Season = require("../models/seasons");

const getSeason = async (req, res) => {
  try {
    const season = await Season.findOne({ _id: req.params.id });
    res.status(201).json({
      status: "success",
      data: season,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "La temporada no se puede encontrar",
    });
  }
};

const getSeasons = async (req, res) => {
  try {
    const seasons = await Season.find();
    if (!seasons.length) {
      res.status(500).json({
        status: "fail",
        message: "Las temporadas no se pudieron encontrar",
      });
    } else {
      res.status(201).json({
        status: "success",
        data: seasons,
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "Las temporadas no se pudieron encontrar",
    });
  }
};

const postSeason = async (req, res) => {
  try {
    const season = await Season.create(req.body);
    res.status(201).json({
      status: "success",
      data: season,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      err: err,
    });
  }
};

const deleteSeason = async (req, res) => {
  try {
    await Season.findByIdAndDelete(req.params.id);
    res.status(201).json({
      status: "success",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "No se pudo borrar la temporada",
    });
  }
};

const putSeason = async (req, res) => {
  try {
    const season = await Season.replaceOne({ _id: req.params.id }, req.body);
    res.status(201).json({
      status: "success",
      data: season,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "No se pudo modificar la temporada",
    });
  }
};

const patchSeason = async (req, res) => {
  try {
    const season = await Season.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).json({
      status: "success",
      data: season,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "No se pudo modificar la temporada",
    });
  }
};

module.exports = {
  getSeason,
  getSeasons,
  deleteSeason,
  postSeason,
  putSeason,
  patchSeason,
};
