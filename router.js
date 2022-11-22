// imports
let express = require('express');
let userCtrl = require('./controller/loginCtrl');
let reviewCtrl = require('./controller/reviewCtrl');

// router
exports.router = (function () {
  let router = express.Router();

  // user routes
  router.route('/user/register/').get(userCtrl.register);
  router.route('/user/login/').post(userCtrl.login);

  //review  routes

  return router;
})();
