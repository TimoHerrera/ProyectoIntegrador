const data = require("../db/modulo");
const productController= {

    detail: function(req, res){
       let id = req.params.id;
       let resultado = [];
       for (let i = 0; i < data.productos.length; i++) {     
        if (id == data.productos[i].id) {
            resultado.push(data.productos[i].id)
            
        }
       }
       return res.render("prodDetail",{productos:data.productos, usuario:data.usuario})
    },
    add: function(req, res){
        return res.render("add", {usuario:data.usuario})
    },
}

module.exports = productController