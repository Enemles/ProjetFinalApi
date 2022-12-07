const apicache = require('apicache');
const express = require("express");
router = express.Router();
movieCtrl = require("../controller/movieCtrl");


let cache = apicache.middleware;

router.get("/", movieCtrl.getMovies);
router.get("/toprated", cache("20 minutes"), movieCtrl.getTopRated);

module.exports = router;
