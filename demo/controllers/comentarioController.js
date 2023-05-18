/* Modulo propio */
const data = require("../database/models");
const comentarios = data.Comentario; /* Alias del modelo */

const comentarioController = {//lo veo maniana
    findAll: (req, res) => {
        movies.findAll()
        .then(function (result) {
            return res.render("comentarios", {listaPeliculas: result});
        }).catch(function (err){
            console.log(err);
        });
    }
};

module.exports = comentarioController;