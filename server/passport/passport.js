var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var express = require('express');
var router = express.Router();

passport.use('login', new LocalStrategy({
    passReqToCallback : true
  },
  function(req, username, password, done) {
    // check in mongo if a user with username exists or not
console.log("passportlo",username);
}));

module.exports = passport = router;
