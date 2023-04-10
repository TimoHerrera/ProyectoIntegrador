const data = require("../db/modulo");
const usuariocontroller= {
    index: function(req,res){
         
         return res.render(`usuario`, {usuario:data.usuario, productos: data.productos })          
    },
    login: function(req, res){
        return res.render("login")
    },
    register: function(req, res){
        return res.render("register")
    },
}


module.exports = usuariocontroller