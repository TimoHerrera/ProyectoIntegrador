var express = require('express');
var router = express.Router();
const UsuarioController = require(`../controllers/usuarioController`);

/* router.get (`/`,usuarioController.index);
router.get (`/login`,usuarioController.login);
router.get (`/register`,usuarioController.register);
router.get (`/usuario-edit`, usuarioController.edit); */
//lo nuevo
router.get('/all', UsuarioController.findAll);// no hay una vista dedicada a todos los users, capaz hay que hacer find by pk para uno individualmente

router.get('/register', UsuarioController.create );
router.post('/register', UsuarioController.store);

router.get('/login', UsuarioController.login );
router.post('/login', UsuarioController.loginPost);

router.get('/logout', UsuarioController.logout);

// Usuario sigue sin funcionar
router.get('/usuario/:id', UsuarioController.profile);


module.exports=router;