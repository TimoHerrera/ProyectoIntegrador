/* const data = require("../db/modulo");
const usuarioController= {
    index: function(req,res){
         
        return res.render("usuario", {usuario:data.usuario, productos: data.productos })          
    },
    login: function(req, res){
        return res.render("login", {usuario:data.usuario})
    },
    register: function(req, res){
        return res.render("register", {usuario:data.usuario})
    },
    edit: function(req, res){
        return res.render("usuario-edit", {usuario:data.usuario})
    },
} */


module.exports = usuarioController

//lo nuevo
const db = require('../database/models')
const ussuarios = db.Usuario;
let op = db.Sequelize.Op;

const UsuarioController ={
findAll: (req, res) => {

    ussuarios.findAll()//busca todos los productos porque como parametro no le paso nada especifico (le puse doble t porque en views ya hay un productos)
    .then(function (result) {//va a buscar a mi deb todos los registros y lo guardav en result
        return res.render("usuario", {usuario: result});//a donde lo reenderizo? LO MODIFIQUE EL 28 MAYO
    }).catch(function (err){
        console.log(err);
    });
}
};

module.exports = UsuarioController;