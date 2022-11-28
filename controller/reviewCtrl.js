// imports
const reviewService = require('../services/review');

module.exports = {
  getReviews: async (req, res) => {
    const listReviews = await reviewService.getReviews();
    res.json({ success: true, data: listReviews });
  },
  addReview: async (req, res) => {
    try {
      const { title, note, comment, moviename } = req.body;

      if (!(title && note && comment && moviename)) {
        res.status(400).send('All input are required');
      }

      const review = await reviewService.addReview( title, note, comment, moviename );

      res.status(201).json({
        success: "true",
        review
      });
    } catch (err) {
      console.log(err);
    }
  },
  delReview: async (req, res) => {
    const reviewId = req.params.reviewId;
    const data = await reviewService.delReview(reviewId);
    if (data) {
      res.json({ success: true, description: 'Review has been deleted' });
    }else{
      res.json({ success: false, description: 'Review doesn\'t exist' });
    }
  },
  getReviewById: async (req, res) => {
    const reviewId = req.params.reviewId;
    const data = await reviewService.getReviewById(reviewId);
    if (data) {
      res.json({ success: true, data });
    }else {
      res.json({ success: false, description: 'Review doesn\'t exist' });

    }
  },
  Like: async (req, res) => {
    const reviewId = req.params.reviewId;
    try {
      const review = await reviewService.addLikeOnReview(reviewId);
      res.json({ success: true, description: 'Like added' });
    } catch (error) {
      console.log(error)
    }
  },
  Dislike: async (req, res) => {
    const reviewId = req.params.reviewId;
    try {
      const review = await reviewService.deleteLikeOnReview(reviewId);
      res.json({ success: true, description: 'Dislike added' });
    } catch (error) {
      console.log(error)
    }
  },
};
