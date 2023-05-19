const comentarioController = require(`../controllers/comentarioController`);
//get productos listing
router.get('/all',comentarioController.findAll);