"use strict";

/**
 * Module Dependecies
 */
const path = require('path');
const express = require('express');
const _ = require('lodash');
const index = require(path.join(__dirname, '..', 'app/controllers/index'));
const user = require(path.join(__dirname, '..', 'app/controllers/users'));

/**
 * Expose
 */
module.exports = function (app) {
    app.use('/', index);
    app.post('/users', user.createUser);
};