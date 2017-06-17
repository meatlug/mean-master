"use strict";

/**
 * mean-master app
 */

/**
 * Module dependencies
 */
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const debug = require('debug');
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

// app setup
const app = express();
const models = path.join(__dirname, 'src/app/models');
const port = process.env.PORT || 8080;


//Bootstrap models
fs.readdirSync(models)
    .filter(file => ~file.search(/^[^\.].*\.js$/))
    .forEach(file => require(path.join(models, file)));

//Bootstrap routes
// require('./config/passport')(passport);
require('./src/config/express')(app, passport);
require('./src/config/routes')(app, passport);

//create server
function listen() {
    app.listen(port);
    debug('Listening on ' + port);
    console.log('express started on port' + port);
}

function connect(){
   var options = { server: { socketOptions: { keepAlive: 1 } } };
  return mongoose.connect(process.env.DB_HOST, options).connection;
}

connect()
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', listen);

/**
 * Expose
 */
module.exports = app;