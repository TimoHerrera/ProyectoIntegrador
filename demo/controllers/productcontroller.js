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
       return res.render("prodDetail",{productos:resultado, usuario:data.usuario, comentarios:data.comentarios})
    },
    
    add: function(req, res){
        return res.render("addProduct", {usuario:data.usuario})
    },

    busqueda: function (req, res) {
        return res.render("sResults", {productos:data.productos, usuario:data.usuario});
      },

}

module.exports = productController
//que se hace con lo de antes, se borra?
//nuevo
const db = require('../database/models')
const producttos = db.Producto;
let op = db.Sequelize.Op;

const producttController = {
    findAll: (req, res) => {

        producttos.findAll()//busca todos los productos porque como parametro no le paso nada especifico (le puse doble t porque en views ya hay un productos)
        .then(function (result) {//va a buscar a mi deb todos los registros y lo guardav en result
            return res.render("productos", {productos: result});//a donde lo reenderizo? creo que esta bien esta en la vista esto
        }).catch(function (err){
            console.log(err);
        });
    },
    show: function (req,res) {//voy a filtrar por pk
    let id = req.params.id; //capturo el id a travez de la url

    // creo relaciones entre los productos y los usuarios que estarian en los productos
    let rel={
        include:[
            {
                association: "usuarios"
            }
        ]
    };

    productos.findByPk(id, rel)
    .then(function(result){
        return res.render('prodDetail',{productos: result})
    })
    .catch(function(error){
        console.log(error);
    });
    },
    Sresultado: function (req,res) {
    let buscar = eq.query.producto;        //capturo la query string (no se como se llama la query, me tenfo que fijar en la url, no se si es producto)
    
    DeviceMotionEvent.findAll({
        where: [{
           nombre:{[op.like]:"%" + buscar + "%"} //me busca por lo que busco
        }]
    })
    .then(function(result){
        res.render('sResults',{productos: result})
    })
    .catch(function(error){
            console.log(error)
    });
    }
};

module.exports = producttController;

//where para consultas especiales (por ahora no lo voy a agregar hasta que nos den la consigna)
//order y limit tambien se pueden usar