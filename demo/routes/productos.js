var express = require('express');
var router = express.Router();
const productcontroller=require(`../controllers/productController`)

router.get (`/`,productcontroller.index);
router.get (`/prodDetail`,productcontroller.detail);

module.exports=router;