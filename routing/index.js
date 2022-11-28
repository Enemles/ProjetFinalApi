const express = require('express');
router = express.Router();
const userRouter = require('./userRouter');
const authenticationRouter = require('./authenticationRouter');
const movieRouter = require('./movieRouter');

//l'authentification se passe au get('/')
router.use('/login', authenticationRouter);

router.use('/user', userRouter);

// router.use("/movies", movieRouter);

module.exports = router;
