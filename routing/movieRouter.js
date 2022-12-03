const express = require("express");
router = express.Router();
movieCtrl = require("../controller/movieCtrl");
authMidd = require("../middleware/auth");
const cache = require("apicache").middleware;

router.get("/", movieCtrl.getMovies);
router.get(
  "/toprated",
  authMidd.verifyAdmin,
  cache("20 minutes"),
  movieCtrl.getTopRated
);

module.exports = router;
