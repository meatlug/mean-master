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
const port = process.env.PORT || 8080;
const mongourl = util.format('mongodb://mongo:%s/demo', process.env.MONGO_PORT);
const mongodbUri = 'mongodb://localhost/mean_app' || process.env.MONGODB_URI || mongourl ;
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

connect()
    .on('error', console.log)
    .on('disconnected', connect)
    .once('open', listen);

/**
 * Expose
 */
module.exports = app;