const express = require("express");
const router = express.Router();

const {
  getReviews,
  postReview,
  deleteReview,
} = require("../controllers/reviewsControllers");

router.get("/", getReviews);
router.post("/", postReview);
router.delete("/:id", deleteReview);

module.exports = router;
