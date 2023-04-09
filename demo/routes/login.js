var express = require('express');
var router = express.Router();
const logincontroller=require(`../controllers/loginController`)

router.get (`/`,logincontroller.index);

module.exports=router;
