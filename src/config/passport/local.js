"use strict";

/**
 * Module Dependecies
 */

const mongoose = require("mongoose");
const User = mongoose.model("User");
const LocalStrategy = require("passport-local").Strategy;

/**
  * Expose
  */

module.exports = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password"
  },
  function(email,password,done) {
      
  }
);
