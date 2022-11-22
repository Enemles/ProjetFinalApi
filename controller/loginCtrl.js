// imports
const models = require("../models");

// routes
module.exports = {
  register: function (req, res) {
    let email = req.body.email;
    let username = req.body.username;
    let password = req.body.password;

    if (email == null || username == null || password == null) {
      return res.status(400).json({ error: "missing parameters" });
    }

    models.user
      .findOne({
        attributes: ["email"],
        where: { email: email },
      })
      .then()
      .then()
      .catch();
  },
  login: function (req, res) {
    let username = req.body.username;
    let password = req.body.password;

    if (username == null || password == null) {
      return res.status(400).json({ error: "missing parameters" });
    }

    models.user
      .findOne({
        where: { email: email },
      })
      .then()
      .then()
      .catch();
  },
};
