const express = require("express");
router = express.Router();

const userRouter = require("./userRouter");
const authenticationRouter = require("./authenticationRouter");
const movieRouter = require('./movieRouter');
const reviewRouter = require("./reviewRouter");

const authMiddleware = require("../middleware/auth");

// router.use("/", (req, res) => {
//   res.redirect("/login");
// });

router.use("/login", authenticationRouter);

router.use("/user", authMiddleware.verifyAuthentication, userRouter);

router.use("/movies", authMiddleware.verifyAuthentication, movieRouter);

router.use("/reviews", authMiddleware.verifyAuthentication, reviewRouter);

module.exports = router;
