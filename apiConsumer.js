var apiUrl = require("./config").apiUrl;
var Client = require('node-rest-client').Client;
var client = new Client();


//Register methods
client.registerMethod("authenticate", apiUrl + "/api/authenticate", "POST");
client.registerMethod("register", apiUrl + "/api/register", "POST");

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
  }
};
