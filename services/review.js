const db = require('../models');

// get all reviews
exports.getReview = () => {
  return db.review.findAll();
};

//affiche toutes les reviews possédant le même username,
//utilisé lors de l'affichage d'un profile
exports.getReviewByUsername = (username) => {
  return db.review.findAll({
    where: {
      username,
    },
  });
};

//met à jour le nombre de like de la review en bdd
exports.updateLikesOnReview = (id, nbLike) => {
  return db.review.update(
    { like: nbLike },
    {
      where: {
        id,
      },
    }
  );
};

//ajoute une review en bdd, le controller doit l'assigner à une reviewId
//et en deuxième temps cet id à un utilisateur
exports.addReview = (title, note, comment, moviename) => {
  return db.review.create({ title, note, comment, moviename });
};

//supprime une review, disponible que sur le profile
//de l'utilisateur courant ou par un admin
exports.delReview = (id) => {
  return db.review.destroy({
    where: {
      id,
    },
  });
};
