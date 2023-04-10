var express = require('express');
var router = express.Router();
const usuariocontroller=require(`../controllers/usuarioController`)

router.get (`/`,usuariocontroller.index);
router.get (`/login`,usuariocontroller.login);
module.exports=router;