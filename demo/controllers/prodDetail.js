const data = require("../db/modulo");
const prodDetailcontroller= {
   
    detail: function(req, res){
        return res.render("prodDetail",{productos:data.productos, usuario:data.usuario})
    },
    add: function(req, res){
        return res.render("add", {usuario:data.usuario})
    },
}

module.exports = prodDetailcontroller