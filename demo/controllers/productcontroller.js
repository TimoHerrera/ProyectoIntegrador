
const db = require('../database/models') //requiero mis modelos
const producttos = db.Producto; //producto es el alias de mi tabla
let op = db.Sequelize.Op; 

const productController = {
    findAll: (req, res) => {

        producttos.findAll()//busca todos los productos porque como parametro no le paso nada especifico (le puse doble t porque en views ya hay un productos)
        .then(function (result) {//va a buscar a mi deb todos los registros y lo guardav en result
            return res.render("index", {productos: result}); //productos sale de la vista!
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
                association: "usuarios", //lo asocio con el nombre que le dimos a as dentro de producto
                association: "comentarios",//lo asocio con el nombre que le dimos a as dentro de producto
            }
        ]
    };

    producttos.findByPk(id, rel)
    .then(function(result){
        return res.render('prodDetail',{productos: result})
    })
    .catch(function(error){
        console.log(error);
    });
    },
    Sresultado: function (req,res) {//BUSCADOR
    let buscar = req.query.search;        //esta bien la query
    
    producttos.findAll({
        where: [{
           nombre:{[op.like]:"%" + buscar + "%"} //si hay error esta en la vista, porque aca esta todo bien
        }]
    })
    .then(function(result){
        res.render('sResults',{productos: result})//bien 
    })
    .catch(function(error){
            console.log(error)
    });
    },
    //esto ya es de franco, solo estan creadas las rutas, igual chequealo francoo!!
    showForm: function(req,res){
        return res.render('addproduct')//esta bien el sufijo?
    },
    store: function (req,res){

    }
};

module.exports = productController;

//where para consultas especiales (por ahora no lo voy a agregar hasta que nos den la consigna)
//order y limit tambien se pueden usar





//const data = require("../db/modulo");
// const productController= {

//     detail: function(req, res){
//        let id = req.params.id;
//        let resultado = null;
//        for (let i = 0; i < data.productos.length; i++) {     
//         if (id == data.productos[i].id) {
//             resultado = data.productos[i]
            
//         }
//        }
//        return res.render("prodDetail",{productos:resultado, usuario:data.usuario, comentarios:data.comentarios})
//     },
    
//     add: function(req, res){
//         return res.render("addProduct", {usuario:data.usuario})
//     },

//     busqueda: function (req, res) {
//         return res.render("sResults", {productos:data.productos, usuario:data.usuario});
//       },

// }

//module.exports = productController