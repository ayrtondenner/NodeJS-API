'use strict';

const mongoose = require('mongoose');
const Game = mongoose.model('Game');

exports.getActiveGames = () => {
    return Game
        .find({
            active: true,
        }, 'name description')
};

exports.getGamesBySlug = (slug) => {
    return Game
        .findOne({
            slug: slug
        }, 'name description')
};

exports.getGamesByCompetences = (competences) => {
    return Game
        .find({
            competences: competences,
            active: true
        }, 'name description')
};

exports.getGamesById = (id) => {
    return Game.findById(id)
};

exports.createGame = (gameBody) => {
    var game = new Game(gameBody);
    return game.save();
};

exports.updateGame = (gameBody) => {
    return Game.findByIdAndUpdate(gameBody.id, {
        $set: {
            name: gameBody.name,
            slug: gameBody.slug,
            description: gameBody.description,
            stages: gameBody.stages,
            competences: gameBody.competences,
            active: gameBody.active
        }
    }, { new: true }) // Para retornar o novo objeto atualizado
};

exports.deleteGame = (id) => {
    return Game.findByIdAndRemove(id);
};