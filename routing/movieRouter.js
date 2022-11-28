const express = require("express");
router = express.Router();
movieCtrl = require("../controller/movieCtrl");

router.get("/", movieCtrl.getMovies);
router.get("/toprated", movieCtrl.getTopRated);

module.exports = router;
