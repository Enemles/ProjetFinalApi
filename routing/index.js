const express = require("express");
router = express.Router();
const userRouter = require("./userRouter");
const authenticationRouter = require("./authenticationRouter");
const movieRouter = require("./movieRouter");



//l'authentification se passe au get('/')
router.get('/', authenticationRouter)

router.get("/users", userRouter);

router.get("/movies", movieRouter);

module.exports = router;
