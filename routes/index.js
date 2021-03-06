var api = require('../apiConsumer');
var toTitleCase = require('to-title-case');

module.exports = function(router, config) {
  /* GET home page. */
  router.post("/login", function(req, res, next) {
    api.authenticate(req.body.userId, req.body.token, function(err, result) {
      if(err) {
        if(err.message === "Unauthorized") {
          req.session = null;
          return res.redirect("/login");
        }

        if(err.message === "User not registered") {
          registerAndAuthenticate(req.body.userId, req.body.token, function(success, result) {
            if(success === true) {
              populateSession(result, req, function() {
                res.redirect("/");
              });
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
        populateSession(result, req, function() {
          res.redirect("/");
        });
      }
    })
  });

  router.get("/login", function(req, res, next) {
    res.render("login", { title: "Please sign in using Facebook", appId: config.fbAppId });
  });

  router.get("/logout", function(req, res) {
    api.logout(req.session.userId, req.session.graphToken, function(success) {
      req.session = null;
      res.redirect("/login");
    });
  });

  router.get('/', function(req, res, next) {
    api.getFavorites(req.session.token, function(err, response) {
      if(err) {
        throw err;
      }

      var model = {
        title: 'Home',
        favorites: response
      };

      var favoriteIds = [];
      for(var i = 0; i < model.favorites.length; i++) {
        favoriteIds[model.favorites[i].id] = true;
        model.favorites[i].title = toTitleCase(model.favorites[i].title);
      }

      api.getRecipes(req.session.token, 1, function(err, response) {
        if(err) {
          if(err.message === "Unauthorized") {
            req.session = null;
            return res.redirect("/login");
          }
          throw err;
        }

        model.page = response.page;
        model.pageSize = response.pageCount;
        model.count = response.totalCount;
        model.recipes = response.recipes;

        for(var i = 0; i < model.recipes.length; i++) {
          model.recipes[i].title = toTitleCase(model.recipes[i].title);
          model.recipes[i].isFavorite = ((favoriteIds[model.recipes[i].id] !== undefined) && (favoriteIds[model.recipes[i].id] === true));
        }

        api.getTags(req.session.token, function(err, response) {
          if(err) {
            throw err;
          }

          model.tags = response;
          res.render('index', model);
        });
      });
    });
  });
}

function populateSession(result, req, callback) {
  api.getCurrentUser(result.token, function(err, response) {
      var session = req.session;
      session.userId = req.body.userId;
      session.token = result.token;
      session.firstName = toTitleCase(result.firstName);
      session.lastName = toTitleCase(result.lastName);
      session.graphToken = req.body.token;
      session.isAdmin = response.isAdmin;

      callback();
  });
}

function registerAndAuthenticate(userId, token, callback) {
  api.register(userId, token, function(err, success) {
    if(err) {
      if(err.message === "Unauthorized") {
        req.session = null;
        return res.redirect("/login");
      }
      throw err;
    }

    if(success) {
      api.authenticate(userId, token, function(err, result) {
        if(err) {
          if(err.message === "Unauthorized") {
            req.session = null;
            return res.redirect("/login");
          }
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
