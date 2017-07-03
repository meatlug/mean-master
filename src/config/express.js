"use strict";

/**
 * Module dependencies.
 */
const path =require('path');
const logger = require('morgan');
const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


module.exports = function (app, passport) {
    // setting app defaults
    app.use(logger('dev'));
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(express.static(path.join(process.cwd(), 'public')));
    //app.use(favicon(path.join(__dirname, '../..', 'public/images', 'favicon.ico')));
};