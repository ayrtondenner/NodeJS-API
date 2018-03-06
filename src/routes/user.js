'use strict';

const controller = require('../controllers/user');

const express = require('express');
const router = express.Router();

router.post('/', controller.createUser);

module.exports = router;