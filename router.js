// imports
let express = require('express');
let userCtrl = require('./controller/userCtrl');
let reviewCtrl = require('./controller/reviewCtrl');

// router
exports.router = (function () {
  let router = express.Router();

  // user routes
  router.route('/register').get(userCtrl.register);
  router.route('/login').post(userCtrl.login);

  //review  routes

  return router;
})();
