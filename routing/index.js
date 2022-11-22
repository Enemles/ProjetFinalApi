const express = require("express");
router = express.Router();
const userRouter = require("./userRouter");

//l'authentification se passe au get('/')
router.get("/users", userRouter);

router.get("/movies", movieRouter);

module.exports = router;
