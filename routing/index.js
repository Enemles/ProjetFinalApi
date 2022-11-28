const express = require('express');
router = express.Router();
// const userRouter = require('./userRouter');
const authenticationRouter = require('./authenticationRouter');
// const movieRouter = require('./movieRouter');
const reviewRouter = require('./reviewRouter');

//l'authentification se passe au get('/')
router.use('/login', authenticationRouter);

// router.use("/users", userRouter);

// router.use("/movies", movieRouter);

router.use('/reviews', reviewRouter);

module.exports = router;
