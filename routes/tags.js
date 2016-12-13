var api = require('../apiConsumer');
var toTitleCase = require('to-title-case');

module.exports = function(router) {

  router.get("/tag", function(req, res) {
    res.redirect("/");
  });

  router.get("/tag/:tag", function(req, res) {
    api.getFavorites(req.session.token, function(err, response) {
      if(err) {
        throw err;
      }

      var model = {
        title: toTitleCase(req.params.tag + ' recipes')
      };

      var favorites = response;
      var favoriteIds = [];
      for(var i = 0; i < favorites.length; i++) {
        favoriteIds[favorites[i].id] = true;
      }

      api.getRecipesByTag(req.session.token, req.params.tag, function(err, response) {
        if(err) {
          if(err.message === "Unauthorized") {
            req.session = null;
            return res.redirect("/login");
          }
          throw err;
        }

        model.recipes = response;

        for(var i = 0; i < model.recipes.length; i++) {
          model.recipes[i].title = toTitleCase(model.recipes[i].title);
          model.recipes[i].isFavorite = ((favoriteIds[model.recipes[i].id] !== undefined) && (favoriteIds[model.recipes[i].id] === true));
        }

        res.render('tag', model);
      });
    });
  });

}
