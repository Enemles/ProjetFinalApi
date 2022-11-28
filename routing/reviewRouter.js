const express = require('express');
const router = express.Router();
const reviewCtrl = require('../controller/reviewCtrl');

// router.post('/:userId', reviewCtrl.createReview);
router.get('/', reviewCtrl.getReviews);

module.exports = router;
