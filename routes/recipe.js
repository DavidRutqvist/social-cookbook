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

  router.post("/recipe/:id/comment", function(req, res) {
    if((req.body.comment !== undefined) && (req.body.comment !== null) && (req.body.comment !== "")) {
      api.comment(req.session.token, req.session.userId, req.params.id, req.body.comment, function(err, result) {
        if(err) {
          throw err;
        }
        else {
          res.redirect("/recipe/" + req.params.id);
        }
      });
    }
    else {
      res.redirect("/recipe/" + req.params.id);
    }
  });
}
