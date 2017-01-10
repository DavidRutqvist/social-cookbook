var api = require("../apiConsumer");
var toTitleCase = require('to-title-case');
var sanitizeHtml = require('sanitize-html');
var multer = require('multer');
var upload = multer();

module.exports = function(router) {

  router.post("/recipe/new", upload.single('image'), function(req, res) {
    var model = req.body;

    if((req.body.recipeTitle === undefined) || (req.body.recipeTitle === null) || (req.body.recipeTitle === "")) {
      model.message = "Missing mandatory title";
      return res.render("newRecipe", model);
    }

    if((req.body.content === undefined) || (req.body.content === null) || (req.body.content === "")) {
      model.message = "Missing mandatory content";
      return res.render("newRecipe", model);
    }

    if((req.body.numberOfPortions === undefined) || (req.body.numberOfPortions === null) || (req.body.numberOfPortions === "")) {
      model.message = "Missing mandatory number of portions";
      return res.render("newRecipe", model);
    }

    if((req.body.ingredients === undefined) || (req.body.ingredients === null) || (req.body.ingredients === "")) {
      model.message = "A recipe must contain at least one ingredient";
      return res.render("newRecipe", model);
    }

    var ingredients = [];
    for(var i = 0; i < req.body.ingredients.length; i++) {
      var ingredient = req.body.ingredients[i];
      if((ingredient.name === "") && (ingredient.amount === "") && (ingredient.unit === "")) {
        continue;//Skip
      }

      if((ingredient.name === "") || (ingredient.amount === "") || (ingredient.unit === "")) {
        model.message = "The recipe contained incomplete ingredient(s)";
        return res.render("newRecipe", model);
      }

      ingredients.push(ingredient);
    }

    if(ingredients.length === 0) {
      model.message = "A recipe must contain at least one ingredient";
      return res.render("newRecipe", model);
    }

    var tags = req.body.tags.trim().replace(",", " ").replace("  ", " ").split(" ");
    var content = sanitizeHtml(req.body.content, {
      allowedTags: [ 'b', 'i', 'em', 'strong', 'a', 'u', 'img', 'ul', 'li', 'ol', 'strike', 'p', 'br' ],
      allowedAttributes: {
        'a': [ 'href', 'target', 'title' ],
        'img': [ 'src', 'alt', 'title' ]
      }
    });

    api.addRecipe(req.session.token, req.body.recipeTitle, content, req.body.numberOfPortions, tags, ingredients, function(err, recipeId) {
      if(err) {
        model.message = err.message;
        res.render("newRecipe", model);
      }

      if(req.file !== undefined) {
        api.uploadImage(req.session.token, recipeId, req.file, function(success) {
          res.redirect("/recipe/" + recipeId);
        });
      }
      else {
        res.redirect("/recipe/" + recipeId);
      }
    });
  });

  router.get("/recipe/new", function(req, res) {
    res.render("newRecipe", {
      title: "Add New Recipe"
    });
  });

  router.get("/recipe/:id/delete", function(req, res) {
    api.getRecipe(req.session.token, req.params.id, function(err, result) {
      if(err) {
        throw err;
      }

      if(req.session.isAdmin || (result.byUser.id === req.session.userId)) {//Weak check, actual check is made by API
        api.deleteRecipe(req.session.token, req.params.id, function(err) {
          if(err) {
            throw err;
          }
          else {
            res.redirect("/");
          }
        });
      }
      else {
        res.redirect("/");
      }
    });
  });

  router.get("/recipe/:id/favorite", function(req, res) {
    api.favorite(req.session.token, req.params.id, function(err) {
      if(err) {
        throw err;
      }
      else {
        api.getFavorites(req.session.token, function(err, response) {
          if(err) {
            throw err;
          }
          else {
            var favorites = response;
            var favorite = null;

            for(var i = 0; i < favorites.length; i++) {
              if(favorites[i].id.toString() === req.params.id.toString()) {
                favorite = favorites[i];
              }
            }

            if(favorite !== null) {
              favorite.title = toTitleCase(favorite.title);
              res.render("favorite", favorite);
            }
            else {
              //If we reach this, then favorite was not added
              res.status(500).send();
            }
          }
        });
      }
    });
  });

  router.get("/recipe/:id/unfavorite", function(req, res) {
    api.unfavorite(req.session.token, req.params.id, function(err) {
      if(err) {
        throw err;
      }
      else {
        res.status(204).send();
      }
    });
  });

  router.get("/recipe/:id/yum", function(req, res) {
    //We ease the UI a bit and take care of checking and changeing like type if already liked here instead
    api.getMyLike(req.session.token, req.params.id, function(current) {
      if(current.likes && (current.type === "yum")) {
        //Nothing to do just return
        res.json({
          success: true
        });
      }
      else {
        //Add/Change to yum
        api.like(req.session.token, req.params.id, "yum", function(err) {
          if(err) {
            throw err;
          }

          res.json({
            success: true
          });
        });
      }
    });
  });

  router.get("/recipe/:id/yuck", function(req, res) {
    //We ease the UI a bit and take care of checking and changeing like type if already liked here instead
    api.getMyLike(req.session.token, req.params.id, function(current) {
      if(current.likes && (current.type === "yuck")) {
        //Nothing to do just return
        res.json({
          success: true
        });
      }
      else {
        //Add/Change to yuck
        api.like(req.session.token, req.params.id, "yuck", function(err) {
          if(err) {
            throw err;
          }

          res.json({
            success: true
          });
        });
      }
    });
  });

  router.get("/recipe/:id/unlike", function(req, res) {
    api.unlike(req.session.token, req.params.id, function(err) {
      if(err) {
        throw err;
      }

      res.json({
        success: true
      });
    });
  });

  router.get("/recipe/:id", function(req, res) {
    api.getRecipe(req.session.token, req.params.id, function(err, result) {
      if(err) {
        if(err.message === "Unauthorized") {
          req.session = null;
          return res.redirect("/login");
        }

        if(err.message === "Recipe not found") {
          return res.redirect("/");
        }

        throw err;
      }
      else {
        var recipe = result;

        recipe.title = toTitleCase(recipe.title);

        for(var i = 0; i < recipe.ingredients.length; i++) {
          recipe.ingredients[i].name = toTitleCase(recipe.ingredients[i].name);
        }

        api.getMyLike(req.session.token, req.params.id, function(like) {
          recipe.currentLike = like;
          api.isFavorite(req.session.token, req.params.id, function(isFavorite) {
            recipe.isFavorite = isFavorite;
            res.render("recipe", recipe);
          });
        });
      }
    });
  });

  router.post("/recipe/:id/comment", function(req, res) {
    if((req.body.comment !== undefined) && (req.body.comment !== null) && (req.body.comment !== "")) {
      api.comment(req.session.token, req.session.userId, req.params.id, req.body.comment, function(err, result) {
        if(err) {
          if(err.message === "Unauthorized") {
            req.session = null;
            return res.redirect("/login");
          }
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
