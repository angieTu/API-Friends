const express = require("express");
const router = express.Router();

const {
  signUp,
  login,
  protectRoute,
  onlyAdmin,
  onlyManagers,
} = require("../controllers/authControllers");

const {
  getCharacter,
  getCharacters,
  deleteCharacter,
  postCharacter,
  putCharacter,
  patchCharacter,
} = require("../controllers/charactersControllers");

router.get("/", getCharacters);
router.get("/:id", getCharacter);
router.delete("/:id", protectRoute, onlyAdmin, deleteCharacter);
router.post("/", protectRoute, onlyAdmin, onlyManagers, postCharacter);
router.patch("/:id", protectRoute, onlyManagers, onlyAdmin, patchCharacter);
router.put("/:id", protectRoute, onlyManagers, onlyAdmin, putCharacter);

module.exports = router;
