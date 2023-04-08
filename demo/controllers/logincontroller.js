const data = require("../db/modulo");
const logincontroller= {
    index: function(req,res){
       res.render("login.ejs")
       return res.render("login.ejs")
    }
}

module.exports = logincontroller