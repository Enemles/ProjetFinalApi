const express = require("express");
router = express.Router();
movieCtrl = require("../controller/movieCtrl");
authMidd = require("../middleware/auth");

router.get("/",  movieCtrl.getMovies);
router.get("/toprated", authMidd.verifyAdmin, movieCtrl.getTopRated);

module.exports = router;
