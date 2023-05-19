/* Modulo propio */
//const data = require("../database/models");
const db = require('../database/models')//requiero todos los modelos
const commentarios = db.Comentario; /* Alias del modelo */
let op = db.Sequelize.Op //para usar el ol de Op

const comentarioController = {
    findAll: (req, res) => {

        commentarios.findAll() //doble m porque ya hay la variable comentarios en una vista
        .then(function (result) {//va a buscar a mi deb todos los registros y lo guardav en result
            return res.render("comentarios", {comentarios: result});//a donde lo reenderizo?
        }).catch(function (err){
            console.log(err);
        });
    }
};

module.exports = comentarioController;