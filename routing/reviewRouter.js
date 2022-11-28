const express = require('express');
const router = express.Router();
const reviewCtrl = require('../controller/reviewCtrl');

// router.post('/:username', reviewCtrl.createReview);
router.get('/', reviewCtrl.getReviews);
router.get('/', reviewCtrl.getReviewById);

module.exports = router;
