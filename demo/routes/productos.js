var express = require('express');
var router = express.Router();
const productcontroller=require(`../controllers/productController`)

router.get (`/`,productcontroller.index);

module.exports=router;