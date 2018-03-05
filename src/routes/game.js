'use strict';

const controller = require('../controllers/game')

const express = require('express');
const router = express.Router();

router.get('/', controller.getActiveGames)
      .get('/:slug', controller.getGamesBySlug)
      .get('/comp/:competences', controller.getGamesByCompetences)
      .get('/id/:id', controller.getGamesById)
      .post('/', controller.createGame)
      .put('/', controller.updateGame)
      .delete('/', controller.deleteGame)

module.exports = router;