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
    app.get('api/users/auth', user.getToken, (req, res) => {
        res.send(req.user);
    });
    app.post('api/users', user.createUser);
    app.use('*', index);
    app.post('api/users/login', user.loginUser);
    app.get('api/checkUser', (req, res) => {
        res.send(true);
    })
};  