var express = require('express');
var router = express.Router();
const productController = require('../controllers/productcontroller');
// const productController = require(`../controllers/productcontroller`);

// router.get (`/`,productcontroller.index);
// router.get (`/prodDetail/:id`,productController.detail);
// router.get (`/addProduct`,productController.add);
// router.get (`/sResults`,productController.busqueda);  

//get productos listing
router.get('/', productController.findAll);//no es /productos puse/ index pq es donde me muestra todos lo productos. 

//find by pk
router.get('/prodDetail/:id', productController.show);

//ejemplo de buscador
router.get('/sResults', productController.Sresultado);// no se bien el sufijo

//mostrar form moivies (mostrar el form para que agregue una pelicula)
router.get('/addProduct', productController.showForm) //el sufijo es el de la pagina donde me permite agregar un prod
//guardar el form de movie

router.post('/addProduct', productController.store)


module.exports = router;