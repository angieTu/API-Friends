const express = require("express");
const router = express.Router();

const {
  protectRoute,
  onlyAdmin,
  onlyManagers,
} = require("../controllers/authControllers");

const {
  getEpisode,
  getEpisodes,
  deleteEpisode,
  postEpisode,
  putEpisode,
  patchEpisode,
} = require("../controllers/episodesControllers");

router.get("/", getEpisodes);
router.get("/:id", getEpisode);
router.delete("/:id", protectRoute, onlyAdmin, deleteEpisode);
router.post("/", protectRoute, onlyAdmin, postEpisode);
router.patch("/:id", protectRoute, onlyAdmin, onlyManagers, patchEpisode);
router.put("/:id", protectRoute, onlyAdmin, onlyManagers, putEpisode);

module.exports = router;
