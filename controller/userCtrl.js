const userService = require("../services/user.js");
const reviewService = require("../services/review");
const cache = require("../caching/caching");

module.exports = {
  getUsers: async (req, res) => {
    const listUsers = await userService.getUsers();
    res.json({ success: true, data: listUsers });
  },
  getUserById: async (req, res) => {
    const username = parseInt(req.params.id);
    const user = await userService.getUserById(username);
    const reviews = reviewService.getReviewByUsername(username);
    if (user && user.lenngth === 1) {
      res.json({ success: true, header: user, data: reviews });
    }
  },

  getCurrentUser: async (req, res) => {
    const { cookies } = req;
    const currentUser = cookies.username;
    if (!currentUser) {
      throw new error("Problème de mise en cache de l'utilisateur");
    }
    const user = userService.getUserById(currentUser);
    const reviews = reviewService.getReviewByUsername(currentUser);
    if (user && user.lenngth === 1) {
      res.json({ success: true, header: user, data: reviews });
    }
  },

  delUser: async (req, res) => {
    const username = parseInt(req.params.id);
    await userService.delUser(username);
    const user = await userService.getUserById(username);
    if (!user) {
      res.json({ success: true, description: "User has been deleted" });
    }
  },
};
