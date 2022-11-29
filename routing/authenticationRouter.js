const express = require("express");
router = express.Router();
loginCtrl = require("../controller/loginCtrl");
const cookies = require("cookie-parser");
const { router } = require("../app");

router.use(cookies());

router.post("/register", loginCtrl.register);
router.post("/", loginCtrl.login);

module.exports = router;
