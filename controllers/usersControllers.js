const User = require("../models/users");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users.length) {
      res.status(500).json({
        status: "fail",
        message: "Los usuarios no se pudieron encontrar",
      });
    } else {
      res.status(201).json({
        status: "success",
        data: users,
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "Los usuarios no se pudieron encontrar",
    });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(201).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "No se pudo encontrar el usuario",
    });
  }
};

const postUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      err: err,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(200).json({
      status: "success",
      message: "Borrado con éxito",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "No se pudo borrar el usuario",
    });
  }
};

const putUser = async (req, res) => {
  try {
    const user = await User.replaceOne({ _id: req.params.id }, req.body);
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

const patchUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

module.exports = {
  getUser,
  getUsers,
  postUser,
  patchUser,
  putUser,
  deleteUser,
};
