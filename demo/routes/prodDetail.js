var express = require('express');
var router = express.Router();
const  prodDetailcontroller= require(`../controllers/prodDetail`)

router.get (`/prodDetail`,prodDetailcontroller.detail);
router.get(`/addproduct`,prodDetailcontroller.add);

module.exports=router;