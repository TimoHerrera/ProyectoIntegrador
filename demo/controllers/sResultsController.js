const data = require("../db/modulo");
const resultscontroller= {
    index: function(req,res){
        return res.render(`sResults.ejs`)
    }
}

module.exports = resultscontroller