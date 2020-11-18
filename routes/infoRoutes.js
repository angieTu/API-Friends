const express = require("express");
const router = express.Router();

const {
  protectRoute,
  onlyAdmin,
  onlyManagers,
} = require("../controllers/authControllers");

const { getInfo, patchInfo } = require("../controllers/infoControllers");

router.get("/", getInfo);
router.patch("/", protectRoute, onlyAdmin, patchInfo);

module.exports = router;
