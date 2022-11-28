// imports
const models = require('../models');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

// routes
module.exports = {
  register: async function (req, res) {
    try {
      const { username, email, firstname, lastname, password } = req.body;

      if (!(username && email && password && firstname && lastname)) {
        res.status(400).send('All input is required');
      }
      const oldUser = await models.user.findOne({
        where: { username: username },
      });

      if (oldUser) {
        return res.status(409).send('User Already Exist. Please Login');
      }

      console.log(username);

      encryptedPassword = await bcrypt.hash(password, 10);

      const user = await models.user.create({
        username,
        firstname,
        lastname,
        email: email.toLowerCase(),
        password: encryptedPassword,
      });

      // return new user
      res.status(201).json(user);
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
        res.status(400).send('All input is required');
      }
      // Validate if user exist in our database
      const user = await models.user.findOne({ where: { username: username } });

      if (user && (await bcrypt.compare(password, user.password))) {
        // Create token
        const token = jwt.sign(
          {
            username: user.username,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
          },
          `${process.env.SECRET}`,
          {
            expiresIn: '2h',
          }
        );

        // save user token
        user.token = token;

        // user
        res.status(200).json({ token: token });
      }
      res.status(400).send('Invalid Credentials');
    } catch (err) {
      console.log(err);
    }
  },
};
