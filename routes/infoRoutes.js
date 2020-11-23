const express = require("express");
const router = express.Router();

const { protectRoute, onlyAdmin } = require("../controllers/authControllers");

const {
  getInfo,
  patchInfo,
  postInfo,
  deleteInfo,
} = require("../controllers/infoControllers");

router.get("/", getInfo);
router.patch("/:id", protectRoute, onlyAdmin, patchInfo);
router.post("/", protectRoute, onlyAdmin, postInfo);
router.delete("/:id", protectRoute, onlyAdmin, deleteInfo);

module.exports = router;
