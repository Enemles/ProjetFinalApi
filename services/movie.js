const db = require("../models");

//affiche tous les films ayant une review sur le site
exports.getMovies = () => {
  return db.movie.findAll();
};

//méthode appelé lors de la création d'une review
//sur un film inconnu en base de donnée
exports.addMovie = (moviename) => {
  return db.movie.create({ moviename });
};
