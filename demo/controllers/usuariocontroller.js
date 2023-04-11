const data = require("../db/modulo");
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
}


module.exports = usuarioController