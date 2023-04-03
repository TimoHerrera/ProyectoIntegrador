const data = require("../db/modulo");
const productcontroller= {
    index: function(req,res){
        return res.render(`data`,{productos:data.productos})
    }
}

module.exports = productcontroller