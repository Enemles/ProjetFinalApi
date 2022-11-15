// Imports
const express = require('express');
const router = require('./router').router;

// Instantiate server
const app = express();

// Body Parser configuration
router.use(express.json());
router.use(express.text());
router.use(express.urlencoded({ extended: false }));

// Configure routes
app.get('/', function (req, res) {
  res.status(200).send('<h1>Nous rompishâmes</h1>');
});

// Error config
router.use((error, req, res, next) => {
  res
    .status(error.status || 500)
    .json({ success: false, message: error.message, errors: error.errors });
});

module.exports = app;
