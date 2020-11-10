const express = require("express");
const router = express.Router();

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
router.delete("/:id", deleteCharacter);
router.post("/", postCharacter);
router.patch("/:id", patchCharacter);
router.put("/:id", putCharacter);

module.exports = router;
