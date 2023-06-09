//lo nuevo
// const { DATE } = require('sequelize');
const db = require('../database/models')
const ussuarios = db.Usuario;
let op = db.Sequelize.Op; //EL op se puede usar para buscar un usuario en especial!!
const bcrypt = require('bcryptjs');


const usuarioController = {
    findAll: (req, res) => {

        ussuarios.findAll()//busca todos los productos porque como parametro no le paso nada especifico (le puse doble t porque en views ya hay un productos)
            .then(function (result) {//va a buscar a mi deb todos los registros y lo guardav en result
                return res.render("usuario", { usuario: result });//a donde lo reenderizo? LO MODIFIQUE EL 28 MAYO
            }).catch(function (err) {
                console.log(err);
            });
    },

    create: function (req, res) {
        return res.render('register')
    },

    store: function (req, res) {
        let info = req.body;
        
        let ussuarioSave = {
            nombre: info.usuarioNombre,// lo de la izquierda es el nombre de la tabla y la derecha el nombre del form de register
            email: info.email,
            pssword: bcrypt.hashSync(info.pssword, 10),
            fecha: info.fecha_nacimiento,
            dni: info.documento,
            imagen_usuario:info.imagen_usuario,

        }
        console.log(ussuarioSave);
        ussuarios.create(ussuarioSave)
            .then(function (result) {
                return res.redirect('/usuario/login');
            })

            .catch(function (error) {
                console.log(error);
            });

    }, 

    editUser: function(req,res) {
        let id = req.params.id;
        let info = req.body;
        let usuarioUpdate = {
            nombre_producto:info.nombre,
            descripcion_producto:info.descripcion,
            imagen_producto: info.imagen_producto,
            precio:info.precio,
            
        }
        ussuarios
          .editUser(usuarioUpdate, {
            where: [{ id_usuario: id }],
          })
          .then((result) => {
            return res.redirect("/perfil/" + id);
          })
          .catch((err) => {
            console.log(err);
          });
      },

    login: function (req, res) {
// no usamos el if dado que nos pareció más práctico simplemente mostrar el login solo en caso de que la view incluya el "headerLogeado".

     /* if (req.session.user != undefined ){
            return res.redirect("/")
        } else { 
            return res.render('login')
         };
         },*/
         let errors = {};   
        return res.render("login", { errors: errors });
    },
    loginPost: function (req, res) {
        let emailBuscado = req.body.email

        let filtrado = {
            where: [{ email: emailBuscado }]
        };


        ussuarios.findOne(filtrado)
            .then((result) => {

                if (result != undefined) {
                    let pass = req.body.pssword;
                    let clavecorrecta = bcrypt.compareSync(pass, result.pssword)

                if (result != null) {
                   // let pass = req.body.pssword;
                    console.log(result.pssword);
                    console.log(pass);
                    let clavecorrecta= bcrypt.compareSync(pass, result.pssword)

                    if (clavecorrecta) {

                     req.session.user = result.dataValues; //user se lo puse yo, gurdo en la prop creada user lo que viene de result
                    if (req.body.recordarme != undefined) {
                            res.cookie('userId', result.id_usuario, { maxage: 1000 * 60 * 15 })//1 parametro, como quiero que se llame la cookie, el puso result.idyo puse id_usuario pq es como esta en el modelo
                        }
                        console.log("login completed")
                        return res.redirect('/')

                    } else {

                        return res.send(" existe el mail pero la contraseña es incorrecta ")
                    }
                }
                else {
                    return res.send("Usuario inexistente")
                }

            }
            }).catch((error) => {
                console.log(error);
            });
        
        

    },
    logout: function(req,res) {
        req.session.destroy();
        res.clearCookie('userId');
        return res.redirect('/')
        
    },

    showEditUser: function(req,res) {
        let id = req.params.id
        return res.render("editUsuario", { usuarios: id });
    },

    profile: function (req,res) {
    let idSolicitado= req.params.id 
    let relations = {
        include: [
            {association: 'Producto'},
            {association: 'Comentario'}
    ]
    }

    ussuarios.findByPk (idSolicitado,relations)
    .then ((result)  => { 
/*             let infoUser={
                id: result.id_usuario,
                nombre:result.nombre,
                email:result.email,
                password:result.pssword,
                fecha_nacimiento:result.fecha,
                dni:result.dni,
                created_at:result.created_at,
            } */
        console.log(result);
        return res.render('usuario', {infoUser: result})
        })
     .catch((err) => {
            return console.log('El error es: ' + err)
        });
    }, //cierra el profile en general
};
module.exports = usuarioController;

