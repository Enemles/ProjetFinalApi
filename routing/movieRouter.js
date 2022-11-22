const express = require("express");
const { router } = require("../router");
router = express.Router();
movieCtrl = require("../controller/movieCtrl");

router.get("/", movieCtrl.getMovies);
router.get("/:id", movieCtrl.getMovieById);

router.post("/:id", movieCtrl.addReview);

module.exports = router;
