// imports
const reviewService = require('../services/review');
const models = require('../models');

module.exports = {
  getReviews: async (req, res) => {
    const listReviews = await reviewService.getReview();
    res.json({ success: true, data: listReviews });
  },
  addReview: async (req, res) => {
    try {
      const { title, note, comment, moviename } = req.body;

      if (!(title && note && comment && moviename)) {
        res.status(400).send('All input are required');
      }

      const review = await models.review.create({
        title,
        note,
        comment,
        moviename,
      });

      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
  },
  delReview: async (req, res) => {
    const reviewId = parseInt(req.params.id);
    await reviewService.delReview(reviewId);
    const rev = reviewService.getReviewByUsername(reviewId);
    if (!rev) {
      res.json({ success: true, description: 'User has been deleted' });
    }
  },
  getReviewById: async (req, res) => {
    const reviewId = parseInt(req.params.id);
    const reviewService = await userService.getUserById(reviewId);
    const rev = reviewService.getReviewByUsername(reviewId);
    if (!rev) {
      res.json({ success: true, description: 'User has been deleted' });
    }
  },
  Like: async (req, res) => {
    const like = req.body;

    const review = await models.review.update({
      like: +1,
    });
  },
  Dislike: async (req, res) => {
    const dislike = req.body;

    const review = await models.review.update({
      like: -1,
    });
  },
};
