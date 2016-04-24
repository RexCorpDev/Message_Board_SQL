'use strict';

var express = require('express');
var router = express.Router();

router.use('/forum', require('./forum'));

module.exports = router;
