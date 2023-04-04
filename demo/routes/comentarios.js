var express = require('express');
var router = express.Router();
const comentcontroller=require(`../controllers/comentController`)

router.get (`/`,comentcontroller.index);

module.exports=router;