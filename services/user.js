const db = require('../models');

//ressort tous les utilisateurs du site
exports.getUsers = () => {
  return db.user.findAll();
};

//recherche un utilisateur par son id afin d'afficher son profile
exports.getUserByUsername = (username) => {
  return db.user.findByPk(username);
};

//ajoute un utilisateur à la base, appelé lorsqu'un nouvel utilisateur se register
exports.addUser = (username, email, password, firstname, lastname, roleId) => {
  return db.user.create({ username, email, password, firstname, lastname , roleId});
};

//supprime un utilisateur de la base, seul un admin y a accès
exports.delUser = (username) => {
  return db.user.destroy({
    where: {
      username,
    },
  });
};
