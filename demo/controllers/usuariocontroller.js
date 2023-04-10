const data = require("../db/modulo");
const usuariocontroller= {
    index: function(req,res){
        res.render(`productos`,{productos:data.productos})
        return res.render(`usuario`,{usuario:data.usuario  })  
    }
}

module.exports = usuariocontroller