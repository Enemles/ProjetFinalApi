const userService = require('../services/user.js');
const reviewService = require('../services/review');

module.exports = {
  getUsers: async (req, res) => {
    const listUsers = await userService.getUsers();
    const user = listUsers.map((user) => {
      delete user.dataValues.password;
      return user;
    });
    res.status(200).json({ success: true, data: user });
  },
  getUserByUsername: async (req, res) => {
    const username = req.params.username;
    try {
      const user = await userService.getUserByUsername(username);
      const reviews = await reviewService.getReviewByUsername(username);
      res.status(200).json({ success: true, data: user, reviews: reviews });
    } catch (error) {
      console.log(error);
      res.status(404).json({ success: false, message: "User not found" });
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
      res.status(200).json({ success: true, data: user, reviews: reviews });
    } catch (error) {
      console.log(error);
      res.status(404).json({ success: false, message: "User not logged" });

    }
  },

  delUser: async (req, res) => {
    const username = req.params.username;
    await userService.delUser(username);
    const user = await userService.getUserByUsername(username);
    if (!user) {
      res.status(200).json({ success: true, data: 'User has been deleted' });
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
      res.status(200).json({ success: true, data : user });
    } catch (error) {
      console.log(error);
      res.status(404).json({ success: false, message : "User not logged in" });
    }
  },
};
