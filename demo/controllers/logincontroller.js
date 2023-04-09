const data = require("../db/modulo");
const logincontroller= {
    index: function(req,res){
       return res.render("login.ejs")
    }
}

module.exports = logincontroller