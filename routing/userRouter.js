const express = require("express");
const router = express.Router();
const userCtrl = require("../controller/userCtrl");
const authMiddleware = require("../middleware/auth");

router.get("/", userCtrl.getCurrentUser());
router.get("/all", userCtrl.getUsers());
router.get("/:userId", userCtrl.getUserByUsername());
router.delete("/:user", authMiddleware.verifyAdmin(), userCtrl.delUser());

module.exports = router;
