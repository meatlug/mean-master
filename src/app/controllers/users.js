"use strict";
const _ = require('lodash');
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.createUser = (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    var use = new User(body);

    use.save().then((use) => {
        res.send(use);
    }).catch((e) => {
        res.status(400).send(e);
    })
};