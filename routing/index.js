const express = require('express');
const router = express.Router();
const userRouter = require('./userRouter');
const authenticationRouter = require('./authenticationRouter');
// const movieRouter = require('./movieRouter');
const reviewRouter = require('./reviewRouter');
const movieDbRouter = require('./movieDbRouter');

//l'authentification se passe au get('/')
router.use('/login', authenticationRouter);

router.use('/user', userRouter);

router.use('/movieDb', movieDbRouter);

// router.use("/movies", movieRouter);

router.use('/reviews', reviewRouter);

module.exports = router;
