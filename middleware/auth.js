

const jwt = require("jsonwebtoken");

const config = process.env;

module.exports = {
  verifyAdmin: async (req, res, next) => {
    const { cookies } = req;
    if (cookies.userRole !== 1) {
      res.status(403).send("User has no permissions");
    }
    next();
  },

  verifyAuthentication: async (req, res, next) => {
    const { cookies } = req;
    if ("token" in cookies) {
      try {
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;
      } catch (err) {
        res.status(401);
      }
      next();
    }
    res.status(401)
  },
};
