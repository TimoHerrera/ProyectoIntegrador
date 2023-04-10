var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require(`no./routes/productos`); //obtiene la indo de products.js
var comentRouter = require(`./routes/comentarios`);//obtiene la indo de comentarios.js
var usuarioRouter = require(`./routes/usuario`); //obtiene la info de usuario.js
var loginRouter = require(`./routes/login`); // obtiene la info de login.js
var registerRouter = require(`./routes/register`); // obtiene la info de register.js
var sResultsRouter = require(`./routes/sResults`); // obtiene la info de sResults.js
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos', productsRouter); //lo conecto con producstouter
app.use('/comentarios', comentRouter);//lo conecto con comentrouter
app.use('/usuario', usuarioRouter);//lo conecto a usuariorouter
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/sResults', sResultsRouter);


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
