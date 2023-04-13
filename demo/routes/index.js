var express = require('express');
var router = express.Router();
const indexController = require("../controllers/indexController")

// /* GET home page. */
router.get("/index", indexController.index);
router.get ("/sResults",indexController.result);    
module.exports = router;
