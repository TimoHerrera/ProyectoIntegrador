const data = require("../db/modulo");
const comentcontroller= {
    index: function(req,res){
        return res.render(`comentarios`,{comentarios: data.comentarios  })  // esto esta mal?? me aparece problema en la data
    }
}

module.exports = comentcontroller