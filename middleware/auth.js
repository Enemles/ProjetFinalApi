const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  verifyAdmin: async (req, res, next) => {
    const { cookies } = req;
    if (cookies.userRole != 1) {
      return res.status(403).json({success: false, message : "User has no permissions"});
    }
    next();
  },

  verifyAuthentication: async (req, res, next) => {
    const { cookies } = req;
    const token = cookies.token;
    if ("token" in cookies) {
      try {
        const decoded = jwt.verify(token, `${process.env.SECRET}`);
        req.user = decoded;
      } catch (err) {
        console.log(err);
        return res.status(401).json({success: false, message : "Unauthorized"});
      }
      next();
    }else{
      return res.status(401).json({success: false, message : "Unauthorized due to no token"});
    }
  },
};
