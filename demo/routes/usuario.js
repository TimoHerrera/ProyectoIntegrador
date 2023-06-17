var express = require('express');
var router = express.Router();
const usuarioController = require(`../controllers/usuarioController`);

/* router.get (`/`,usuarioController.index);
router.get (`/login`,usuarioController.login);
router.get (`/register`,usuarioController.register);
router.get (`/usuario-edit`, usuarioController.edit); */
//lo nuevo
router.get('/all', usuarioController.findAll);// no hay una vista dedicada a todos los users, capaz hay que hacer find by pk para uno individualmente

router.get('/register', usuarioController.create);

router.post('/register', usuarioController.store);

router.get('/login', usuarioController.login );

router.post('/login', usuarioController.loginPost);

router.get('/logout', usuarioController.logout);

// Usuario sigue sin funcionar
router.get('/perfil/:id', usuarioController.profile);

router.get('/editUsuario', usuarioController.showEditUser);

router.post('/editUsuario', usuarioController.editUser);


module.exports=router;