var api = require('../apiConsumer');
var toTitleCase = require('to-title-case');

module.exports = function(router) {

  router.get("/tags", function(req, res) {
    res.redirect("/");
  });

  router.get("/tags/:tag", function(req, res) {
    
  });

}
