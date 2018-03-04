'use strict'

const controller = require('../controllers/game')

const express = require('express');
const router = express.Router();

router.post('/', controller.post)
      .put('/:id', controller.put)
      .delete('/:id', controller.delete)

module.exports = router;