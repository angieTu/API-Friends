const express = require("express");
const router = express.Router();

const {
  signUp,
  login,
  protectRoute,
  onlyAdmin,
} = require("../controllers/authControllers");
const {
  getUser,
  getUsers,
  deleteUser,
  postUser,
  patchUser,
  putUser,
} = require("../controllers/usersControllers");

router.post("/login", login);
router.post("/signup", signUp);
router.get("/", protectRoute, onlyAdmin, getUsers);
router.get("/:id", protectRoute, onlyAdmin, getUser);
router.delete("/:id", protectRoute, onlyAdmin, deleteUser);
router.post("/", protectRoute, onlyAdmin, postUser);
router.patch("/:id", protectRoute, onlyAdmin, patchUser);
router.put("/:id", protectRoute, onlyAdmin, putUser);

module.exports = router;
