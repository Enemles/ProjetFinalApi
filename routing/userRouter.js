const apicache = require('apicache');
const express = require("express");
const userCtrl = require("../controller/userCtrl");
const router = express.Router();
const authMiddleware = require("../middleware/auth");

let cache = apicache.middleware

router.get("/", cache('5 minutes'), userCtrl.getCurrentUser);
router.put("/", userCtrl.modifyUser);
router.get("/all", userCtrl.getUsers);
router.get("/:username", userCtrl.getUserByUsername);
router.delete("/:username", authMiddleware.verifyAdmin, userCtrl.delUser);

module.exports = router;
