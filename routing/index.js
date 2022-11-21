const express = require("express");
const { router } = require("../router");
router = express.Router();
const userRouter = require("./userRouter");

//l'authentification se passe au get('/')
router.get("/users", userRouter);

router.get("/movies", movieRouter);

module.exports = router;
