const data = require("../db/modulo");
const productController= {

    detail: function(req, res){
       let id = req.params.id;
       let resultado = null;
       for (let i = 0; i < data.productos.length; i++) {     
        if (id == data.productos[i].id) {
            resultado = data.productos[i]
            
        }
       }
       return res.render("prodDetail",{productos:resultado, usuario:data.usuario})
    },
    add: function(req, res){
        return res.render("addProduct", {usuario:data.usuario})
    },
}

module.exports = productController