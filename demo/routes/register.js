var express = require('express');
var router = express.Router();
const registercontroller=require(`../controllers/registerController`)

router.get (`/`,registercontroller.index);

module.exports=router;