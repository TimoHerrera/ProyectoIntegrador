var express = require('express');
var router = express.Router();
const usuariocontroller=require(`../controllers/usuariocontroller`)

router.get (`/`,usuariocontroller.index);

module.exports=router;