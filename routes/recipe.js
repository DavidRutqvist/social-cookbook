var api = require("../apiConsumer");
var toTitleCase = require('to-title-case');

module.exports = function(router) {
  router.get("/recipe/:id", function(req, res) {
    api.getRecipe(req.session.token, req.params.id, function(err, result) {
      if(err) {
        console.log(err);
        throw err;//TODO Deal with recipe not found
      }
      else {
        var recipe = result;

        recipe.title = toTitleCase(recipe.title);

        for(var i = 0; i < recipe.ingredients.length; i++) {
          recipe.ingredients[i].name = toTitleCase(recipe.ingredients[i].name);
        }

        res.render("recipe", result);
      }
    });
  });
}
