var api = require('../apiConsumer');
var toTitleCase = require('to-title-case');

module.exports = function(router) {
  router.get("/user/:id", function(req, res) {
    api.getFavorites(req.session.token, function(err, response) {
      if(err) {
        throw err;
      }

      var favorites = response;
      var favoriteIds = [];
      for(var i = 0; i < favorites.length; i++) {
        favoriteIds[favorites[i].id] = true;
      }

      api.getUser(req.session.token, req.params.id, function(err, user) {
        if(err) {
          throw err;
        }

        var model = {
          title: "Recipes by " + toTitleCase(user.firstName + " " + user.lastName),
          userId: user.userId,
          recipes: user.recipes,
          fullName: toTitleCase(user.firstName + " " + user.lastName)
        };

        for(var i = 0; i < model.recipes.length; i++) {
          model.recipes[i].title = toTitleCase(model.recipes[i].title);
          model.recipes[i].isFavorite = ((favoriteIds[model.recipes[i].id] !== undefined) && (favoriteIds[model.recipes[i].id] === true));
        }

        res.render("user", model);
      });
    });
  });

  router.get("/profile", function(req, res) {
    //This route could be used to display more information and edit profile etc.
    //but since we currently don't have any user specific data we just redirect
    //to the public user page
    res.redirect("/user/" + req.session.userId);
  });
}
