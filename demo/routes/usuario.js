var express = require('express');
var router = express.Router();
const usuariocontroller=require(`../controllers/usuarioController`)

router.get (`/`,usuariocontroller.index);

module.exports=router;