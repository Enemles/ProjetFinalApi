// imports
const models = require("../models");

// routes
module.exports = {
  register: async function (req, res) {
    try {
    const { userName, email, firstName, lastName, password } = req.body;

    if (!(userName && email && password && firstName && lastName)) {
      res.status(400).send("All input is required");
    }
    const oldUser = await models.user.findOne({ userName });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    encryptedPassword = await bcrypt.hash(password, 10);

    const user = await models.user.create({
      firstName,
      lastName,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    // Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    // save user token
    user.token = token;

    // return new user
    res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
  },
  login: function (req, res) {
    let userName = req.body.userName;
    let password = req.body.password;

    if (userName == null || password == null) {
      return res.status(400).json({ error: "missing parameters" });
    }

    models.user
      .findOne({
        where: { email: email },
      })
      .then()
      .catch();
  },
};
