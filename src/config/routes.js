"use strict";

/**
 * Module Dependecies
 */
const path = require('path');
const express = require('express');
const _ = require('lodash');
const index = require(path.join(__dirname, '..', 'app/routes/index'));
const user = require(path.join(__dirname, '..', 'app/models/user'));
// const users = require(path.join(__dirname, '..', './routes/users'));

/**
 * Expose
 */
module.exports = function (app) {
    app.use('/', index);
    app.post('/users', (req, res) => {
        var body = _.pick(req.body, ['email', 'password']);
        var use = new user.User(body);

        use.save().then((use) => {
            res.send(use);
        }).catch((e) => {
            res.status(400).send(e);
        })
    });
};