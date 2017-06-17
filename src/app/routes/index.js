"use strict";

/**
 * Module dependencies
 */
const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.sendFile(path.join(process.cwd(), './public/scripts/index.html'));
    console.log(process.cwd());
});

module.exports = router;