const data = require("../db/modulo");
const usuariocontroller= {
    index: function(req,res){
         
         return res.render(`usuario`, {usuario:data.usuario, productos: data.productos })  
    }
}

module.exports = usuariocontroller