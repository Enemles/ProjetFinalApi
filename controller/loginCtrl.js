// imports
const userService = require("../services/user");
const cache = require("../caching/caching");
const models = require('../models');


const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

// routes
module.exports = {
  register: async function (req, res) {
    try {
      const { username, email, firstname, lastname, password } = req.body;

      if (!(username && email && password && firstname && lastname)) {
        res.status(400).send("All input is required");
      }
      const oldUser = await userService.getUserById(username);

      if (!oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }

      encryptedPassword = await bcrypt.hash(password, 10);

      const user = await userService.addUser(
        username,
        email.toLowerCase(),
        encryptedPassword,
        firstname,
        lastname,
        2
      );

      // return new user
      res.status(201).json({
        response: 'User added successfully',
        username: user.username,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,

      });
    } catch (err) {
      console.log(err);
    }
  },
  login: async function (req, res) {
    try {
      // Get user input
      const { username, password } = req.body;

      // Validate user input
      if (!(username && password)) {
        res.status(400).send("All input is required");
      }
      // Validate if user exist in our database
      const user = await models.user.findOne({ where: { username: username } });

      if (user && (await bcrypt.compare(password, user.password))) {
        // Create token
        const token = jwt.sign(
          { username: user.username },
          `${process.env.SECRET}`,
          {
            expiresIn: "2h",
          }
        );

        // save user token
        user.token = token;

        //caching the username to know it throught the app
        await cache.cachingValue("currentUser", 900, user.username);

        // user
        res.status(200).json({ token: token });
      }
      res.status(400).send("Invalid Credentials");
    } catch (err) {
      console.log(err);
    }
  },
};
