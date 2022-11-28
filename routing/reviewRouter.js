const express = require('express');
const reviewCtrl = require('../controller/reviewCtrl');
const router = express.Router();

router.get('/', reviewCtrl.getReviews);
router.post('/', reviewCtrl.addReview);
router.delete('/:reviewId', reviewCtrl.delReview);
router.get('/:reviewId', reviewCtrl.getReviewById);
router.put('/:reviewId/like', reviewCtrl.Like);
router.put('/:reviewId/dislike', reviewCtrl.Dislike);

module.exports = router;
