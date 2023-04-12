var express = require('express');
var router = express.Router();
const productController = require(`../controllers/productController`)

// router.get (`/`,productcontroller.index);
router.get (`/prodDetail/:id`,productController.detail);
router.get (`/addProduct`,productController.add);

module.exports=router;