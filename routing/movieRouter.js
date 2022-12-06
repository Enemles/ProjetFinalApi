const apicache = require('apicache');
const express = require("express");
router = express.Router();
movieCtrl = require("../controller/movieCtrl");
authMidd = require("../middleware/auth");


let cache = apicache.middleware;

router.get("/", authMidd.verifyAuthentication, movieCtrl.getMovies);
router.get("/toprated", authMidd.verifyAuthentication, cache("20 minutes"), movieCtrl.getTopRated);

module.exports = router;
