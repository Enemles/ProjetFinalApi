const express = require('express');
const movieDbCtrl = require('../controller/movieDbCtrl');
router = express.Router();

router.get('/toprated', /*cache*/ movieDbCtrl.getTopRated);

module.exports = router;
