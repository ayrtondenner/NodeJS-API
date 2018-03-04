'use strict';

const controller = require('../controllers/game')

const express = require('express');
const router = express.Router();

router.get('/', controller.get)
      .get('/:slug', controller.getBySlug)
      .get('/comp/:competences', controller.getByCompetences)
      .get('/id/:id', controller.getById)
      .post('/', controller.post)
      .put('/', controller.put)
      .delete('/', controller.delete)

module.exports = router;