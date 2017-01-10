var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require("./config");
var request = require('request');
var session = require('express-session')
var router = express.Router();

var app = express();

const commandLineArgs = require('command-line-args')
const options = commandLineArgs([
  {
    name: 'api',
    alias: "a",
    type: String,
    defaultValue: 'http://localhost:3001'
  },
  {
    name: 'fbAppId',
    alias: "f",
    type: String,
    defaultValue: '381247258888483'
  }
]);
config.apiUrl = options.api;
config.fbAppId = options.fbAppId;

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
      res.locals.user = {
        id: req.session.userId,
        firstName: req.session.firstName,
        lastName: req.session.lastName,
        isAdmin: req.session.isAdmin
      };
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

  next();
});

app.use('/', router);

var index = require('./routes/index')(router, config);
var recipe = require('./routes/recipe')(router);
var tags = require('./routes/tags')(router);
var users = require("./routes/users")(router);


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

  if(err.message === "Unauthorized") {
    res.redirect("/");
  }
  else {
    // render the error page
    res.status(err.status || 500);
    res.render('shared/error');
  }
});

module.exports = app;
