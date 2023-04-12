var express = require('express');
var router = express.Router();
const usuarioController = require(`../controllers/usuarioController`)

router.get (`/`,usuarioController.index);
router.get (`/login`,usuarioController.login);
router.get (`/register`,usuarioController.register);
router.get (`/usuario-edit`, usuarioController.edit);
module.exports=router;