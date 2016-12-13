var apiUrl = require("./config").apiUrl;
var Client = require('node-rest-client').Client;
var client = new Client();
var request = require("request");
var streamBuffers = require('stream-buffers');

//Register methods
client.registerMethod("authenticate", apiUrl + "/api/authenticate", "POST");
client.registerMethod("register", apiUrl + "/api/register", "POST");
client.registerMethod("recipes", apiUrl + "/api/recipes", "GET");
client.registerMethod("recipe", apiUrl + "/api/recipes/${id}", "GET");
client.registerMethod("comment", apiUrl + "/api/recipes/${id}/comments", "POST");
client.registerMethod("addRecipe", apiUrl + "/api/recipes", "POST");
client.registerMethod("logout", "https://graph.facebook.com/v2.8/me/permissions", "DELETE");
client.registerMethod("tags", apiUrl + "/api/tags", "GET");
client.registerMethod("favorites", apiUrl + "/api/favorites", "GET");
client.registerMethod("favorite", apiUrl + "/api/recipes/${id}/favorite", "POST");
client.registerMethod("unfavorite", apiUrl + "/api/recipes/${id}/favorite", "DELETE");
client.registerMethod("recipesByTag", apiUrl + "/api/tags/${tag}", "GET");

//Map methods to module exports functions
module.exports = {
  authenticate: function(userId, token, callback) {
    console.log("Authenticate for userId " + userId + " with token " + token);
    var args = {
      data: {
        userId: userId,
        token: token
      },
      headers: {
        "Content-Type": "application/json"
      }
    };

    client.methods.authenticate(args, function(data, response) {
      if(response.statusCode === 401) {
        return callback(new Error("Unauthorized"));
      }

      if(data.success === true) {
        callback(undefined, {
          token: data.token,
          firstName: data.user.firstName,
          lastName: data.user.lastName
        });
      }
      else {
        if(data.message === "Could not find user in database, are you registered?") {
          callback(new Error("User not registered"), undefined);
        }
        else {
          callback(new Error(data.message), undefined);
        }
      }
    })
  },
  register: function(userId, token, callback) {
    console.log("Registering new user with userId " + userId + " and token " + token);
    var args = {
      data: {
        userId: userId,
        token: token
      },
      headers: {
        "Content-Type": "application/json"
      }
    };

    client.methods.register(args, function(data, response) {
      if(response.statusCode === 401) {
        return callback(new Error("Unauthorized"));
      }

      if(data.success === true) {
        callback(undefined, true);
      }
      else {
        callback(new Error(data.message), false);
      }
    })
  },
  getRecipes: function(token, page, callback) {
    console.log("Getting recipes on page " + page);
    var args = {
      data: {
        page: page
      },
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token
      }
    };

    client.methods.recipes(args, function(data, response) {
      if(response.statusCode === 401) {
        return callback(new Error("Unauthorized"));
      }

      if(data.success === undefined) {
        callback(undefined, data);
      }
      else {
        callback(new Error(data.message), undefined);
      }
    });
  },
  getRecipe: function(token, recipeId, callback) {
    console.log("Getting recipe with id " + recipeId);
    var args = {
      path: {
        id: recipeId
      },
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token
      }
    }

    client.methods.recipe(args, function(data, response) {
      if(response.statusCode === 401) {
        return callback(new Error("Unauthorized"));
      }

      if((data.success === undefined) && (data.id !== undefined)) {
        callback(undefined, data);
      }
      else {
        callback(new Error(data.message));
      }
    });
  },
  comment: function(token, userId, recipeId, comment, callback) {
    console.log("Adding comment on recipe with id " + recipeId);
    var args = {
      path: {
        id: recipeId
      },
      data: {
        comment: comment
      },
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token
      }
    }

    client.methods.comment(args, function(data, response) {
      if(response.statusCode === 401) {
        return callback(new Error("Unauthorized"));
      }

      if(data.success === true) {
        callback(undefined, data);
      }
      else {
        callback(new Error(data.message));
      }
    });
  },
  addRecipe: function(token, title, content, numberOfPortions, tags, ingredients, callback) {
    console.log("Adding new recipe");
    var args = {
      data: {
        title: title,
        numberOfPortions: numberOfPortions,
        content: content,
        tags: tags,
        ingredients: ingredients
      },
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token
      }
    };

    client.methods.addRecipe(args, function(data, response) {
      if(response.statusCode === 401) {
        return callback(new Error("Unauthorized"));
      }

      if(data.success === true) {
        return callback(undefined, data.recipeId);
      }
      else if(data.success === false) {
        return callback(new Error(data.message));
      }
      else {
        return callback(new Error("Unknown error"));
      }
    });
  },
  uploadImage: function(token, recipeId, image, callback) {
    console.log("Setting image for recipe with id " + recipeId);
    if(image === null) {
      //Set image to NULL
      request.put({
        url: apiUrl + "/api/recipes/" + recipeId + "/image"
      }, function(err, httpResponse, body) {
        updateImageCallback(err, httpResponse, body, callback);
      });
    }
    else
    {
      console.log(image);
      var formData = {
        image: {
          value: image.buffer,
          options: {
            filename: image.originalname,
            contentType: image.mimetype
          }
        }
      };

      request.put({
        url: apiUrl + "/api/recipes/" + recipeId + "/image",
        formData: formData,
        headers: {
          "x-access-token": token,
          "Content-Type": "multipart/form-data"
        }
      }, function(err, httpResponse, body) {
        updateImageCallback(err, httpResponse, body, callback);
      });
    }
  },
  getTags: function(token, callback) {
    console.log("Gettings tags");

    var args = {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token
      }
    }

    client.methods.tags(args, function(data, response) {
      if(response.statusCode === 401) {
        return callback(new Error("Unauthorized"));
      }

      if(data.success === undefined) {
        callback(undefined, data);
      }
      else {
        callback(new Error(data.message), undefined);
      }
    });
  },
  getFavorites: function(token, callback) {
    console.log("Gettings favorites");

    var args = {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token
      }
    }

    client.methods.favorites(args, function(data, response) {
      if(response.statusCode === 401) {
        return callback(new Error("Unauthorized"));
      }

      if(data.success === undefined) {
        callback(undefined, data);
      }
      else {
        callback(new Error(data.message), undefined);
      }
    });
  },
  favorite: function(token, recipeId, callback) {
    console.log("Favoriting recipe with id " + recipeId);

    var args = {
      path: {
        id: recipeId
      },
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token
      }
    }

    client.methods.favorite(args, function(data, response) {
      if(response.statusCode === 401) {
        return callback(new Error("Unauthorized"));
      }

      if(data.success === true) {
        callback(undefined);
      }
      else {
        callback(new Error(data.message));
      }
    });
  },
  unfavorite: function(token, recipeId, callback) {
    console.log("Unfavoriting recipe with id " + recipeId);

    var args = {
      path: {
        id: recipeId
      },
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token
      }
    }

    client.methods.unfavorite(args, function(data, response) {
      if(response.statusCode === 401) {
        return callback(new Error("Unauthorized"));
      }

      if(data.success === true) {
        callback(undefined);
      }
      else {
        callback(new Error(data.message));
      }
    });
  },
  getRecipesByTag: function(token, tag, callback) {
    console.log("Getting recipes by tag " + tag);
    var args = {
      path: {
        tag: tag
      },
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token
      }
    };

    client.methods.recipesByTag(args, function(data, response) {
      if(response.statusCode === 401) {
        return callback(new Error("Unauthorized"));
      }

      if(data.success === undefined) {
        callback(undefined, data);
      }
      else {
        callback(new Error(data.message), undefined);
      }
    });
  },
  logout: function(userId, fbToken, callback) {
    console.log("Logging out");
    var args = {
      headers: {
        "Authorization": "OAuth " + fbToken,
        "Content-Type": "application/json"
      }
    };
    //TODO: How to log out from API as well?
    client.methods.logout(args, function(data, response) {
      console.log(data.toString());
      callback(data.success);
    });
  }
};

function updateImageCallback(err, httpResponse, body, callback) {
  if(err) {
    throw err;
  }

  var data = JSON.parse(body);

  callback(data.success);
}
