const express = require("express");
const router = express.Router();

const {
  protectRoute,
  onlyAdmin,
  onlyManagers,
} = require("../controllers/authControllers");

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
router.delete("/:id", protectRoute, onlyAdmin, deleteSeason);
router.post("/", protectRoute, onlyAdmin, postSeason);
router.patch("/:id", protectRoute, onlyAdmin, patchSeason);
router.put("/:id", protectRoute, onlyAdmin, putSeason);

module.exports = router;
