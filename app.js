var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require("./config");
var request = require('request');
var session = require('express-session')

var index = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'vash');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: "55zwpzLT" }));
app.use("/public", require('less-middleware')(path.join(__dirname, 'public')));
app.use("/public",  express.static(path.join(__dirname, 'public')));

app.use("/static", function(req, res) {//Pipe static requests to the api
  request(config.apiUrl + "/static" + req.path).pipe(res);
});

app.use(function(req, res, next) {
  if(req.path.toLowerCase() !== "/login") {
    if((req.session !== undefined) && (req.session.userId !== undefined) && (req.session.token !== undefined)) {
      next();
    }
    else {
      res.redirect("/login");
    }
  }
  else {
    next();
  }
})

app.use(function(req, res, next) {
  //Set up main navigation
  res.locals.navigation = new Array();

  res.locals.navigation.push({
    path: "/",
    title: "Home",
    active: (req.path == "/")
  });

  res.locals.navigation.push({
    path: "/about",
    title: "About",
    active: (req.path.startsWith("/about"))
  });

  next();
});

app.use(function(req, res, next) {
  //TODO: Implement authentication
  next();
});

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
