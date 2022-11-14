const express = require('express');
const app = express();
const OpenApiValidator = require('express-openapi-validator');

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

const book = require('./controller/book');

// app.use(
//   OpenApiValidator.middleware({
//     apiSpec: './open-api.yaml',
//     validateRequests: true,
//   })
// );

app.use('/books', book);

app.use((error, req, res, next) => {
  res
    .status(error.status || 500)
    .json({ success: false, message: error.message, errors: error.errors });
});

module.exports = app;
