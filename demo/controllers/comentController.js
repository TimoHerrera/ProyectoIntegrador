const data = require("../db/modulo");
const comentcontroller= {
    index: function(req,res){
        return res.render(`data`,{comentarios:data.comentarios  })
    }
}

module.exports = comentcontroller