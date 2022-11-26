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
      { user_id: user.userName, email },
      `${process.env.SECRET}`,
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
  login: async function (req, res) {
    try {
      // Get user input
      const { userName, password } = req.body;
  
      // Validate user input
      if (!(userName && password)) {
        res.status(400).send("All input is required");
      }
      // Validate if user exist in our database
      const user = await models.user.findOne({ email });
  
      if (user && (await bcrypt.compare(password, user.password))) {
        // Create token
        const token = jwt.sign(
          { user_id: user.userName, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
  
        // save user token
        user.token = token;
  
        // user
        res.status(200).json(user);
      }
      res.status(400).send("Invalid Credentials");
    } catch (err) {
      console.log(err);
    }
  },
};
