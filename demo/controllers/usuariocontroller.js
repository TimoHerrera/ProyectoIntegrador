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
        let emailBuscado= req.body.email;
        let pass = req.body.password;
        
        let filtrado ={
            where:[{email:emailBuscado}]
        };

        ussuarios.findOne(filtrado)
        .then ((result)=>{

            
            if (result != null) {
                let clavecorrecta= bcrypt.compareSync(pass,result.pssword)
                if (clavecorrecta) {
                    return res.send("existe el mail y contraseña ")
                } else {
                    return res.send(" existe el mail pero la contraseña es inexistente ")
                }
            } else {
                return res.send("Usuario inexistente")
            }


        }) .catch ((error) =>{
            console.log(error);
        });
        
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