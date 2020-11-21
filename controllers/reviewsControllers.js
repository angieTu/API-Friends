const Review = require("../models/review");

const getReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id).populate("review");
    res.status(201).json({
      status: "success",
      data: review,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "Review no se puede encontrar",
    });
  }
};

const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().populate("review");
    res.status(201).json({
      status: "success",
      data: reviews,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "Reviews no encontradas",
    });
  }
};

const postReview = async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.status(201).json({
      status: "success",
      data: review,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      err: err,
    });
  }
};

const deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    res.status(201).json({
      status: "success",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "Review no encontrada",
    });
  }
};

module.exports = { getReviews, postReview, deleteReview, getReview };
