const models = require('../models');
const userService = require("../services/user");
const cache = require("../caching/caching");

const jwt = require("jsonwebtoken");

const config = process.env;

module.exports = {
    verifyAdmin : async (req, res, next) => {
        const currentUser = cache.getCachedValue(currentUser);
        const admin = currentUser.role;
        if (admin != 1) {
            res.status(403).send("User has no permissions");
        }
        const token = currentUser.token;

        if (!token) {
            res.status(403).send("A token is required for authentication");
        }
        try {
            const decoded = jwt.verify(token, config.TOKEN_KEY);
            req.user = decoded;
        } catch (err) {
            res.status(401).send("Invalid Token");
        }
        next();
    }
}



