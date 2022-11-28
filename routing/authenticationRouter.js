const express = require("express");
router = express.Router();
loginCtrl = require("../controller/loginCtrl");

router.post("/register", loginCtrl.register);
router.post("/", loginCtrl.login);

module.exports = router;
