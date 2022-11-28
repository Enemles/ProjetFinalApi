const express = require('express');
const userCtrl = require('../controller/userCtrl');
router = express.Router();

router.get("/", userCtrl.getUsers);
// router.get('/:userId/:reviewId', userCtrl.getReviewOnUserById);

// router.post("/:userId/:reviewId/like", userCtrl.likeAReview);
// router.post("/:userId/:reviewId/dislike", userCtrl.dislikeAReview);

module.exports = router;
