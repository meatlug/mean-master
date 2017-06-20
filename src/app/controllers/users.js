"use strict";
const _ = require('lodash');
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.createUser = (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);

    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        console.log(token,'tokens');
        res.header('x-auth', token).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
};

exports.getToken = (req, res, next) => {
    var token = req.header('x-auth');
    User.findByToken(token).then((user) => {
        if (!user) {
            return Promise.reject();
        }
        req.user = user;
        req.token = token;
        next();
    }).catch((e) => {
        res.status(401).send();
    })
};