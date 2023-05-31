var express = require('express');
var router = express.Router();
const usuarioController = require(`../controllers/usuariocontroller`);

/* router.get (`/`,usuarioController.index);
router.get (`/login`,usuarioController.login);
router.get (`/register`,usuarioController.register);
router.get (`/usuario-edit`, usuarioController.edit); */
//lo nuevo
router.get('/all', usuarioController.findAll);// no hay una vista dedicada a todos los users, capaz hay que hacer find by pk para uno individualmente

module.exports=router;