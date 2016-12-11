var api = require('../apiConsumer');
var toTitleCase = require('to-title-case');

module.exports = function(router, config) {
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
              session.firstName = toTitleCase(result.firstName);
              session.lastName = toTitleCase(result.lastName);
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
        session.firstName = toTitleCase(result.firstName);
        session.lastName = toTitleCase(result.lastName);
        res.redirect("/");
      }
    })
  });

  router.get("/login", function(req, res, next) {
    res.render("login", { title: "Please sign in using Facebook", appId: config.fbAppId });
  });

  router.get('/', function(req, res, next) {
    api.getRecipes(req.session.token, 1, function(response) {
      var model = {
        title: 'Home',
        page: response.page,
        pageSize: response.pageCount,
        count: response.totalCount,
        recipes: response.recipes
      };

      for(var i = 0; i < model.recipes.length; i++) {
        model.recipes[i].title = toTitleCase(model.recipes[i].title);
      }

      res.render('index', model);
    });
  });
}

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
