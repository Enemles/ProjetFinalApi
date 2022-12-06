// imports
const reviewService = require("../services/review");
const movieService = require("../services/movie");
const models = require("../models");

module.exports = {
  getReviews: async (req, res) => {
    const listReviews = await reviewService.getReviews();
    res.status(200).json({ success: true, data: listReviews });
  },
  addReview: async (req, res) => {
    try {
      const { cookies } = req;
      const currentUser = cookies.username;
      const { reviewtitle, rating, comment, moviename } = req.body;
      const ratingString = rating.toString();

      if (!(reviewtitle && ratingString && comment && moviename)) {
        res.status(400).json({
          success: false,
          message : "All input are required"
        });
      }
      if (!movieService.getMovieByMoviename(moviename)) {
        movieService.addMovie(moviename);
      }

      const review = await reviewService.addReview(currentUser, reviewtitle, rating, comment, moviename );

      res.status(201).json({success: "true", data: review});
    } catch (err) {
      console.log(err);
    }
  },
  delReview: async (req, res) => {
    const reviewId = req.params.reviewId;
    const data = await reviewService.delReview(reviewId);

    if (data) {
      res.status(200).json({ success: true, data: 'Review has been deleted' });
    }else{
      res.status(404).json({ success: false, message: 'Review doesn\'t exist' });
    }
  },
  getReviewById: async (req, res) => {
    const reviewId = req.params.reviewId;
    const data = await reviewService.getReviewById(reviewId);

    if (data) {
      res.status(200).json({ success: true, data : data });
    }else {
      res.status(404).json({ success: false, message: 'Review doesn\'t exist' });

    }
  },
  Like: async (req, res) => {
    const reviewId = req.params.reviewId;

    try {
      const review = await reviewService.addLikeOnReview(reviewId);
      res.status(201).json({ success: true, description: 'Like added' });
    } catch (error) {
      res.status(404).json({ success: false, message: 'Review not found' });
      console.log(error)
    }
  },
  Dislike: async (req, res) => {
    const reviewId = req.params.reviewId;

    try {
      const review = await reviewService.deleteLikeOnReview(reviewId);
      res.status(201).json({ success: true, description: 'Dislike added' });
    } catch (error) {
      res.status(404).json({ success: false, message: 'Review not found' });
      console.log(error)
    }
  },
};
