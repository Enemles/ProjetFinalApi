// Imports
const express = require('express');
const OpenApiValidator = require('express-openapi-validator');


// Instantiate server
const app = express();

// Body Parser configuration
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

// app.use(
//   OpenApiValidator.middleware({
//     apiSpec: './open-api.yaml',
//     validateRequests: true,
//   })
// );

// Configure routes
app.get('/', function (req, res) {
  res.status(200).send('<h1>Nous rompishâmes</h1>');
});

// Error config
app.use((error, req, res, next) => {
  res
    .status(error.status || 500)
    .json({ success: false, message: error.message, errors: error.errors });
});

module.exports = app;
