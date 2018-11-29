'use strict';

const controller = require('../controllers/candidate');

const express = require('express');
const router = express.Router();

router.post('/', controller.createCandidate);

module.exports = router;