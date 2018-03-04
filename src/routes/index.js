'use strict';

const controller = require('../controllers/index')

const express = require('express')
const router = express.Router();

router.get('/', controller.get);

module.exports = router;