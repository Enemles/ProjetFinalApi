// imports
const reviewService = require('../services/review');

exports.getReviews = async (req, res) => {
  const listReviews = await reviewService.getReview();
  res.json({ success: true, data: listReviews });
};

exports.getReviewById = async (req, res) => {};
