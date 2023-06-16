var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');
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
router.get('/sResults.ejs', productController.Sresultado);// el sufijo esta bien, no se pq pone el ejs


//mostrar form moivies (mostrar el form para que agregue una pelicula)
router.get('/addProduct', productController.showForm); //el sufijo es el de la pagina donde me permite agregar un prod
//guardar el form de movie

router.post('/addProduct', productController.store);

router.get('/editProduct/:id', productController.showFormUpdate);

router.post('/editProduct/:id', productController.update);

router.post('/comentarios/:id' , productController.addcomentario);



module.exports = router;