var express = require('express');
var router = express.Router();
const sResultsController = require("../controllers/sResultsController")

router.get (`/`,sResultsController.index);

module.exports=router;