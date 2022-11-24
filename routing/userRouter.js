const express = require("express");
const userCtrl = require("../controller/userCtrl");
const { review } = require("../models");
const { router } = require("../router");
router = express.Router();
userCtrl = require("../controller/userCtrl");

router.get("/", userCtrl.getUsers);
router.get("/:userId", userCtrl.getUserById);
router.get("/:userId/:reviewId", userCtrl.getReviewOnUserById);

router.post("/:userId/:reviewId/like", userCtrl.likeAReview);
router.post("/:userId/:reviewId/dislike", userCtrl.dislikeAReview);

module.exports = router;
