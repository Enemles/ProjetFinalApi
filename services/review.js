const db = require('../models');
const { Sequelize } = require('sequelize');

// get totutes les reviews
exports.getReviews = () => {
  return db.review.findAll();
};

//affiche toutes les reviews possédant le même username,
//utilisé lors de l'affichage d'un profile
exports.getReviewById = (reviewId) => {
  return db.review.findAll({
    where: {
      reviewId,
    },
  });
};

exports.getReviewByUsername = (username) => {
  return db.review.findAll({
    where: {
      username,
    },
  });
};

//met à jour le nombre de like de la review en bdd
exports.addLikeOnReview = (reviewId) => {
  return db.review.increment('like', { by: 1, where: { reviewId: reviewId }});
};

exports.deleteLikeOnReview = (reviewId) => {
  return db.review.decrement('like', { by: 1, where: { reviewId: reviewId }});
};

//ajoute une review en bdd, le controller doit l'assigner à une reviewId
//et en deuxième temps cet id à un utilisateur
exports.addReview = (title, note, comment, moviename) => {
  return db.review.create({ title, note, comment, moviename });
};

//supprime une review, disponible que sur le profile
//de l'utilisateur courant ou par un admin
exports.delReview = (reviewId) => {
  return db.review.destroy({
    where: {
      reviewId,
    },
  });
};
