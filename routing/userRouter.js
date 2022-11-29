const express = require("express");
const userCtrl = require("../controller/userCtrl");
const router = express.Router();
const authMiddleware = require("../middleware/auth");

router.get("/", userCtrl.getCurrentUser());
router.get("/all", userCtrl.getUsers());
router.get("/:userId", userCtrl.getUserByUsername());
router.delete("/:user", authMiddleware.verifyAdmin(), userCtrl.delUser());

module.exports = router;
