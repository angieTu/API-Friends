const express = require("express");
const router = express.Router();

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
router.delete("/:id", deleteEpisode);
router.post("/", postEpisode);
router.patch("/:id", patchEpisode);
router.put("/:id", putEpisode);

module.exports = router;
