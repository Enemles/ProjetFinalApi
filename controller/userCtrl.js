const userService = require("../services/user.js");
const reviewService = require("../services/review");

module.exports = {
  getUsers: async (req, res) => {
    const listUsers = await userService.getUsers();
    res.json({ success: true, data: listUsers });
  },
  getUserByUsername: async (req, res) => {
    const username = req.params.username;
    try {
    const user = await userService.getUserByUsername(username);
    const reviews = await reviewService.getReviewByUsername(username);
      res.json({ success: true, header: user, data: reviews });
    } catch (error) {
      console.log(error)
    }
  },

  getCurrentUser: async (req, res) => {
    const { cookies } = req;
    const currentUser = cookies.username;
    if (!currentUser) {
      throw new error("Problème de mise en cache de l'utilisateur");
    }
    try {
      const reviews = await reviewService.getReviewByUsername(currentUser);
      const user = await userService.getUserByUsername(currentUser);    
      res.json({ success: true, header: user, data: reviews });
    } catch (error) {
      console.log(error);
    }
  },

  delUser: async (req, res) => {
    const username = req.params.username;
    await userService.delUser(username);
    const user = await userService.getUserByUsername(username);
    if (!user) {
      res.json({ success: true, description: "User has been deleted" });
    }
  },

  modifyUser: async (req, res) => {
    const { cookies } = req;
    const currentUser = cookies.username;
    const { firstname, email, lastname } = req.body;
    const infoJson = { firstname, email, lastname };
    const info = JSON.stringify(infoJson);
    console.log(infoJson);
    try {
      const user = await userService.modifyUser(currentUser, infoJson);
      res.json({ success: true, header: user });
    } catch (error) {
      console.log(error);
    }
  }
};
