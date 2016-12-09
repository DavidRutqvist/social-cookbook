var express = require('express');
var router = express.Router();

/* GET home page. */
router.post("/login", function(req, res, next) {
  //TODO: login
  res.send("Post to LOGIN");
})

router.get("/login", function(req, res, next) {
  res.render("login", { title: "Please sign in using Facebook "});
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

module.exports = router;
