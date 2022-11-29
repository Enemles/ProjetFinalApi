const express = require("express");
const reviewCtrl = require("../controller/reviewCtrl");
const router = express.Router();
const authMiddleware = require("../middleware/auth");

router.get("/", reviewCtrl.getReviews);
router.post("/", reviewCtrl.addReview);
router.delete("/reviewId", reviewCtrl.delReview);
router.get("/reviewId", authMiddleware.verifyAdmin, reviewCtrl.getReviewById);
router.post("/like/:id", reviewCtrl.Like);
router.post("/dislike/:id", reviewCtrl.Dislike);

module.exports = router;
