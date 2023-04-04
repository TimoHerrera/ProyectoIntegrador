const data = require("../db/modulo");
const productcontroller= {
    index: function(req,res){
        return res.render(`productos`,{productos:data.productos})
    }
}

module.exports = productcontroller