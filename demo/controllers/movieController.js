/* Modulo propio */
const data = require("../database/models");
const movies = data.Movie; /* Alias del modelo */

const movieController = {
    findAll: (req, res) => {
        movies.findAll()
        .then(function (result) {
            return res.render("movies", {listaPeliculas: result});
        }).catch(function (err){
            console.log(err);
        });
    }
};

module.exports = movieController;