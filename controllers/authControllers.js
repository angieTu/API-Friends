const User = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signUp = async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  });
  res.status(201).json({
    status: "success",
    data: {
      user: newUser,
    },
  });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).json({
      status: "fail",
      message: "Contraseña o usuario inválido",
    });
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return res.status(400).json({
      status: "fail",
      data: "Usuario no encontrado",
    });
  }
  let passwordDB = user.password;

  const passwordCheck = await bcrypt.compare(password, passwordDB);

  if (passwordCheck) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES,
      }
    );
    res.status(200).json({
      status: "success",
      data: token,
    });
  } else {
    res.status(400).json({
      status: "fail",
      message: "Password incorrecto",
    });
  }
};

const protectRoute = async (req, res, next) => {
  let token = "";

  if (!req.headers.authorization) {
    res.status(401).json({
      status: "fail",
      message: "Token inválido",
    });
  } else {
    token = req.headers.authorization.split(" ")[1];
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      res.status(401).json({
        status: "fail",
        message: "Token inválido",
      });
    }

    let user = await User.findOne({ _id: decoded.id }).select("+role");
    req.user = user;
    next();
  });
};

const onlyAdmin = (req, res, next) => {
  if (!req.user.role || req.user.role !== "admin") {
    res.status(401).json({
      status: "fail",
      message: "No tiene autorización",
    });
  }
  next();
};

const onlyManagers = (req, res, next) => {
  if (!req.user.role || req.user.role !== "manager") {
    res.status(401).json({
      status: "fail",
      message: "No tiene autorización",
    });
  }
  next();
};

module.exports = {
  login,
  signUp,
  onlyAdmin,
  protectRoute,
  onlyManagers,
};
