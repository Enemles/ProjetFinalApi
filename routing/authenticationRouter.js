const express = require("express");
loginCtrl = require("../controller/loginCtrl");
const cookies = require("cookie-parser");
router = express.Router();

router.use(cookies());

router.post("/", loginCtrl.login);
router.post("/register", loginCtrl.register);

module.exports = router;
