const data = require("../db/modulo");
const usuariocontroller= {
    index: function(req,res){
         
         return res.render(`usuario`, {usuario:data.usuario, productos: data.productos })          
    },
    login: function(req, res){
        return res.render("login")
    },
}


module.exports = usuariocontroller