var apiUrl = require("./config").apiUrl;
var Client = require('node-rest-client').Client;
var client = new Client();


//Register methods
client.registerMethod("authenticate", apiUrl + "/api/authenticate", "POST");
client.registerMethod("register", apiUrl + "/api/register", "POST");
client.registerMethod("recipes", apiUrl + "/api/recipes", "GET");
client.registerMethod("recipe", apiUrl + "/api/recipes/${id}", "GET");

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
      callback(data);
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
      if((data.success === undefined) && (data.id !== undefined)) {
        callback(undefined, data);
      }
      else {
        callback(new Error(data.message));
      }
    });
  }
};
