

const jwt = require("jsonwebtoken");

const config = process.env;

module.exports = {
  verifyAdmin: async (req, res, next) => {
    const { cookies } = req;
    if (cookies.userRole != 1) {
      res.status(403).json({success: false, message : "User has no permissions"});
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
        res.status(401).json({success: false, message : "Unauthorized"});
      }
      next();
    }
    res.status(401).json({success: false, message : "Unauthorized"});
  },
};
