const data = require("../db/modulo");
const productcontroller= {
    index: function(req,res){
        return res.render(`productos`,{productos:data.productos, usuario:data.usuario})
    },
    detail: function(req, res){
        return res.render("prodDetail",{productos:data.productos, usuario:data.usuario})
    },
}

module.exports = productcontroller