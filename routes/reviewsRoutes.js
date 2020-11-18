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
} = require("../controllers/reviewsControllers");

router.get("/", getReviews);
router.post("/", postReview);
router.delete("/:id", protectRoute, onlyAdmin, deleteReview);

module.exports = router;
