'use strict';

/**
 * Module dependencies.
 */
require('dotenv').config();
const _ = require('lodash');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        },
    },
    firstName:{
        type:String,
        require:true,
        default:''
    },
    lastName:{
        type:String,
        default:''
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

/**
 * Methods
 */

UserSchema.methods = {
    generateAuthToken : function () {
        var user = this;
        var access = 'auth';
        var token = jwt.sign({ _id: user._id.toHexString(), access },
                               process.env.AUTHENTICATE_SECRET,
                               {expiresIn : 60*60*24}).toString();
    
        user.tokens.push({ access, token });
        return user.save().then(() => {
            return token;
        });
    },
    toJSON = function () {
        var user = this;
        var userObject = user.toObject();
    
        return _.pick(userObject, ['_id', 'firstName']);
    }
}

/**
 * Statics
 */

UserSchema.statics = {
    findByToken : function (token) {
        var User = this;
        var decoded;
        try {
            decoded = jwt.verify(token, process.env.AUTHENTICATE_SECRET);
        } catch (e) {
            return Promise.reject();
        }
    
        return User.findOne({
            '_id': decoded._id,
            'tokens.token': token,
            'tokens.access': 'auth'
        })
    },

    findByLogin : function (email, password) {
        var User = this;
    
        return User.findOne({ email }).then((user) => {
            if (!user) {
                return Promise.reject();
            }
    
            return new Promise((resolve, reject) => {
                bcrypt.compare(password, user.password, (err, res) => {
                    if (res) {
                        console.log(res);
                        resolve(user);
                    } else {
                        console.log(err);
                        reject();
                    }
                });
            })
        })
    }
}

/**
 * Pre-save hook
 */

UserSchema.pre('save', function (next) {
    var user = this;

    if (user.isModified('password')) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                next();
            })
        });
    } else {
        next();
    }
});

mongoose.model('User', UserSchema);