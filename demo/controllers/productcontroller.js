
const db = require('../database/models') //requiero mis modelos
const producttos = db.Producto; //Producto es el alias de mi tabla
const commentarios = db.Comentario;

let op = db.Sequelize.Op; 


const productController = {
    findAll: (req, res) => {

        let rel = {
            include: [
            {association: "usuarios"},
            {association: "comentarios"}
        ]}

        producttos.findAll(rel)//busca todos los productos porque como parametro no le paso nada especifico (le puse doble t porque en views ya hay un productos)
        .then(function (result) {//va a buscar a mi deb todos los registros y lo guardav en result
            //return res.send(result)
            return res.render("index", {productos: result}); //productos sale de la vista!
        }).catch(function (err){
            console.log(err);
        });
    },
    
    show: function (req,res) {//voy a filtrar por pk
    let id = req.params.id; //capturo el id a travez de la url
   
    // creo relaciones entre los productos y los usuarios que estarian en los productos
        producttos.findByPk(id)
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
        where: {
            [op.or]: [
                {nombre_producto: {[op.like]: "%" + buscar + "%"}},
                //{order:[['created_at', 'DESC'] ]}
            
            ]
        }
    })
        .then(function(result){
            //return res.send(result)
            return res.render('sResults',{productos: result});
        })
        .catch(function(error){
                console.log(error)
        });
        },
        
    
    //esto ya es de franco, solo estan creadas las rutas, igual chequealo francoo!!
    showForm: function(req,res){
        return res.render('addproduct')
    },
    
    store: function (req,res){
        let info = req.body;
        let productoSave = {
            nombre_producto:info.nombre,
            descripcion_producto:info.descripcion,
            precio:info.precio,
            imagen_producto: info.imagen_producto,
            id_usuario: req.session.user.id_usuario
        }
        //console.log(info);
        producttos.create(productoSave)
        .then((result) => {
            return res.redirect("/usuario/perfil/"+ req.session.user.id_usuario)
        }).catch((error) => {
            return console.log(error);
        });
        //return res.redirect("/") 

    },

 

    showFormUpdate: (req, res) => {
        let id = req.params.id;
        let errors = {};

        if (req.session.user != undefined ){
         producttos
          .findByPk(id)
          .then((result) => {
           // console.log(result);
            return res.render("editProduct", { productos: result });
          })
          .catch((err) => {
            console.log(err);
          });  
      } else {
        errors.message = "Inicia sesión para editar producto";
        res.locals.errors = errors;
        return res.render("login", { errors: errors });
      }},

      update: (req, res) => {
        let id = req.params.id;
        let info = req.body;
        let productoUpdate = {
            nombre_producto:info.nombre,
            descripcion_producto:info.descripcion,
            precio:info.precio,
            imagen_producto: info.imagen_producto,
            
        }
        producttos
          .update(productoUpdate, {
            where: [{ id_producto: id }],
          })
          .then((result) => {
            return res.redirect("/prodDetail/" + id);
          })
          .catch((err) => {
            console.log(err);
          });
      },

//poner WHERE en el DELETE/DESTROY  

      addcomentario: function(req,res) {
        let info = req.body;
        let nuevocomentario = {
            comentario: info.nuevocomentario,
            id_usuario: req.session.user.id_usuario,
            id_producto: req.params.id
        }
        commentarios.create(nuevocomentario)
        .then(function(result){
            return res.redirect("/productos/prodDetail/" + nuevocomentario.id_producto)
        }).catch((error) => {
            return console.log(error);
        });
    },

};

    
    



module.exports = productController;

