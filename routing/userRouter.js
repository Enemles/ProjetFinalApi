const express = require("express");
const userCtrl = require("../controller/userCtrl");
const { review } = require("../models");
const { router } = require("../router");
router = express.Router();
userCtrl = require("../controller/userCtrl");

router.get("/", userCtrl.getUsers);
router.get("/:id", userCtrl.getUserById);
router.get("/:id/:reviewId", userCtrl.getReviewOnUserById);

router.post("/:id/:reviewId/like", userCtrl.likeAReview);
router.post("/:id/:reviewId/dislike", userCtrl.dislikeAReview);
router.post("/:id", userCtrl.addReviewOnUser);

module.exports = router;
