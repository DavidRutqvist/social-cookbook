var express = require('express');
var router = express.Router();
var api = require('../apiConsumer');

/* GET home page. */
router.post("/login", function(req, res, next) {
  api.authenticate(req.body.userId, req.body.token, function(err, result) {
    if(err) {
      if(err.message === "User not registered") {
        registerAndAuthenticate(req.body.userId, req.body.token, function(success, result) {
          if(success === true) {
            var session = req.session;
            session.userId = req.body.userId;
            session.token = result.token;
            session.firstName = result.firstName;
            session.lastName = result.lastName;
            return res.redirect("/");
          }
          else {
            throw new Error("Could not register user");
          }
        })
      }
      else {
        throw err;
      }
    }
    else {
      var session = req.session;
      session.userId = req.body.userId;
      session.token = result.token;
      session.firstName = result.firstName;
      session.lastName = result.lastName;
      res.redirect("/");
    }
  })
})

router.get("/login", function(req, res, next) {
  res.render("login", { title: "Please sign in using Facebook "});
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', firstName: req.session.firstName });
});

function registerAndAuthenticate(userId, token, callback) {
  api.register(userId, token, function(err, success) {
    if(err) {
      throw err;
    }
    
    if(success) {
      api.authenticate(userId, token, function(err, result) {
        if(err) {
          throw err;
        }
        else {
          callback(true, result);
        }
      });
    }
    else {
      callback(false, undefined);
    }
  })
}

module.exports = router;
