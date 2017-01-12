define({ "api": [
  {
    "type": "get",
    "url": "/api/recipes/:id/favorite",
    "title": "Check favorite",
    "description": "<p>Checks whether a given recipe is favorited by the current user</p>",
    "name": "Check_favorite",
    "group": "Favorites",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token obtained using authentication process</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of recipe to check</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isFavorite",
            "description": "<p>Indicates whether the recipe is a favorite</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Status message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "isFavorite",
            "description": "<p>Indicates whether the recipe is a favorite</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Status message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/favorites.js",
    "groupTitle": "Favorites"
  },
  {
    "type": "post",
    "url": "/api/recipes/:id/favorite",
    "title": "Favorite recipe",
    "description": "<p>Favorites the recipe with the given id.</p>",
    "name": "Favorite_a_recipe",
    "group": "Favorites",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token obtained using authentication process</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of recipe to favorite</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates whether the recipe was favorited</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Status message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates whether the recipe was favorited</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Status message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/favorites.js",
    "groupTitle": "Favorites"
  },
  {
    "type": "get",
    "url": "/api/favorites",
    "title": "Get Favorites",
    "description": "<p>Gets a list of favorites for the current user</p>",
    "name": "Get_Current_User_s_Favorites",
    "group": "Favorites",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token obtained using authentication process</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "order",
            "defaultValue": "DESC",
            "description": "<p>Order of recipes by date added (ASC or DESC)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "recipes",
            "description": "<p>List of recipes marked as favorite</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "recipes.id",
            "description": "<p>Id of recipe</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recipes.title",
            "description": "<p>Title of recipe</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "recipes.creationTime",
            "description": "<p>Timestamp when the recipe was originally created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recipes.image",
            "description": "<p>Path to recipe's image</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "recipes.byUser",
            "description": "<p>User information of creator</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "recipes.byUser.id",
            "description": "<p>User id of creator</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recipes.byUser.firstName",
            "description": "<p>First name of creator</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recipes.byUser.lastName",
            "description": "<p>Last name of creator</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/favorites.js",
    "groupTitle": "Favorites"
  },
  {
    "type": "delete",
    "url": "/api/recipes/:id/favorite",
    "title": "Unfavorite recipe",
    "description": "<p>Unfavorites the recipe with the given id.</p>",
    "name": "Unfavorite_a_recipe",
    "group": "Favorites",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token obtained using authentication process</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of recipe to unfavorite</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates whether the recipe was unfavorited</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Status message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates whether the recipe was unfavorited</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Status message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/favorites.js",
    "groupTitle": "Favorites"
  },
  {
    "type": "post",
    "url": "/api/autenticate",
    "title": "Authenticate",
    "description": "<p>Authenticate to the API using Facebook Graph API token</p>",
    "name": "Authenticate",
    "group": "General",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>OAuth token obtained by authenticating a user against Facebook's Graph API</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>Facebook user id associated with the supplied token, must match in order to be authenticated</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates whether the authentication process was successful</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token used to make the following calls to the API</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>An object representing the authenticated user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.firstName",
            "description": "<p>First name of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.lastName",
            "description": "<p>Last name of user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.userId",
            "description": "<p>Facebook user id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>Email address of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.role",
            "description": "<p>Name of role to which the user belongs</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates whether the autentication process was successful</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Description of error occured</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "General"
  },
  {
    "type": "get",
    "url": "/api/me",
    "title": "Current User",
    "description": "<p>Gets information about the user currently associated with the given token</p>",
    "name": "Get_Current_User",
    "group": "General",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token obtained using authentication process</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id of the current user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name of current user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last name of current user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email address of current user</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isAdmin",
            "description": "<p>Indicates whether the current user has administrator privileges in order to display user interface accordingly</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates whether the request was successful</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Description of error occured</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "General"
  },
  {
    "type": "post",
    "url": "/api/register",
    "title": "Register",
    "description": "<p>Register a new user</p>",
    "name": "Register",
    "group": "General",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>OAuth token obtained by authenticating a user against Facebook's Graph API</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>Facebook user id associated with the supplied token, must match in order for the user to become a registered user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates whether the registration process was successful</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Description of successful operation</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates whether the registration process was successful</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Description of error occured</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "General"
  },
  {
    "type": "post",
    "url": "/api/recipes/:id/comments",
    "title": "Add Comment",
    "description": "<p>Add a new comment to a specific recipe</p>",
    "name": "Add_a_comment",
    "group": "Recipes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token obtained using authentication process</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the recipe to comment</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Content of comment, no HTML allowed but if HTML is supplied will it be removed by the API</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates whether the request was successful</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates whether the request was successful</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Status message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/recipes.js",
    "groupTitle": "Recipes"
  },
  {
    "type": "post",
    "url": "/api/recipes/:id/likes",
    "title": "Add like",
    "description": "<p>Adds a like to the current recipe. If the current user has already liked the recipe then the like type, i.e. yum or yuck, will be updated accordingly.</p>",
    "name": "Add_a_like",
    "group": "Recipes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token obtained using authentication process</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the recipe to like</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type of like, must be yum or yuck</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates whether the request was successful</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates whether the request was successful</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Status message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/recipes.js",
    "groupTitle": "Recipes"
  },
  {
    "type": "post",
    "url": "/api/recipes",
    "title": "Add Recipe",
    "description": "<p>Add a new recipe to the cookbook</p>",
    "name": "Add_a_new_recipe",
    "group": "Recipes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token obtained using authentication process</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of new recipe</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>HTML content of recipe, will be sanitized by API. Allows simple tags like bold, underline et cetera.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "numberOfPortions",
            "description": "<p>Number of portions the recipe is following</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "ingredients",
            "description": "<p>List of ingredients</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ingredients.name",
            "description": "<p>Name of ingredients</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ingredients.amount",
            "description": "<p>Amount of ingredient, may be a decimal</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ingredients.unit",
            "description": "<p>Unit which the amount is measured in</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates whether the request was successful</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "recipeId",
            "description": "<p>Id of newly created recipe</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Status message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates whether the request was successful</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Status message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/recipes.js",
    "groupTitle": "Recipes"
  },
  {
    "type": "delete",
    "url": "/api/recipes/:id",
    "title": "Delete Recipe",
    "description": "<p>Deletes the recipe and all associated data, i.e. comments, likes, favorites et cetera. The current user must either be creator or administrator in order to be able to delete a recipe.</p>",
    "name": "Delete_a_Recipe",
    "group": "Recipes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token obtained using authentication process</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the recipe to delete</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates whether the request was successful</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Status message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates whether the request was successful</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Status message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/recipes.js",
    "groupTitle": "Recipes"
  },
  {
    "type": "get",
    "url": "/api/recipes/:id",
    "title": "Get Recipe",
    "description": "<p>Gets a specific recipe containing all information about the recipe</p>",
    "name": "Get_a_specific_recipe",
    "group": "Recipes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token obtained using authentication process</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the recipe to get</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of recipe</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of recipe</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "creationTime",
            "description": "<p>Timestamp when the recipe was originally created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Path to recipe's image</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfPortions",
            "description": "<p>The number of portions the recipe is for</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>HTML content of the recipe, i.e. the actual descriptions</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "byUser",
            "description": "<p>User information of creator</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "byUser.id",
            "description": "<p>User id of creator</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "byUser.firstName",
            "description": "<p>First name of creator</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "byUser.lastName",
            "description": "<p>Last name of creator</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "ingredients",
            "description": "<p>Ingredients used in the recipe</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ingredients.id",
            "description": "<p>Id of ingredient</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ingredients.name",
            "description": "<p>Name of ingredients</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ingredients.amount",
            "description": "<p>Amount used for the specific ingredients</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ingredients.unit",
            "description": "<p>Unit which the ingredient is measured in</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "tags",
            "description": "<p>Tags</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "comments",
            "description": "<p>Comments on the recipeId</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "comments.id",
            "description": "<p>Id of comments</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.content",
            "description": "<p>Content of comment</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comments.creationTime",
            "description": "<p>Timestamp of comment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.firstName",
            "description": "<p>First name of user who commented</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.lastName",
            "description": "<p>Last name of user who commented</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "comments.userId",
            "description": "<p>User id of user who commented</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "likes",
            "description": "<p>Object containing count of likes</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "likes.yum",
            "description": "<p>Number of &quot;yums&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "likes.yuck",
            "description": "<p>Number of &quot;yucks&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/recipes.js",
    "groupTitle": "Recipes"
  },
  {
    "type": "get",
    "url": "/api/recipes/:id/likes/me",
    "title": "Get current user's like",
    "description": "<p>Checks whether current user has likes the recipe and returns the type of like</p>",
    "name": "Get_current_user_s_like",
    "group": "Recipes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token obtained using authentication process</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the recipe to get like for</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "likes",
            "description": "<p>Indicates whether the current user likes the recipe or not</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>If the user likes the current recipe is the type of like returned, i.e. yum och yuck</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/recipes.js",
    "groupTitle": "Recipes"
  },
  {
    "type": "get",
    "url": "/api/recipes/:id/likes",
    "title": "Get likes",
    "description": "<p>Gets likes for the recipe</p>",
    "name": "Get_likes_for_recipe",
    "group": "Recipes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token obtained using authentication process</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the recipe to get likes for</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "yum",
            "description": "<p>Number of &quot;yums&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "yuck",
            "description": "<p>Number of &quot;yucks&quot;</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates whether the request was successful</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Status message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/recipes.js",
    "groupTitle": "Recipes"
  },
  {
    "type": "get",
    "url": "/api/recipes",
    "title": "List Recipes",
    "description": "<p>Gets a list of recipes for the given page</p>",
    "name": "Get_list_of_recipes__paginated",
    "group": "Recipes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token obtained using authentication process</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "order",
            "defaultValue": "DESC",
            "description": "<p>Order of recipes by date added (ASC or DESC)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Current page number</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>Page size used when paging results</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalCount",
            "description": "<p>Total number of recipes stored</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "recipes",
            "description": "<p>List of recipes</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "recipes.id",
            "description": "<p>Id of recipe</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recipes.title",
            "description": "<p>Title of recipe</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "recipes.creationTime",
            "description": "<p>Timestamp when the recipe was originally created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recipes.image",
            "description": "<p>Path to recipe's image</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "recipes.byUser",
            "description": "<p>User information of creator</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "recipes.byUser.id",
            "description": "<p>User id of creator</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recipes.byUser.firstName",
            "description": "<p>First name of creator</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recipes.byUser.lastName",
            "description": "<p>Last name of creator</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/recipes.js",
    "groupTitle": "Recipes"
  },
  {
    "type": "delete",
    "url": "/api/recipes/:id/likes",
    "title": "Remove like",
    "description": "<p>Removes a like from the recipe which was added by the current user. Since a user can only like a recipe once is no id or type required.</p>",
    "name": "Remove_a_like",
    "group": "Recipes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token obtained using authentication process</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the recipe to unlike</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates whether the request was successful</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Status message</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates whether the request was successful</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/recipes.js",
    "groupTitle": "Recipes"
  },
  {
    "type": "put",
    "url": "/api/recipes/:id/image",
    "title": "Set image",
    "description": "<p>Sets the image for the recipe. If an image is provided is it uploaded to the API servers, otherwise is the current image set to no image.</p>",
    "name": "Set_image_of_recipe",
    "group": "Recipes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token obtained using authentication process</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the recipe to set image for</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "image",
            "description": "<p>Image supplied as multipart/form-data. If leaved then current image is removed.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates whether the request was successful</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates whether the request was successful</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Status message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/recipes.js",
    "groupTitle": "Recipes"
  },
  {
    "type": "post",
    "url": "/api/roles",
    "title": "Get roles",
    "description": "<p>Gets all roles defined in the system. Requires administrator privileges.</p>",
    "name": "Get_all_roles",
    "group": "Roles",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token obtained using authentication process</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates whether the request was successful</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Status message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "roles",
            "description": "<p>List of available roles</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "roles.roleId",
            "description": "<p>Id of role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "roles.roleName",
            "description": "<p>Name of role</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates whether the request was successful</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Status message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/roles.js",
    "groupTitle": "Roles"
  },
  {
    "type": "get",
    "url": "/api/tags/:tag",
    "title": "Get Recipes by Tag",
    "description": "<p>Gets all recipes containing the given tag</p>",
    "name": "Get_all_recipes_by_tag",
    "group": "Tags",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token obtained using authentication process</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "order",
            "defaultValue": "DESC",
            "description": "<p>Order of recipes by date added (ASC or DESC)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>Tag to get recipes for</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "recipes",
            "description": "<p>List of recipes containing the given tag</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "recipes.id",
            "description": "<p>Id of recipe</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recipes.title",
            "description": "<p>Title of recipe</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "recipes.creationTime",
            "description": "<p>Timestamp when the recipe was originally created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recipes.image",
            "description": "<p>Path to recipe's image</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "recipes.byUser",
            "description": "<p>User information of creator</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "recipes.byUser.id",
            "description": "<p>User id of creator</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recipes.byUser.firstName",
            "description": "<p>First name of creator</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recipes.byUser.lastName",
            "description": "<p>Last name of creator</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/tags.js",
    "groupTitle": "Tags"
  },
  {
    "type": "get",
    "url": "/api/tags",
    "title": "Get Tags",
    "description": "<p>Gets a list of all tags</p>",
    "name": "Get_all_tags",
    "group": "Tags",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token obtained using authentication process</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "tags",
            "description": "<p>List of tags available in the system</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tags.name",
            "description": "<p>Name of tag</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tags.count",
            "description": "<p>Number of recipes containing the tag</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/tags.js",
    "groupTitle": "Tags"
  },
  {
    "type": "get",
    "url": "/api/users/me",
    "title": "Get Current User's Information",
    "description": "<p>Gets the currently logged in user's information along with recipes added by the user</p>",
    "name": "Get_current_user_s_information",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token obtained using authentication process</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates whether the request was successful</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Status message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>The current user's information</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.userId",
            "description": "<p>Id of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>Email of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.firstName",
            "description": "<p>First name of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.lastName",
            "description": "<p>Last name of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.role",
            "description": "<p>Name of role which the user belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "user.recipes",
            "description": "<p>List of recipes added by the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.recipes.id",
            "description": "<p>Id of recipe</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.recipes.title",
            "description": "<p>Title of recipe</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "user.recipes.creationTime",
            "description": "<p>Timestamp when the recipe was originally created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.recipes.image",
            "description": "<p>Path to recipe's image</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user.recipes.byUser",
            "description": "<p>User information of creator</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.recipes.byUser.id",
            "description": "<p>User id of creator</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.recipes.byUser.firstName",
            "description": "<p>First name of creator</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.recipes.byUser.lastName",
            "description": "<p>Last name of creator</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates whether the request was successful</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Status message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/api/users/me",
    "title": "Get User's Information",
    "description": "<p>Gets a given user's information along with recipes added by the user</p>",
    "name": "Get_user_s_information",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token obtained using authentication process</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates whether the request was successful</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Status message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>The user's information</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.userId",
            "description": "<p>Id of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>Email of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.firstName",
            "description": "<p>First name of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.lastName",
            "description": "<p>Last name of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.role",
            "description": "<p>Name of role which the user belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "user.recipes",
            "description": "<p>List of recipes added by the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.recipes.id",
            "description": "<p>Id of recipe</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.recipes.title",
            "description": "<p>Title of recipe</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "user.recipes.creationTime",
            "description": "<p>Timestamp when the recipe was originally created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.recipes.image",
            "description": "<p>Path to recipe's image</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user.recipes.byUser",
            "description": "<p>User information of creator</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.recipes.byUser.id",
            "description": "<p>User id of creator</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.recipes.byUser.firstName",
            "description": "<p>First name of creator</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.recipes.byUser.lastName",
            "description": "<p>Last name of creator</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates whether the request was successful</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Status message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/api/users",
    "title": "Get Users",
    "description": "<p>Gets a list of all users. Requires administrator privileges.</p>",
    "name": "Get_users",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token obtained using authentication process</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates whether the request was successful</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Status message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>A list containing all users in the system</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "users.userId",
            "description": "<p>Id of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.email",
            "description": "<p>Email of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.firstName",
            "description": "<p>First name of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.lastName",
            "description": "<p>Last name of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.role",
            "description": "<p>Name of role which the user belongs to</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Status message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/api/users/:id",
    "title": "Update user",
    "description": "<p>Updates the provided fields for the given user. Currently only changing role is allowed. Requires administrator privileges.</p>",
    "name": "Update_user",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token obtained using authentication process</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of user to update</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "role",
            "description": "<p>Id of role to set the user as</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates whether the request was successful</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Status message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates whether the request was successful</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Status message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/roles.js",
    "groupTitle": "Users"
  }
] });
