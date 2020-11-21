const express = require("express");
const router = express.Router();

const {
  protectRoute,
  onlyAdmin,
  onlyManagers,
} = require("../controllers/authControllers");

const {
  getReviews,
  postReview,
  deleteReview,
  getReview,
} = require("../controllers/reviewsControllers");

router.get("/", getReviews);
router.get("/:id", getReview);
router.post("/", postReview);
router.delete("/:id", protectRoute, onlyAdmin, deleteReview);

module.exports = router;
