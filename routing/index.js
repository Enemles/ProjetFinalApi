const express = require('express');
router = express.Router();
const userRouter = require('./userRouter');
const authenticationRouter = require('./authenticationRouter');
// const movieRouter = require('./movieRouter');
// const movieDbRouter = require('./movieDbRouter');
const reviewRouter = require('./reviewRouter');

//l'authentification se passe au get('/')
router.use('/login', authenticationRouter);

router.use('/user', userRouter);

// router.use('/movieDb', movieDbRouter);

// router.use("/movies", movieRouter);

router.use('/review', reviewRouter);

module.exports = router;
