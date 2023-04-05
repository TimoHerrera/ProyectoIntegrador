const data = require("../db/modulo");
const comentcontroller= {
    index: function(req,res){
        return res.render(`comentarios`,{comentarios: data.comentarios  })  
    }
}

module.exports = comentcontroller