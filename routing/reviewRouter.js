const express = require('express');
const reviewCtrl = require('../controller/reviewCtrl');
const router = express.Router();

router.get('/', reviewCtrl.getReviews);
// router.post('/', reviewCtrl.addReview);
router.delete('/reviewId', reviewCtrl.delReview);
router.get('/reviewId', reviewCtrl.getReviewById);
// router.post('/like/:id', reviewCtrl.Like);
// router.post('/dislike/:id', reviewCtrl.Dislike);

module.exports = router;
