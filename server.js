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
const util = require('util');
const debug = require('debug');
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

// app setup
const app = express();
const models = path.join(__dirname, 'src/app/models');
const port = process.env.PORT || 3000;
const mongodbUri = process.env.MONGODB_URI || process.env.MONGOLAB_URI || createUri();
mongoose.Promise = global.Promise;

//Bootstrap models
fs.readdirSync(models)
    .filter(file => ~file.search(/^[^\.].*\.js$/))
    .forEach(file => require(path.join(models, file)));

//Bootstrap routes
//require('./src/config/passport')(passport);
require('./src/config/express')(app, passport);
require('./src/config/routes')(app, passport);

//create server
function listen() {
    app.listen(port);
    debug('Listening on ' + port);
    console.log('express started on port ' + port);
}

function connect() {
    var options = { server: { socketOptions: { keepAlive: 1 } } };
    return mongoose.connect(mongodbUri, options).connection;
}

function createUri (){
    let uri = null;
    if(process.env.NODE_ENV === 'production'){
       uri =  util.format('mongodb://%s/mean_app','mongo');
       console.log(uri);
       return uri;
    }else {
      uri = util.format('mongodb://%s/mean_app','localhost');
      console.log(uri);
      return uri;
    }
    
}

connect()
    .on('error', console.log)
    .on('disconnected', connect)
    .once('open', listen);

/**
 * Expose
 */
module.exports = app;