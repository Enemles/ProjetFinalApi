// imports
let express = require('express');
let userCtrl = require('./routes/userCtrl');
let reviewCtrl = require('./routes/reviewCtrl');

// router
exports.router = (function () {
  let router = express.Router();

  // user routes
  router.route('/user/register/').get(userCtrl.register);
  router.route('/user/login/').post(userCtrl.login);

  //review  routes

  return router;
})();
