var express = require('express');
var router = express.Router();
const productcontroller=require(`../controllers/productcontroller`)

router.get (`/`,productcontroller.index);

module.exports=router;