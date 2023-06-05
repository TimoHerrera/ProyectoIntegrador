//lo nuevo
const { DATE } = require('sequelize');
const db = require('../database/models')
const ussuarios = db.Usuario;
let op = db.Sequelize.Op; //EL op se puede usar para buscar un usuario en especial!!
const bcrypt= require('bcryptjs');


const UsuarioController ={
findAll: (req, res) => {

    ussuarios.findAll()//busca todos los productos porque como parametro no le paso nada especifico (le puse doble t porque en views ya hay un productos)
    .then(function (result) {//va a buscar a mi deb todos los registros y lo guardav en result
        return res.render("usuario", {usuario: result});//a donde lo reenderizo? LO MODIFIQUE EL 28 MAYO
    }).catch(function (err){
        console.log(err);
    });
},

crear:function(req,res) {
    return res.render('register')
},
store: function (req,res) {
    let info= req.body;
    
    let ussuarioSave={
        usuario_nombre:info.usuario_nombre,
        email:info.email,
        pssword:bcrypt.hashSync(info.pssword, 10),
        created_at:new DATE(),
        updated_at:new DATE(),

    }

    ussuarios.crear(ussuarioSave)
    .then(function(result){
        return res.redirect('/usuario/login'); 
    })
    
    .catch(function (error) {
        console.log(error);
    });

    
},

login:function(req,res) {
    return res.render('login')
},
loginPost:function(req,res) {
    return res.redirect('/')
},
};


module.exports = UsuarioController;

/* const data = require("../db/modulo");
const usuarioController= {
    index: function(req,res){
         
        return res.render("usuario", {usuario:data.usuario, productos: data.productos })          
    },
    login: function(req, res){
        return res.render("login", {usuario:data.usuario})
    },
    register: function(req, res){
        return res.render("register", {usuario:data.usuario})
    },
    edit: function(req, res){
        return res.render("usuario-edit", {usuario:data.usuario})
    },
} */


// module.exports = usuarioController