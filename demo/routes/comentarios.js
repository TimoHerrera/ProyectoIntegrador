let express = require('express');
let router = express.Router();
const comentarioController = require(`../controllers/comentarioController`);
//get productos listing
router.post('/:id', comentarioController.findAll)

module.exports = router