const comentarioController = require(`../controllers/comentarioController`);
//get productos listing
router.get('/all',comentarioController.findAll);//cambiar prefijo NO HAY UNA VISTA DEDICADA A TODOS LOS COMMENTS! puede ser que no necesite ese entonces

//creo que al final si es necesario, en el detail del producto te muestra los comments, limitados por un for, capaz ahi con findall hay que ponerle y limitarlo con un limit