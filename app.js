// Imports
const express = require("express");
const OpenApiValidator = require("express-openapi-validator");
const router = require("./routing/index");
const cookie = require("cookie-parser");

// Instantiate server
const app = express();
app.use(cookie());
// Body Parser configuration
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

app.use(
  OpenApiValidator.middleware({
    apiSpec: './open-api.yaml',
    validateRequests: true,
  })
);

app.use("/", router);

// Error config
app.use((error, req, res, next) => {
  res
    .status(error.status || 500)
    .json({ success: false, message: error.message, errors: error.errors });
});

module.exports = app;
