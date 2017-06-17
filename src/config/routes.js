"use strict";

/**
 * Module Dependecies
 */
const path = require('path');
const express = require('express');
const index = require(path.join(__dirname, '..', 'app/routes/index'));
// const users = require(path.join(__dirname, '..', './routes/users'));

/**
 * Expose
 */
module.exports = function (app) {
    app.use('/', index);
    // app.use('/users', users);
};