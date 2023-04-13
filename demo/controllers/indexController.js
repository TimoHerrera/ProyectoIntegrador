const data = require("../db/modulo");
const indexController = {
    index: function(req,res){
        return res.render("index",{productos:data.productos, usuario:data.usuario})
    },
    result: function(req,res){
        return res.render("sResults",{productos:data.productos, usuario:data.usuario})
}
}

module.exports = indexController