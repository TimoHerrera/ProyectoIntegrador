var express = require('express');
var router = express.Router();
const productController = require(`../controllers/productcontroller`);

// router.get (`/`,productcontroller.index);
router.get (`/prodDetail/:id`,productController.detail);
router.get (`/addProduct`,productController.add);
router.get (`/sResults`,productController.busqueda);  

//get productos listing
router.get('/all',productController.findAll);//va all? no es /productos?

module.exports=router;

//find by pk
router.get('/id:id', productController.show);

//ejemplo de buscador
router.get('/sResults',productController.Sresultado);// no se bien el sufijo