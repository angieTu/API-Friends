const express = require("express");
const router = express.Router();

const {
  getSeason,
  getSeasons,
  deleteSeason,
  postSeason,
  putSeason,
  patchSeason,
} = require("../controllers/seasonsControllers");

router.get("/", getSeasons);
router.get("/:id", getSeason);
router.delete("/:id", deleteSeason);
router.post("/", postSeason);
router.patch("/:id", patchSeason);
router.put("/:id", putSeason);

module.exports = router;
