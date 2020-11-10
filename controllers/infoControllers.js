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

module.exports = {
  getInfo,
  patchInfo,
};
