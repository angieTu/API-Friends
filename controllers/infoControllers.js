const Info = require("../models/info");

const getInfo = async (req, res) => {
  try {
    const info = await Info.find();
    res.status(201).json({
      status: "success",
      data: info,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Información no encontrada",
    });
  }
};

const postInfo = async (req, res) => {
  try {
    const info = await Info.create(req.body);
    res.status(201).json({
      status: "success",
      data: info,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      err: err,
    });
  }
};

const patchInfo = async (req, res) => {
  try {
    const info = await Info.findOneAndUpdate(info, req.body);
    res.status(201).json({
      status: "success",
      data: info,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "No se pudo modificar la información",
    });
  }
};

const deleteInfo = async (req, res) => {
  try {
    await Info.findByIdAndDelete(req.params.id);
    res.status(201).json({
      status: "success",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "No se pudo borrar la información",
    });
  }
};

module.exports = {
  getInfo,
  patchInfo,
  postInfo,
  deleteInfo,
};
