var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let session = require('express-session');

const db = require('./database/models')

//var indexRouter = require('./routes/productos');
var productsRouter = require(`./routes/productos`); //obtiene la info de products.js
var usuarioRouter = require(`./routes/usuario`); //obtiene la info de usuario.js


var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'myPage', //para identificar mi sitio web
  resave: false, //configuracion por defecto
  saveUninitialized: true
  })); 

app.use(function(req,res,next){
//paso la info de session para locals
  if(req.session.user != undefined){
    res.locals.user = req.session.user //le pase a locals la info de user
}
    return next();
});

//configuro cookies de usuario
app.use(function(req,res,next){
  //si existe la cookie en el nav y además no existe el usuario en la variable session, logueralo automáticamente	
  if (req.cookies.userId != undefined && req.session.user == undefined){//.user lo cree en la linea 35
    let idUsuarioEnCookie = req.cookies.userId;
    db.Usuario.findByPk(idUsuarioEnCookie)
    .then(function (user) {
      
    req.session.user = user.dataValues;
    res.locals.user = user.dataValues;
    return next();
  
  }).catch(function (err){
      console.log(err);
  });

  } else{
    return next();
  }
});


app.use('/', productsRouter);
app.use('/productos', productsRouter); //lo conecto con producstouter
app.use('/usuario', usuarioRouter);//lo conecto a usuariorouter


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
