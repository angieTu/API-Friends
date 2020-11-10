const express = require("express");
const router = express.Router();

const { getInfo, patchInfo } = require("../controllers/infoControllers");

router.get("/", getInfo);
router.patch("/", patchInfo);

module.exports = router;
